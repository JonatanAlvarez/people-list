import { Component } from '@angular/core';
import { People } from './model/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Personas';
  listPeople = []

  constructor() {
    this.listPeople = [
      new People('Nombre', 'Apellido', 30, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequuntur distinctio ratione aliquid nobis modi illum corrupti odit ducimus beatae! Impedit', ['123', '456']),
      new People('Nombre', 'Apellido', 30, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequuntur distinctio ratione aliquid nobis modi illum corrupti odit ducimus beatae! Impedit', ['123', '456']),
      new People('Nombre', 'Apellido', 30, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequuntur distinctio ratione aliquid nobis modi illum corrupti odit ducimus beatae! Impedit', ['123', '456']),
      new People('Nombre', 'Apellido', 30, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequuntur distinctio ratione aliquid nobis modi illum corrupti odit ducimus beatae! Impedit', ['123', '456']),
      new People('Nombre', 'Apellido', 30, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequuntur distinctio ratione aliquid nobis modi illum corrupti odit ducimus beatae! Impedit', ['123', '456'])
    ]
  }
}
