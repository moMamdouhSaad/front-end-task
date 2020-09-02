import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PaymentFormComponent],
})
export class UiModule {}
