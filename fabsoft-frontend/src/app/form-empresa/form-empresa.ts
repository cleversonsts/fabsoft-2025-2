import { Component } from '@angular/core';
import { Empresa } from '../model/empresa';
import { EmpresaService } from '../service/empresa.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-empresa',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-empresa.html',
  styleUrl: './form-empresa.css',
  providers: [EmpresaService, Router]
})
export class FormEmpresa {

  empresa: Empresa = new Empresa();

  constructor(
    private empresaService:EmpresaService,
    private router:Router
  ){}

  salvar(){
    this.empresaService.saveEmpresa(this.empresa)
      .subscribe(resultado => {
        this.router.navigate(['empresas'])
      })
  }

}
