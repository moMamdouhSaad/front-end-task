import { Component, OnInit } from '@angular/core';
import { Payment } from './util/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}

  public submit(data: Payment): void {
    console.log(data);
  }
}
