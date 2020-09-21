export class Todo {

    //Sobrecarga de constrcutor
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo(tarea);

        this.tarea = tarea;
        this.id = id;
        this.completado = completado;
        this.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}