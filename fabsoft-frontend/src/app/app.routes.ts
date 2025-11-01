import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormEmpresa } from './form-empresa/form-empresa';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: 'empresas', component: EmpresaComponent},
    {path: 'empresas/novo', component: FormEmpresa},
    {path: 'empresas/alterar/:id', component: FormEmpresa},

    //Rotas da tela de Login
    { path: '', component: LoginComponent },  // rota padrão
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
