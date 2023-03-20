import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Employee } from 'src/app/Models/employee';
import { DoctorService } from 'src/app/Services/doctor.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() role: string;
  @Input() id: string;
  user: Employee | Doctor;
  //userService: EmployeeService | DoctorService;
  constructor(
    private employeeService: EmployeeService,
    private doctorService: DoctorService
  ) {
    /* delete these lines after login */
    // this.role = 'employee'; //emp
    // this.id = '63e4017bd43ff93971c13140'; //emp
    // this.user = new Employee('ahmed', 'Ahmed@gmail.com', '12345678', 25, {
    //   government: 'Egypt',
    //   city: 'Tanta',
    //   street: 'ElTer3a st',
    //   building: '10',
    // });
    this.role = 'doctor'; //doc
    this.id = '63e4e87211226c1452238226'; //doc
    
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
    }
  }
}
