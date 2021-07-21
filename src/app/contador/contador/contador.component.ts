import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <span>La base es <strong>{{base}}</strong></span>

        <button (click)="operar(base)">+ {{base}}</button>
        <span>{{numero}}</span>

        <button (click)="operar(-base)">- {{base}}</button>
 `,

})

export class ContadorComponent {
    title: string = 'Contador app';
    numero: number = 10;
    base: number = 55;


    operar = (base: number) => {
        this.numero += base;
    }

}
