import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/Models/clinic';
import { ClinicService } from 'src/app/Services/clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent {
  
  tempClinic :Clinic =new Clinic('','','',["640f97cc4b291a07467f8042"]);
 
 constructor(public clinicService:ClinicService,public router:Router){}

  addClinic(){

    this.clinicService.addClinic(this.tempClinic).subscribe(data=>{
     console.log(data);
     this.router.navigateByUrl("/clinic")
 
    })
  }
}
