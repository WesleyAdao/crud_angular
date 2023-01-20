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
    this.heroisService.listarHerois()
    .then(herois => console.log(herois))
    .catch(error => console.error(error))
  }
  
  mostrarHeroi() {
    this.heroisService.listarHeroisPorId(3)
    .then(herois => console.log(herois))
    .catch(error => console.error(error))
  }
  
}
