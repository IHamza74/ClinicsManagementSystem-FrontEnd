import { AfterViewInit, Component,ViewChild} from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentScheduler } from 'src/app/Models/appointment-scheduler';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-doctor-data',
  templateUrl: './doctor-data.component.html',
  styleUrls: ['./doctor-data.component.css']
})
export class DoctorDataComponent  {
    
  id ="640fb1644b291a07467f8087";
   appointments :AppointmentScheduler[];
   
   dataSource = new MatTableDataSource<AppointmentScheduler>();

   totalItems: number = 0;

      displayedColumnss: string[] = ['Patient', 'Complaint', 'Clinic', 'Date'];

  constructor(public doctorService:DoctorService)
  {
   
    this.loadData();
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
      this.doctorService.getAppointments(this.id).subscribe(data=>{
    console.log(data);
        this.dataSource.data = data;
        this.totalItems = data.length;
      
      })
  
    }, 1000);
  }

  

  ngOnInit()
  {
    this.loadData();
    

  }




}

