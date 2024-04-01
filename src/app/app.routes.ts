import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListarPensamentoComponent,
    title: 'Principal'
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentoComponent,
    title: 'Listar Pensamento'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent,
    title: 'Criar Pensamento'
  }
];
