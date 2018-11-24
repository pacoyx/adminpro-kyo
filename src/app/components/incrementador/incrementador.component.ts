import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() { }

  onChanges(newValue: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];


    // console.log(this.txtProgreso);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) { this.progreso = 100; return; }
    if (this.progreso <= 0 && valor < 0) { this.progreso = 0; return; }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgreso.nativeElement.focus();
  }

}
