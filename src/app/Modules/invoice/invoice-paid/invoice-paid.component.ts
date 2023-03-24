import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/Models/invoice';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-invoice-paid',
  templateUrl: './invoice-paid.component.html',
  styleUrls: ['./invoice-paid.component.css'],
})
export class InvoicePaidComponent implements OnInit {
  invoice: Invoice = new Invoice(
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
  details = {
    receipt_number: '',
    payment_method_details: {
      card: { brand: '', last4: '' },
    },
    amount_captured: 0,
    amount: 0,
  };
  date = '';
  time = '';
  ngOnInit() {
    this.paymentService.getChecking().subscribe((data) => {
      console.log(data.lastPaid);
      this.details = data.lastPaid;
      this.details.receipt_number = data.lastPaid.receipt_number;

      //window.location.assign(data.lastPaid.receipt_url);
    });
    this.activeRoute.params.subscribe((a) => {
      this.invoiceService.getById(a['id']).subscribe((data) => {
        data.payment_status = true;
        this.invoice = data;

        this.date = new Date(this.invoice.date).toDateString();
        this.time = new Date(this.invoice.date).toLocaleTimeString();
        this.invoiceService.editInvoice(a['id'], this.invoice).subscribe();
      });
    });
  }

  constructor(
    private paymentService: PaymentService,
    private activeRoute: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}
}
