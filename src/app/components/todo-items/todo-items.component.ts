import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../todo";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input()items! : Todo;
  @Output() itemDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() itemToggle: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo : Todo){
    console.log('Clicked from child component')
    this.itemDelete.emit(todo);
    console.log('Now I am child component.')
  }
  onCheckBox(todo: Todo){
    this.itemToggle.emit(todo);
  }
}
