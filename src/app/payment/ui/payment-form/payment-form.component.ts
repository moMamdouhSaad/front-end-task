import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentFormComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
