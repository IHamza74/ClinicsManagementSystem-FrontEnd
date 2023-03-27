import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClinicComponent } from './Modules/clinic/add-clinic/add-clinic.component';
import { ClinicListComponent } from './Modules/clinic/clinic-list/clinic-list.component';
import { EmployeeListComponent } from './Modules/employee/employee-list/employee-list.component';
import { AddMedicineComponent } from './Modules/medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Modules/medicine/edit-medicine/edit-medicine.component';
import { ListMedicineComponent } from './Modules/medicine/list-medicine/list-medicine.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile/profile.component';
import { PatientListComponent } from './Modules/Patient/patient-list/patient-list.component';
import { PatientAddComponent } from './Modules/Patient/patient-add/patient-add.component';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './Services/auth.guard.service';

const routes: Routes = [
  { path: 'clinic', component: ClinicListComponent },
  { path: 'clinic/add', component: AddClinicComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'edit-medicine', component: EditMedicineComponent },
  { path: 'list-medicine', component: ListMedicineComponent },
  { path: 'Employee', component: EmployeeListComponent },
  { path: 'doctor', component: DoctorListComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  { path: 'auth', component: AuthComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
