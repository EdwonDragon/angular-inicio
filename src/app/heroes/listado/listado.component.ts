import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

heroes:string[]=['Spiderman','yo','ella'];
heroeBorrado:string='';

borrar=()=>{
 this.heroeBorrado = this.heroes.shift()||'';
}

}
