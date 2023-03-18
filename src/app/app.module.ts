import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DoctorModule } from './Modules/doctor/doctor.module';
import { DoctorService } from './Services/doctor.service';
import { AppModuleRoute } from './app-Module-Routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    DoctorModule,
    AppModuleRoute,
    ReactiveFormsModule,
    AccordionModule,
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
