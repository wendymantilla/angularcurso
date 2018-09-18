import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

   mostrar = true ;
  frase: any = {
    mensaje: 'un gran poder requiere responsabilidad',
    autor: 'ben parker'
  };

  personas: string[] = ['spiderman', 'venom' , 'Dr.octopus'];

}
