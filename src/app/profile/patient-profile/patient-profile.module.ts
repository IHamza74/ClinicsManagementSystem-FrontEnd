import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileCardComponent } from './patient-profile-card/patient-profile-card.component';
import { PatientProfileEditComponent } from './patient-profile-edit/patient-profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientDataComponent } from './patient-data/patient-data.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [PatientProfileCardComponent, PatientProfileEditComponent, PatientDataComponent],
  imports: [CommonModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule,MatTabsModule],
  exports: [PatientProfileCardComponent,PatientProfileEditComponent,PatientDataComponent],
})
export class PatientProfileModule {}
