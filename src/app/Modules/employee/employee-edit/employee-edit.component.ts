import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  @Input() currentIndex: number;
  @Input() currentEmployee: Employee;

  editForm: FormGroup;
  employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }
  ngOnInit(): void {
    //this.currentEmployee = this.employeeService.currentEmployee;
    this.editForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(
        null
        //    [Validators.email]
      ),
      password: new FormControl(null, [Validators.minLength(8)]),
      age: new FormControl(null, [Validators.min(20), Validators.max(60)]),
      government: new FormControl(null),
      city: new FormControl(null),
      street: new FormControl(null),
      building: new FormControl(null),
    });
    this.editForm.patchValue({
      name: this.currentEmployee.name,
      email: this.currentEmployee.email,
      password: this.currentEmployee.password,
      age: this.currentEmployee.age,
      government: this.currentEmployee.address.government,
      city: this.currentEmployee.address.city,
      street: this.currentEmployee.address.street,
      building: this.currentEmployee.address.building,
    });
  }

  onSubmit() {
    this.currentEmployee.name = this.editForm.value.name;
    this.currentEmployee.email = this.editForm.value.email;
    this.currentEmployee.password = this.editForm.value.password;
    this.currentEmployee.age = this.editForm.value.age;
    this.currentEmployee.address.government = this.editForm.value.government;
    this.currentEmployee.address.city = this.editForm.value.city;
    this.currentEmployee.address.street = this.editForm.value.street;
    this.currentEmployee.address.building = this.editForm.value.building;

    this.employeeService
      .edit(this.currentEmployee)
      .subscribe((a) => console.log(a));
  }
}
