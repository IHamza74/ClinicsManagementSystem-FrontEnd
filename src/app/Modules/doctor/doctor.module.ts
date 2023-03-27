import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { MegaMenuModule } from 'primeng/megamenu';

import { DoctorListComponent } from 'src/app/doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from 'src/app/doctor/doctor-add/doctor-add.component';
import { DoctorEditComponent } from 'src/app/doctor/doctor-edit/doctor-edit.component';
import { DoctorDetailsComponent } from 'src/app/doctor/doctor-details/doctor-details.component';
import { DoctorProfileModule } from 'src/app/profile/doctor-profile/doctor-profile.module';

@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorAddComponent,
    DoctorEditComponent,
    DoctorDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    MegaMenuModule,
    DoctorProfileModule,
  ],
  exports: [
    DoctorListComponent,
    DoctorAddComponent,
    DoctorEditComponent,
    DoctorDetailsComponent,
  ],
})
export class DoctorModule {}
