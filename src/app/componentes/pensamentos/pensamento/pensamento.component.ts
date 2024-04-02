import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: 'Conteudo Teste',
    autoria: 'Aldair',
    modelo: 'modelo2'
  }

  larguraConteudo(): string{
    if(this.pensamento.conteudo.length >= 230){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
