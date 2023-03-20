import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';

@Component({
  selector: 'app-doctor-profile-card',
  templateUrl: './doctor-profile-card.component.html',
  styleUrls: ['./doctor-profile-card.component.css','./../../profile/profile.component.css'],
})
export class DoctorProfileCardComponent {
  @Input() doctor: Doctor;
}
