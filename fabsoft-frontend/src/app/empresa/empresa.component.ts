import { Component } from '@angular/core';
import { Empresa } from '../model/empresa';
import { EmpresaService } from '../service/empresa.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';



@Component({
  selector: 'app-empresa',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css',
  providers: [EmpresaService, Router]
})
export class EmpresaComponent {

  listaEmpresa: Empresa[] = []

  constructor(
    private empresaService: EmpresaService,
    private router:Router
  ){}

  ngOnInit() {
    console.log('Carregando empresas...')
    this.empresaService.getEmpresas().subscribe( empresas => {
      this.listaEmpresa = empresas
    })
  }

  novo() {
    this.router.navigate(['empresas/novo']);
  }

  alterar(empresa:Empresa){
    this.router.navigate(['empresas/alterar', empresa.id]);
  }

}
