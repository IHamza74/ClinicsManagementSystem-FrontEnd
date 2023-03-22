import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Employee } from 'src/app/Models/employee';
import { Patient } from 'src/app/Models/patient';
import { DoctorService } from 'src/app/Services/doctor.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { PatientService } from 'src/app/Services/patient-service';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  role: string;
  id: string;
  user: Employee | Doctor | Patient;
  //userService: EmployeeService | DoctorService;
  constructor(
    private employeeService: EmployeeService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private profileService: ProfileService
  ) {
    this.role = this.profileService.role;
    this.id = this.profileService.id;
    /* delete these lines after login */
    // this.role = 'employee'; //emp
    // this.id = '63e410b48004ee37f326d924'; //emp
    // this.user = new Employee('ahmed', 'Ahmed@gmail.com', '12345678', 25, {
    //   government: 'Egypt',
    //   city: 'Tanta',
    //   street: 'ElTer3a st',
    //   building: '10',
    // });
    // this.role = 'doctor'; //doc
    // this.id = '63e4e87211226c1452238226'; //doc
    // this.user = new Doctor(
    //   '63e4e87211226c1452238226',
    //   'ahmed',
    //   25,
    //   'kaka',
    //   'ahmed@gail.com',
    //   '1234567989',
    //   '',
    //   '',
    //   []
    // );
    // this.role = 'patient'; //patient
    // this.id = '63e4e9cf59930fe8aca061aa'; //patient
    // this.user = new Patient(
    //   '',
    //   '',
    //   0,
    //   '',
    //   {
    //     government: 'Egypt',
    //     city: 'Tanta',
    //     street: 'ElTer3a st',
    //     building: '10',
    //   },
    //   [],
    //   '',
    //   '',
    //   '',
    //   ''
    // );
  }
  ngOnInit(): void {
    console.log(this.profileService.role);
    console.log(this.profileService.id);
    switch (this.profileService.role) {
      case 'employee':
        this.employeeService
          .getById(this.profileService.id)
          .subscribe((employee) => {
            this.employeeService.setCurrentEmployee(employee);
            this.profileService.user = employee;
            console.log(this.profileService.user);
          });
        break;
      case 'doctor':
        this.doctorService
          .getById(this.profileService.id)
          .subscribe((doctor) => {
            this.doctorService.setCurrentDoctor(doctor);
            this.profileService.user = doctor;
            console.log(this.profileService.user);
          });
        break;
      case 'patient':
        this.patientService
          .getPatientByID(this.profileService.id)
          .subscribe((patient) => {
            //   this.patientService.setCurrentPatient(patient);
            this.profileService.user = patient;
            this.profileService.user.name = patient.Name;
            console.log(patient.name);

            console.log(this.profileService.user.name);
          });
        break;
    }
  }
}
