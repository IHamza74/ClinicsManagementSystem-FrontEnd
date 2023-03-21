import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-profile-card',
  templateUrl: './employee-profile-card.component.html',
  styleUrls: ['./employee-profile-card.component.css'],
})
export class EmployeeProfileCardComponent {
  @Input() employee: Employee;
  selectedFile: File;
  constructor(private employeeService: EmployeeService) {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.uploadFile();
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('id', this.employee._id);
    formData.append('photo', this.selectedFile, this.selectedFile.name);

    this.employeeService.http
      .patch(this.employeeService.basrURL + 'uploadPhoto', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
