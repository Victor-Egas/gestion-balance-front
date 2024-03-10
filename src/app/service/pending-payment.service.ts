import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PendingPayment } from '../model/pendingPayment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingPaymentService {

  constructor(private http : HttpClient) { }

  
  obtenerDeudaSocio( id : Number) : Observable<PendingPayment> {
    
    return this.http.get<PendingPayment>(`http://localhost:8090/status-account/pending-payment/${id}`)
  
  }
}
