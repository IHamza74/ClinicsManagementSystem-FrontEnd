import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileCardComponent } from './doctor-profile-card/doctor-profile-card.component';
import { DoctorProfileEditComponent } from './doctor-profile-edit/doctor-profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorDataComponent } from './doctor-data/doctor-data.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [DoctorProfileCardComponent, DoctorProfileEditComponent, DoctorDataComponent],
  imports: [CommonModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule,MatTabsModule],
  exports: [DoctorProfileCardComponent,DoctorProfileEditComponent,DoctorDataComponent],
})
export class DoctorProfileModule {}
