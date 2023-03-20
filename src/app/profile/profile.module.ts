import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { EmployeeProfileModule } from './employee-profile/employee-profile.module';
import { DoctorProfileCardComponent } from './doctor-profile/doctor-profile-card/doctor-profile-card.component';

@NgModule({
  declarations: [ProfileComponent, DoctorProfileCardComponent],
  imports: [CommonModule, FormsModule, EmployeeProfileModule],
})
export class ProfileModule {}
