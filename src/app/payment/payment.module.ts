import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { UiModule } from './ui/ui.module';
import { UtilModule } from './util/util.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule, UiModule, UtilModule],
})
export class PaymentModule {}
