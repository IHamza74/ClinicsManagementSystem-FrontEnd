import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientEdit } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient-service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
})
export class PatientEditComponent {
  constructor(public patientService: PatientService, public router: Router) {}
  ngOnInit() {}
  government = '';
  city = '';
  street = '';
  building = '';

  patientAddress = {
    government: this.government,
    city: this.city,
    street: this.street,
    building: this.building,
  };
  newPatient = new PatientEdit(
    '',
    '',
    0,
    '',
    this.patientAddress,
    [],
    '',
    '',
    '',
    ''
  );

  onEdit(id: string) {
    // this.patientService.getAllPatientsForEdit();
    // console.log(this.patientService.patientsList);

    // console.log(this.newPatient);
    this.patientService.getPatientByIDForEdit(id).subscribe((data) => {
      console.log(data);
      this.newPatient.id = data._id;
      this.newPatient.name = data.name;
      this.newPatient.age = data.Age;
      this.newPatient.address = data.Address;
      this.newPatient.photo = data.Photo;
      this.newPatient.Apointments = data.Apointments;
      this.newPatient.email = data.Email;
      this.newPatient.section = data.Section;
      this.newPatient.password = data.Password;
      this.newPatient.disease = data.Disease;
      console.log(this.newPatient);
    });
  }

  @Input() index: number;
  @Input() id: string;

  form = new FormGroup({
    patientName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    patientAge: new FormControl('', [Validators.required]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9 ]*'),
    ]),
    building: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9 ]*'),
    ]),
    Disease: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    PatientMail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9 ]*'),
      Validators.minLength(8),
    ]),
    section: new FormControl(),
    government: new FormControl(),
  });
  get patientName() {
    return this.form.get('patientName');
  }

  get patientAge() {
    return this.form.get('patientAge');
  }
  get patientCity() {
    return this.form.get('city');
  }
  get patientSt() {
    return this.form.get('street');
  }
  get patientMail() {
    return this.form.get('PatientMail');
  }
  get patientBuilding() {
    return this.form.get('building');
  }
  get patientDisease() {
    return this.form.get('Disease');
  }
  get patientPassword() {
    return this.form.get('password');
  }

  editPatient(id: string) {
    this.newPatient = new PatientEdit(
      id,
      this.form.value.patientName,
      Number(this.form.value.patientAge),
      '',
      {
        government: this.form.value.government,
        city: this.form.value.city,
        street: this.form.value.street,
        building: this.form.value.building,
      },
      [],
      this.form.value.Disease,
      this.form.value.section,
      this.form.value.password,
      this.form.value.PatientMail
    );
    this.patientService
      .updatePatientByID(this.newPatient)
      .subscribe((Response) => {
        console.log(Response);
        this.router.navigateByUrl('/patient');
      });
  }
}
