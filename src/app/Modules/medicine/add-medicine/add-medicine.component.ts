import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from 'src/app/Models/medicine';
import { MedicineService } from 'src/app/Services/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
})
export class AddMedicineComponent implements OnInit {
  constructor(private medicineService: MedicineService) {}
  medicineList: Medicine[] = [];
  medicineObj: Medicine = new Medicine();

  medicineData: FormGroup;
  ngOnInit(): void {
    this.medicineData = new FormGroup({
      Name: new FormControl(null, [
        Validators.required,
        this.medicineService.stringInput.bind(this),
      ]),
      Dose: new FormControl(null, [
        Validators.required,
        this.medicineService.numberInput.bind(this),
      ]),
      Price: new FormControl(null, [
        Validators.required,
        this.medicineService.numberInput.bind(this),
      ]),
      Stock: new FormControl(null, [
        Validators.required,
        this.medicineService.numberInput.bind(this),
      ]),
    });
  }

  onSubmit() {
    this.medicineService
      .postMedicineToServer(this.medicineObj)
      .subscribe((medicine) => {
        this.medicineService.setMedicineArrayPushElement(medicine);
        this.medicineService.addObject.next(medicine);
        console.log(medicine);
      });
  }
  print() {
    console.log(this.medicineData);
  }
}
