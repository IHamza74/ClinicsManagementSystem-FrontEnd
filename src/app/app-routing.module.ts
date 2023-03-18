import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AddClinicComponent } from './Modules/clinic/add-clinic/add-clinic.component';
import { ClinicListComponent } from './Modules/clinic/clinic-list/clinic-list.component';



const routes: Routes = [
  {path:"clinic",component:ClinicListComponent},
  {path:"clinic/add",component:AddClinicComponent},
  // {path:"clinci/update/:id",component:u

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { 


}
