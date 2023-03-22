import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentScheduler } from 'src/app/Models/appointment-scheduler';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient-service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent {

  @Input() patient: Patient;
  id ="63e52ef90bcc43f0d19f8f8d";
  appointments :AppointmentScheduler[];
  
  dataSource = new MatTableDataSource<AppointmentScheduler>();

  totalItems: number = 0;

     displayedColumnss: string[] = ['Doctor', 'Section', 'Clinic', 'Date'];

 constructor(public patientService:PatientService)
 {
       console.log(this.patient);
  
 }


@ViewChild(MatPaginator) paginator!: MatPaginator;

 onPageChange(event: any) {
   // Update the data source and total items when the paginator changes pages
   this.dataSource.paginator = this.paginator;
   this.totalItems = this.dataSource.data.length;
 }

 loadData() {
   // Simulate loading data asynchronously from a server
   setTimeout(() => {
  
      
  
  this.patientService.getAppointments(this.id).subscribe(data=>{
  console.log(data);
  this.dataSource.data=data;
  this.totalItems-data.length;

  })
  
  
 
   }, 1000);
 }

 

 ngOnInit()
 {
   this.loadData();
   

 }




}





