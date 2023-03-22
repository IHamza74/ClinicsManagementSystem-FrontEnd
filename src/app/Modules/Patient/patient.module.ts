import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientAddComponent,
    PatientEditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [PatientListComponent, PatientAddComponent, PatientEditComponent],
})
export class PatientModule {}
