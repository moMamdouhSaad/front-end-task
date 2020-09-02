import { Component, OnInit, OnDestroy } from '@angular/core';
import { Payment } from './util/models/payment';
import { PaymentService } from './data-access/services/payment.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly paymentService: PaymentService,
    private readonly router: Router
  ) {}

  private readonly _destroy$ = new Subject();
  public showSuccessfullMsg = false;

  public ngOnInit(): void {}

  public submit(data: Payment): void {
    this.paymentService
      .savePayment(data)
      .pipe(takeUntil(this._destroy$), debounceTime(450))
      .subscribe((res) => {
        if (res.status === 200) {
          this.showSuccessfullMsg = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2500);
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
