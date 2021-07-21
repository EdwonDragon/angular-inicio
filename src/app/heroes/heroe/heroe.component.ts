import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})

export class HeroeComponent {
    title: string = 'Heroe';
    nombre: string = 'IronMan';
    edad: number = 45;


    public get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre='Spiderman';
    }
    cambiarEdad(){
        this.edad=18;
    }
}
