import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'teste conteudo',
    autoria: 'aldair',
    modelo: 'modelo3' //o botão de rádio com o value correspondente a 'modelo3' será inicialmente selecionado.
  }

  criarPensamento(){
    alert("Criar Pensamento. 🧠")
  }

  cancelarPensamento(){
    alert("Cancelar")
  }

}
