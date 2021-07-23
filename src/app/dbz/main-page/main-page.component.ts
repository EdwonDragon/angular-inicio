import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

 Personaje:Personaje[]=[];
 
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

 


}
