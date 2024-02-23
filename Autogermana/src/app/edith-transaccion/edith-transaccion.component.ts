import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-edith-transaccion',
  templateUrl: './edith-transaccion.component.html',
  styleUrls: ['./edith-transaccion.component.css']
})
export class EdithTransaccionComponent implements OnInit {

  @Input() tran?: Transaccion;
  @Output() transaccionUpdated = new EventEmitter<Transaccion[]>();

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
  }

  updateTransaccion(tran: Transaccion) {
    this.transaccionService
      .UpdateTransaccion(tran)
      .subscribe((transaccion: Transaccion[]) => this.transaccionUpdated.emit(transaccion));
  }

  deleteTransaccion(tran: Transaccion) {
    this.transaccionService
      .DeleteTransaccion(tran)
      .subscribe((transaccion: Transaccion[]) => this.transaccionUpdated.emit(transaccion));
  }

  createTransaccion(tran: Transaccion) {
    this.transaccionService
      .CreateTransaccion(tran)
      .subscribe((transaccion: Transaccion[]) => this.transaccionUpdated.emit(transaccion));
  }
}
