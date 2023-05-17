import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
 
  tareas: string[] = [];
  nuevaTarea: string;


constructor() {
  this.nuevaTarea = '';
}


  crearTarea() {
    if (this.nuevaTarea) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
