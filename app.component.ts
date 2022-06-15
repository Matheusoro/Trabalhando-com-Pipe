import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  subtitle: string = 'SUBTÍTULO'
    pessoa = {
    nome: 'Matheus',
    idade: 26,
    empregoAtual: 'AnalistaJr',
    estadoCivil: 'Solteiro'
  }
  data: Date = new Date()
  alimentos = [
    {
      nome: 'Pizza',
      descricao: 'Pizza muito gostosa',
      preco: 59,
      proprietarioDoPost: 'Matheus',
      foto: 'link'
    }
  ]
}
