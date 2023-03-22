import { Component } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Employee } from 'src/app/Models/employee';
import { Patient } from 'src/app/Models/patient';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [
    './nav-bar.component.css',
    '../../../assets/css/style.css',
    '../../../assets/css/responsive.css',
  ],
})
export class NavBarComponent {
  user: Employee | Doctor | Patient;

  constructor(public profileService: ProfileService) {
    profileService.userSubject.subscribe((user) => (this.user = user));
  }
}
