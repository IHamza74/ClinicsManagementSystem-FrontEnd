import { Component, OnInit } from '@angular/core';
import { MedicineService } from './Services/medicine.service';
import { Medicine } from './Models/medicine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private medicineService: MedicineService) {}
}
