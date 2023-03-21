import { Component } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient-service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  //patients Array to recieve patients in from DB
  public Patients: Patient[] = [];

  constructor(public patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((data) => {
      this.Patients = data;
    });
  }

  deletePatient(id: string, index: number) {
    this.patientService.deletePatient(id).subscribe((response) => {
      console.log(response);
      this.Patients.splice(index, 1);
      console.log(this.Patients);
    });
  }
}
