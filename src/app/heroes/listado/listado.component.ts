import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

heroes: string []=['spiderman','ironman','thor','hulk','capitan america'];
heroeBorrado:string='';

BorrarHeroe(){
 this.heroeBorrado=this.heroes.shift() || '';
}
}