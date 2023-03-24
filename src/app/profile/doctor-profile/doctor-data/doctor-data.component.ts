import { Doctor } from 'src/app/Models/doctor';
import { AfterViewInit, Component, ViewChild,Input } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentScheduler } from 'src/app/Models/appointment-scheduler';

@Component({
  selector: 'app-doctor-data',
  templateUrl: './doctor-data.component.html',
  styleUrls: ['./doctor-data.component.css'],
})
export class DoctorDataComponent  {
    
  @Input() doctor:Doctor;
   appointments :AppointmentScheduler[]=[];
   myFilter :AppointmentScheduler[]=[];
   id:string;
  constructor(public doctorService:DoctorService)
  {
    
    this.id = localStorage.getItem('id');
  
    this.getData();

  }
  

  filterData(event: any) {
    if (event.target.value != '') {
      this.myFilter = this.appointments.filter((item) =>
        item.patientID['Name']
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      this.appointments = this.myFilter;
    } else this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.doctorService.getAppointments(this.id).subscribe((data) => {
      console.log(data);
      this.appointments = data;
      this.myFilter = this.appointments;
    });
  }
}
