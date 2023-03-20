import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-employee-profile-card',
  templateUrl: './employee-profile-card.component.html',
  styleUrls: ['./employee-profile-card.component.css','../../profile/profile.component.css'],
})
export class EmployeeProfileCardComponent {
  @Input() employee: Employee;
}
