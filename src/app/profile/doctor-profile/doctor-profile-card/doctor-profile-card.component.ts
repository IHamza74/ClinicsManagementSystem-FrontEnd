import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-profile-card',
  templateUrl: './doctor-profile-card.component.html',
  styleUrls: ['./doctor-profile-card.component.css','./../../profile/profile.component.css'],
})
export class DoctorProfileCardComponent {
  @Input() doctor: Doctor;
  selectedFile: File;

  constructor(private doctorService: DoctorService) {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('id', this.doctor._id);
    formData.append('photo', this.selectedFile, this.selectedFile.name);

    this.doctorService.http
      .patch(this.doctorService.baseUrl + 'uploadPhoto', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
