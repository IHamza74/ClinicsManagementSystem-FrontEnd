import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileCardComponent } from './patient-profile-card/patient-profile-card.component';

@NgModule({
  declarations: [PatientProfileCardComponent],
  imports: [CommonModule],
  exports: [PatientProfileCardComponent],
})
export class PatientProfileModule {}
