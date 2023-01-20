import { Heroi } from './../../models/herois/heroi';
import { HeroisService } from './../../services/herois/herois.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private heroisService: HeroisService) {}

  listarTodosHerois() {
    this.heroisService.listar()
    .then(herois => console.log(herois))
    .catch(error => console.error(error))
  }
  
  mostrarHeroi() {
    this.heroisService.listarPorId(3)
    .then(herois => console.log(herois))
    .catch(error => console.error(error))
  }

  adicionarHeroi() {
    const heroi: Heroi = {
      nome: "Flash",
      idade: 31,
      identidadeSecreta: "Barry Allen",
      poderes: "Super velocidade"
    }
    this.heroisService.adicionar(heroi)
    .then(herois => console.log('adicionado'))
    .catch(error => console.error(error))
  }
  
  editarHeroi() {
    const heroi: Heroi = {
      id: 4,
      nome: "Flash",
      idade: 34,
      identidadeSecreta: "Barry Allen",
      poderes: "Super velocidade"
    }
    this.heroisService.editar(heroi)
    .then(herois => console.log('adicionado'))
    .catch(error => console.error(error))
  }
  
  deletarHeroi() {
    this.heroisService.deletar(4)
    .then(res => console.log('Removido', res))
    .catch(error => console.error(error))
  }

}
