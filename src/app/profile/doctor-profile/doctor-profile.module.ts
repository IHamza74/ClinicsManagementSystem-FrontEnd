import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileCardComponent } from './doctor-profile-card/doctor-profile-card.component';

@NgModule({
  declarations: [DoctorProfileCardComponent],
  imports: [CommonModule],
  exports: [DoctorProfileCardComponent],
})
export class DoctorProfileModule {}
