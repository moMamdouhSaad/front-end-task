import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from './services/payment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PaymentService],
})
export class DataAccessModule {}
