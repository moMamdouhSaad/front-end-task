import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../../util/models/payment';
export interface ServerResponse {
  status: number;
  msg: string;
}
@Injectable()
export class PaymentService {
  public constructor(private readonly http: HttpClient) {}

  public savePayment(paymentDetails: Payment): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(environment.api, paymentDetails);
  }
}
