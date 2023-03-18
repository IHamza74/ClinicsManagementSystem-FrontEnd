import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicineModule } from './Modules/medicine/medicine.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicineComponent } from './Modules/medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Modules/medicine/edit-medicine/edit-medicine.component';
import { ListMedicineComponent } from './Modules/medicine/list-medicine/list-medicine.component';

const medicineRoutes: Routes = [
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'edit-medicine', component: EditMedicineComponent },
  { path: 'list-medicine', component: ListMedicineComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MedicineModule,
    HttpClientModule,
    RouterModule.forRoot(medicineRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
