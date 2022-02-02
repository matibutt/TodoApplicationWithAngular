import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../../todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localVariable! :any;
  todos!: Todo[];
  constructor() {
    this.localVariable = localStorage.getItem('todos')
    if (this.localVariable == null)
    {
      this.todos = []
    }
   else {
     this.todos = JSON.parse(this.localVariable);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todoItem : Todo){
    console.log(todoItem);
    const index = this.todos.indexOf(todoItem);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  MarkAsDoneTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
