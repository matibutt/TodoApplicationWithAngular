import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckboxRequiredValidator, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Todo} from "../../todo";

@Component({
  selector: 'app-add-todo-items',
  templateUrl: './add-todo-items.component.html',
  styleUrls: ['./add-todo-items.component.css']
})
export class AddTodoItemsComponent implements OnInit {
  @Output() AddTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  public active! :boolean;
  public id! : number;

  TodoForm = new FormGroup({
    title : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.id = Math.floor(Math.random() * 1000);
    this.active = true;
    this.AddTodo.emit(this.TodoForm.value);
    this.TodoForm.reset();
  }
}
