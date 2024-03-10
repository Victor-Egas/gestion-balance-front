import { Component, OnInit } from '@angular/core';
import { PendingPaymentService } from '../../service/pending-payment.service';
import { PendingPayment } from '../../model/pendingPayment';

@Component({
  selector: 'app-pending-payment',
  standalone: true,
  imports: [],
  templateUrl: './pending-payment.component.html',
  styleUrl: './pending-payment.component.css'
})
export class PendingPaymentComponent implements OnInit{

  pendingPayment : PendingPayment | undefined;
  pendingArray: { key: string, value: number }[] = [];
  constructor(private pendingPaymentService : PendingPaymentService){ }
  
  convertirMapToArray(pending: Map<string, number>): [string, number][] {
    return Array.from(pending);
  }

  ngOnInit(): void {
    this.pendingPaymentService.obtenerDeudaSocio(22).subscribe({
      next: (data) => {
        this.pendingPayment = data
         

        //this.pending = data.paymentPending
        //console.log("El valor es : "+this.pending)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


}
