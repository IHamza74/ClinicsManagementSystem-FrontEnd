import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {ClinicModule} from '../app/Modules/clinic/clinic.module'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MedicineModule } from './Modules/medicine/medicine.module';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MedicineModule,
    HttpClientModule,
    ClinicModule,
    CommonModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
