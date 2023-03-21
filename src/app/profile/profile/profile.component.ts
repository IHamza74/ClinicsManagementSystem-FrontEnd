import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Employee } from 'src/app/Models/employee';
import { Patient } from 'src/app/Models/patient';
import { DoctorService } from 'src/app/Services/doctor.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { PatientService } from 'src/app/Services/patient-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() role: string;
  @Input() id: string;
  user: Employee | Doctor | Patient;
  //userService: EmployeeService | DoctorService;
  constructor(
    private employeeService: EmployeeService,
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {
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

    this.role = 'patient'; //patient
    this.id = '63e4e9cf59930fe8aca061aa'; //patient
    this.user = new Patient(
      '',
      '',
      0,
      '',
      {
        government: 'Egypt',
        city: 'Tanta',
        street: 'ElTer3a st',
        building: '10',
      },
      [],
      '',
      '',
      '',
      ''
    );
  }
  ngOnInit(): void {
    switch (this.role) {
      case 'employee':
        this.employeeService.getById(this.id).subscribe((employee) => {
          this.employeeService.setCurrentEmployee(employee);
          this.user = employee;
          console.log(this.user);
        });
        break;
      case 'doctor':
        this.doctorService.getById(this.id).subscribe((doctor) => {
          this.doctorService.setCurrentDoctor(doctor);
          this.user = doctor;
          console.log(this.user);
        });
        break;
      case 'patient':
        this.patientService.getPatientByID(this.id).subscribe((patient) => {
          //   this.patientService.setCurrentPatient(patient);
          this.user = patient;
          this.user.name = patient.Name;
          console.log(patient.name);

          console.log(this.user.name);
        });
        break;
    }
  }
}
