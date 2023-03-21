import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileCardComponent } from './doctor-profile-card/doctor-profile-card.component';
import { DoctorProfileEditComponent } from './doctor-profile-edit/doctor-profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorProfileCardComponent, DoctorProfileEditComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [DoctorProfileCardComponent,DoctorProfileEditComponent],
})
export class DoctorProfileModule {}
