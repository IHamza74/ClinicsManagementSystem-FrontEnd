import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent {
  @Input() doctorId: string;
  @Input() index: number;
  doctor: Doctor = new Doctor('', '', 0, '', '', '', '', '', []);
  @Input() doctors: Doctor;
  constructor(private doctorService: DoctorService) {}

  onShow() {
    /* this.doctorService.getById(this.doctorId).subscribe((data) => {
      this.doctor = data;
      console.log(this.doctor);
    }); */
    this.doctor = this.doctors[this.index];
  }
}
