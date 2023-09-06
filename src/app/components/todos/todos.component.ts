import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";
  formSubmitted: boolean = false; // Add formSubmitted flag

  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    // Check if the inputTodo is not empty or only consists of white spaces
    if (this.inputTodo.trim() !== '') {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = ""; // Clear the input field
      this.formSubmitted = false; // Reset the formSubmitted flag
    } else {
      this.formSubmitted = true; // Set the formSubmitted flag to true
    }
  }
}
