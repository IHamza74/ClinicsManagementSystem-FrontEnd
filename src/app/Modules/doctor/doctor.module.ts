import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { MegaMenuModule } from 'primeng/megamenu';

import { DoctorListComponent } from 'src/app/doctor/doctor-list/doctor-list.component';
import { DoctorAddComponent } from 'src/app/doctor/doctor-add/doctor-add.component';
import { DoctorEditComponent } from 'src/app/doctor/doctor-edit/doctor-edit.component';

@NgModule({
  declarations: [DoctorListComponent, DoctorAddComponent, DoctorEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    MegaMenuModule,
  ],
  exports: [DoctorListComponent, DoctorAddComponent, DoctorEditComponent],
})
export class DoctorModule {}
