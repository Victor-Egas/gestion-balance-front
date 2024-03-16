import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../service/partner.service';
import { Partner } from '../../model/partner';
import { Console } from 'node:console';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements OnInit{

  partners : Partner[] = [];
  constructor(private partnerService : PartnerService){ }

  ngOnInit(): void {
    this.partnerService.listar().subscribe({
      next: (data) => {
        this.partners = data
      },
      error: (err) => {
        console.log(err)
      }
    });
    }

    mostrarDeudas(idPartner : Number | undefined) {
      console.log("El id es : "+idPartner);
    }
}
