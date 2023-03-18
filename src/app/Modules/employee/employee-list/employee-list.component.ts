import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  editMode = false;
  addMode = false;

  currentEmployee: Employee;
  employees: Employee[] = [];
  employeeService: EmployeeService;
  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }
  ngOnInit(): void {
    this.employeeService.getAll().subscribe((employees) => {
      this.employees = employees.slice(0, 10);
      console.log(employees.slice(0, 10));
    });
    this.employeeService.optionsSubject.subscribe((employees) => {
      this.employees = employees;
    });
  }

  remove(id: string) {
    this.employeeService.remove(id).subscribe((a) => console.log(a));
  }
  edit(employee: Employee) {
    this.editMode = true;
    this.employeeService.setCurrentEmployee(employee);
  }
  add() {
    this.addMode = true;
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log(event.first);
    this.employeeService.optionsSubject.next(
      this.employeeService.empArr.slice(event.first, event.first + event.rows)
    );
  }

  selectedFile: File;

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('photo', this.selectedFile, this.selectedFile.name);
    this.employeeService.http
      .post(this.employeeService.basrURL + 'uploadPhoto', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
