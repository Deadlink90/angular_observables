import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dataService:DataService) {}

  cambiarNombre(){
  this.dataService.nombre$.emit('Mensaje emitido');
  }

}
