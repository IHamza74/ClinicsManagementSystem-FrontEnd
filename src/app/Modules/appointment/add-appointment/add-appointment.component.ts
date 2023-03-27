import { Component } from '@angular/core';
import { AppointmentScheduler } from 'src/app/Models/appointment-scheduler';
import { Clinic } from 'src/app/Models/clinic';
import { Doctor } from 'src/app/Models/doctor';
import { Patient } from 'src/app/Models/patient';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { ClinicService } from 'src/app/Services/clinic.service';
import { DoctorService } from 'src/app/Services/doctor.service';
import { PatientService } from 'src/app/Services/patient-service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
  providers:[ConfirmationService, MessageService]
})
export class AddAppointmentComponent {
  appointments:AppointmentScheduler[]=[];
  doctorArray:Doctor[]=[];
  patientArray:Patient[]=[];
  clinicArray:Clinic[]=[];
  selecteDoctor:Doctor;
  selectPatient:Patient;
  selectClinic:Clinic; 
  date :Date=new Date();
  empId:string;


  
  constructor(public appointmentService: AppointmentService,
    public doctoService:DoctorService,
    public patientService:PatientService,
    public clinicService:ClinicService,
    public confirmationService: ConfirmationService, 
    public messageService: MessageService
    ){
      this.empId = localStorage.getItem('id');
    }

    confirm(event: Event,clinic:Clinic) {
      this.confirmationService.confirm({
          target: event.target,
          message: 'Are you sure  you want to cancel this appointment?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

              this.appointmentService.deleteAppointment(clinic._id).subscribe(data=>{
                console.log(data)
              
                this.appointments.splice(
     
                  this.appointments.findIndex(a=>a._id==clinic._id),
                  1
               )
          })

          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          }
      });
  }


  ngOnInit()
  {
    this.getData();
        this.doctoService.getAll().subscribe(data=>{
         console.log(data);
          this.doctorArray=data;
        })
this.patientService.getAllPatients().subscribe(data=>{
  this.patientArray=data;
  console.log(data);
})

this.clinicService.getAllClinics().subscribe(data=>{
  this.clinicArray=data;
})

  
    

  }

  getData()
  {
    this.appointmentService.getAppointmentGtToday().subscribe(data=>{
      this.appointments =data;
      console.log(this.appointments);
    })
  }


  saveReservation()
  {
    
   // console.log(this.selectPatient);
    if(this.selecteDoctor!=undefined && this.selectPatient != undefined && this.selectClinic!=undefined &&this.date!=undefined )
  {
       
        this.appointmentService.addAppointment(

          new AppointmentScheduler(this.selectPatient?._id,this.selecteDoctor._id,this.selectClinic._id,this.empId,this.date)
        ).subscribe(data=>{
          alert(data);
        })

  }
 
  }

  
}
