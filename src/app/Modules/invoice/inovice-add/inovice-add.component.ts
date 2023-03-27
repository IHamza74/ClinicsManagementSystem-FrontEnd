import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/Models/invoice';
import { Medicine } from 'src/app/Models/medicine';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-inovice-add',
  templateUrl: './inovice-add.component.html',
  styleUrls: ['./inovice-add.component.css'],
})
export class InoviceAddComponent implements OnInit {
  signupForm: FormGroup;

  @Input() invoice: Invoice = new Invoice(
    '',
    null,
    0,
    '',
    '',
    '',
    new Date(),
    false,
    0.1
  );

  constructor(
    private invoiceService: InvoiceService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      medicine: new FormArray([]),
      appointmentID: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-fA-F0-9]{24}$'),
      ]),
      patientID: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-fA-F0-9]{24}$'),
      ]),
      paymentMethod: new FormControl('Cash', [Validators.required]),
      discount_percentage: new FormControl(0.1, [Validators.required]),
    });
  }
  onAddMedicine() {
    const control = new FormGroup({
      medicineID: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-fA-F0-9]{24}$'),
      ]),
      quantity: new FormControl(null, [
        Validators.required,
        Validators.pattern('^([1-9])$'),
      ]),
    });
    console.log(this.signupForm);
    (<FormArray>this.signupForm.get('medicine')).push(control);
    this.paymentService.getChecking().subscribe((data) => console.log(data));
  }

  addInvoice() {
    this.invoice.medicine = this.signupForm.value.medicine;
    this.invoice.appointmentId = this.signupForm.value.appointmentID;
    this.invoice.patientID = this.signupForm.value.patientID;
    this.invoice.paymentMethod = this.signupForm.value.paymentMethod;
    this.invoice.discount_percentage =
      this.signupForm.value.discount_percentage;

    this.invoiceService.addInvoice(this.invoice).subscribe((data) => {
      this.invoiceService.invoices.push(this.invoice);
      this.payment();
    });
  }

  payment() {
    if (this.invoice.paymentMethod === 'Credit Card') {
      this.paymentService.getPayment().subscribe((data) => {
        console.log(data);
        this.paymentService.payment_status = data.session.payment_status;
        console.log(this.paymentService.payment_status);
        window.open(data.session.url);
      });
    } else {
      this.invoiceService.getAll().subscribe((data) => {
        window.open(
          'http://localhost:4200/invoice/' + data[data.length - 1]._id
        );
      });
    }
  }

  getControls() {
    return (<FormArray>this.signupForm.get('medicine')).controls;
  }

  onSubmit() {
    console.log(this.signupForm.value.medicine);
    console.log(this.signupForm.get('medicine').value);
    console.log(this.getControls());
  }

  checking() {
    this.paymentService.getChecking().subscribe((data) => console.log());
  }
}
