import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { UiModule } from './ui/ui.module';
import { UtilModule } from './util/util.module';
import { DataAccessModule } from './data-access/data-access.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    UiModule,
    UtilModule,
    DataAccessModule,
  ],
})
export class PaymentModule {}
