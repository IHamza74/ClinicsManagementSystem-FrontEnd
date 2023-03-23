import { Injectable } from '@angular/core';
import { Patient, PatientEdit } from '../Models/patient';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  currentPatient: Patient;
  patients: Patient[] = [];
  constructor(public http: HttpClient, public router: Router) {}

  baseURL = 'http://localhost:3000/patient/';

  patientsList: PatientEdit[] = [];

  //getting All Patients
  getAllPatients() {
    return this.http.get<Patient[]>(this.baseURL);
  }

  getAllPatientsForEdit() {
    this.http.get<PatientEdit[]>(this.baseURL).subscribe((data) => {
      data.forEach((patient) => {
        this.patientsList.push(patient);
      });
    });
  }

  getPatientByID(id: string) {
    return this.http.get<Patient>(this.baseURL + id);
  }

  getPatientByIDForEdit(id: string) {
    return this.http.get<Patient>(this.baseURL + id);
  }

  addNewPatient(patient: Patient) {
    return this.http.post<Patient>(this.baseURL, patient);
  }

  updatePatientByID(patient: PatientEdit) {
    return this.http.patch(this.baseURL, patient);
  }
  deletePatient(id: string) {
    return this.http.delete(this.baseURL + id);
  }
  setCurrentPatient(patient: Patient) {
    this.currentPatient = patient;
  }
}
