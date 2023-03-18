import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';

const routes: Routes = [{ path: 'doctor', component: DoctorListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModuleRoute {}
