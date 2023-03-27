import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { Employee } from 'src/app/Models/employee';
import { Patient } from 'src/app/Models/patient';
import { ProfileService } from 'src/app/Services/profile.service';
import { Subject } from 'rxjs';

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
  userLogged = false;
  currentLoggedRole: string;

  constructor(public profileService: ProfileService, private route: Router) {
    profileService.userSubject.subscribe((user) => {
      if (!this.profileService.isUserLogged) {
        this.userLogged = true;
      } else {
        this.userLogged = this.profileService.isUserLogged;
      }
      this.user = user;
      this.currentLoggedRole = localStorage.getItem('role');
      this.profileService.userIsStillLoged.next(this.userLogged);
    });
  }
  ngOnInit() {
    console.log('refresh');
  }
  logOut() {
    localStorage.clear();
    this.userLogged = !this.userLogged;
    this.currentLoggedRole = null;
    this.user = null;
  }
}
