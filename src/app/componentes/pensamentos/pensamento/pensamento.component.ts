import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: 'Conteudo Teste',
    autoria: 'Aldair',
    modelo: 'modelo2'
  }

}
