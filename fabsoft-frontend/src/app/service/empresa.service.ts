import { Injectable } from '@angular/core';
import { Empresa } from '../model/empresa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  apiURL = 'http://localhost:8080/api/v1/empresas'


  constructor(private Http:HttpClient) {}

  getEmpresas(){
    return this.Http.get<Empresa[]>(this.apiURL)
  }

  saveEmpresa(empresa:Empresa){
    return this.Http.post(this.apiURL, empresa)
  }
  
}
