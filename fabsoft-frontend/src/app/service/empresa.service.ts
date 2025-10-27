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
    if(empresa.id){
      return this.Http.put(this.apiURL + '/' + empresa.id, empresa)
    }

    return this.Http.post(this.apiURL, empresa)
  }

  getEmpresaById(id: string){
    return this.Http.get<Empresa>(this.apiURL + '/' + id)
  }
  
}
