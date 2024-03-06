import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../model/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http : HttpClient) { }

  listar() {
    return this.http.get<Partner[]>('http://localhost:8090/partner/findAll')
  }
}
