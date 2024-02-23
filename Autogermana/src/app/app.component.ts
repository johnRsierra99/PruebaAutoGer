import { Component } from '@angular/core';
import { Transaccion } from './models/transaccion';
import { TransaccionService } from './services/transaccion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Autogermana';
  transaccion: Transaccion[] = [];
  transaccionToEdit?: Transaccion;


  constructor(private transaccionService: TransaccionService ) {}

  ngOnInit(): void {

    this.transaccionService
    .GetTransaccion()
    .subscribe((result: Transaccion[]) => {
      this.transaccion = result;
      });
  }

  upDateTransaccionList(transaccion:Transaccion[]){
    this.transaccion = transaccion;
  }

  initNewTransaccion(){
    this.transaccionToEdit = new Transaccion();
  }

  editTransaccion(tran:Transaccion){
    this.transaccionToEdit = tran;
  }
}
