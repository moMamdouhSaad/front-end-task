import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentFormComponent implements OnInit {
  public months: { value: string; name: string }[] = [
    { value: '1', name: 'January' },
    { value: '2', name: 'February' },
    { value: '3', name: 'March' },
    { value: '4', name: 'April' },
    { value: '5', name: 'May' },
    { value: '6', name: 'June' },
    { value: '7', name: 'July' },
    { value: '8', name: 'August' },
    { value: '9', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  public constructor(private readonly fb: FormBuilder) {}
  private _inProgress = false;

  public paymentFormGroup: FormGroup;
  public dateErrFlag = false;

  @Output() public readonly submitPayment: EventEmitter<
    FormGroup
  > = new EventEmitter<FormGroup>();

  public ngOnInit(): void {
    this.initPaymentForm();
  }

  private initPaymentForm(): void {
    this.paymentFormGroup = this.fb.group({
      cardholder: ['', [Validators.required]],
      cardno: ['', [Validators.required]],
      cvc: [
        '',
        [
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern(/^[0-9]\d*$/),
        ],
      ],
      month: ['', [Validators.required]],
      year: [
        '',
        [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
      ],
      amount: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
    });
  }

  public submit(): void {
    if (this.paymentFormGroup.valid) {
      this.submitPayment.emit(this.paymentFormGroup.value);
      this._inProgress = true;
    }
  }
  public get inProgress(): boolean {
    return this._inProgress;
  }

  public numberValidation(event): boolean {
    const key = event.key ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }

  public dateValidation(): void {
    const monthInput = parseInt(this.paymentFormGroup.get('month').value, 10);
    const yearInput = parseInt(this.paymentFormGroup.get('year').value, 10);
    const currentDate = new Date().toISOString().split('T')[0].split('-');
    const currentYear = parseInt(currentDate[0], 10);
    const currentMonth = parseInt(currentDate[1], 10);

    if (
      !this.paymentFormGroup.controls.year.dirty ||
      !this.paymentFormGroup.controls.month.dirty
    ) {
      return;
    }
    if (
      (yearInput === currentYear && monthInput >= currentMonth) ||
      yearInput > currentYear
    ) {
      this.dateErrFlag = false;
    } else {
      this.dateErrFlag = true;
    }
  }
}
