import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient-service';

@Component({
  selector: 'app-patient-profile-card',
  templateUrl: './patient-profile-card.component.html',
  styleUrls: ['./patient-profile-card.component.css'],
})
export class PatientProfileCardComponent implements OnInit {
  @Input() patient: Patient;
  selectedFile: File;
  finishedAppointments: number = 0;
  upcomingAppointments: number = 0;
  constructor(private patientService: PatientService) {
    console.log(this.patient?.photo);
  }
  ngOnInit(): void {
    this.patientService.finishedAppointmentsSubject.subscribe((obj) => {
      this.finishedAppointments = obj.finishedAppointments;
      this.upcomingAppointments = obj.upcomingAppointments;
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('id', this.patient._id);
    formData.append('photo', this.selectedFile, this.selectedFile.name);

    this.patientService.http
      .patch(this.patientService.baseURL + 'uploadPhoto', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
