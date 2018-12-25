import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.probarObservable().pipe(
      retry(2)
    ).subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observable termino')
    );

  }

  ngOnInit() {
  }

  probarObservable(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador++;
        observer.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Auxilio');
        }

      }, 1000);

    });
  }


}
