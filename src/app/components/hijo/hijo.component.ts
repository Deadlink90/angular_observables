import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = 'mensaje!';
  dataSuscripcion: Subscription;

  constructor(public dataService: DataService) {
    this.dataSuscripcion = new Subscription();
  }

  ngOnInit(): void {
    // this.checkObservable();
  }

  ngOnDestroy(): void {
    // this.destroyObservable()
  }

  checkObservable() {
    this.dataSuscripcion = this.dataService.nombre$.subscribe((texto) => {
      this.mensaje = texto;
      console.log('hijo: ', texto);
    });
  }

  destroyObservable(){
    this.dataSuscripcion.unsubscribe();
  }
}
