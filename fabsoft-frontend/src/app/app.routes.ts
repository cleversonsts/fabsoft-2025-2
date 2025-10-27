import { Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormEmpresa } from './form-empresa/form-empresa';

export const routes: Routes = [
    {path: 'empresas', component: EmpresaComponent},
    {path: 'empresas/novo', component: FormEmpresa},
    {path: 'empresas/alterar/:id', component: FormEmpresa}
];
