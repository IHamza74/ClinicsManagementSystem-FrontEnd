import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor, DoctorPatch } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css'],
})
export class DoctorEditComponent implements OnInit, DoCheck {
  @Input() doctorId: string;
  @Input() currentDoctor: Doctor;

  @Input() index: number;
  editForm: FormGroup;
  doctor: DoctorPatch = new DoctorPatch('', '', 0, '', '', '', '', '', []);
  @Input() doctors: Doctor;
  photoFile: File;
  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.editForm = new FormGroup({
      username: new FormControl(this.currentDoctor.name, [
        Validators.required,
        Validators.pattern('([a-zA-Z]{3,8})([ ])([a-zA-Z]{3,8})'),
      ]),
      age: new FormControl(this.currentDoctor.age, [
        Validators.required,
        Validators.pattern('(3[0-9]|[4-5][0-9]|60)'),
      ]),
      speciality: new FormControl('Surgeon', [Validators.required]),
      email: new FormControl(this.currentDoctor.email, [
        Validators.required,
        Validators.email,
        Validators.pattern('(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})'),
      ]),
      password: new FormControl(this.currentDoctor.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      photo: new FormControl(null, null),
      workinghours: new FormControl(this.currentDoctor.workingHours, [
        Validators.required,
        Validators.pattern('(^[4-8]$)'),
      ]),
    });
  }
  onEdit() {
    this.doctor.id = this.currentDoctor._id;
    this.doctor.appointmentNo = this.currentDoctor.appointmentNo;
    console.log(this.doctorId);
    console.log(this.index);
    console.log(this.editForm);
    this.editForm.patchValue({
      username: this.currentDoctor.name,
      age: this.currentDoctor.age,
      email: this.currentDoctor.email,
      password: this.currentDoctor.password,
      //photo: this.currentDoctor.photo,
      speciality: this.currentDoctor.speciality,
      workinghours: this.currentDoctor.workingHours,
    });
  }

  ngDoCheck() {
    this.doctorService.doctors;
  }

  /* editPhoto() {
    this.doctorService.editPhoto(this.doctor).subscribe((data) => {
      console.log(data);
      let newDoctor = { _id: this.doctor.id, ...this.doctor };
      delete newDoctor.id;
    });
  } */

  onSelectPhoto(event) {
    this.doctorService.onSelectPhoto(event);
  }
  editDoctor() {
    this.doctor.name = this.editForm.value.username;
    this.doctor.age = this.editForm.value.age;
    this.doctor.email = this.editForm.value.email;
    this.doctor.password = this.editForm.value.password;
    this.doctor.photo = this.editForm.value.photo;
    this.doctor.speciality = this.editForm.value.speciality;
    this.doctor.workingHours = this.editForm.value.workinghours;

    if (this.editForm.controls.photo.dirty) {
      this.doctorService.doctor = this.doctor;
      this.doctorService.onUploadPhoto();
    }

    this.doctorService.editDoctor(this.doctor).subscribe((data) => {
      console.log(data);
      let newDoctor = { _id: this.doctor.id, ...this.doctor };
      delete newDoctor.id;

      let ind = this.doctorService.doctors.indexOf(newDoctor);
      this.doctorService.doctors.splice(ind, 1, newDoctor);
    });
  }
}
