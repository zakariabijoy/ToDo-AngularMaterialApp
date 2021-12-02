import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ITodo } from '../../models/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllToDos();
  }

  createTodo() {
    this.dialog.open(TodoComponent);
    this.refreshList('');
  }

  toggleCompleted(todo: ITodo) {
    let index = this.todoService.todos.indexOf(todo);
    this.todoService.todos[index].completed = !todo.completed;

    let msg =
      todo.completed === true
        ? 'Task marked as completed'
        : 'Task marked as not completed';
    this._snackBar.open(msg, 'dismiss', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  detailsTodo(todo: ITodo) {
    let typeDetails = this.todoService.types.find(
      (x) => x.id === parseInt(todo.type)
    );
    this.dialog.open(TodoDetailsComponent, { data: { todo, typeDetails } });
  }

  editTodo(todo: ITodo) {
    this.dialog.open(TodoComponent, { data: { todo } });
    this.refreshList('');
  }

  deleteTodo(todo: ITodo) {
    var index = this.todoService.todos.indexOf(todo);
    this.todoService.todos.splice(index, 1);
    this._snackBar.open('Task is deleted', 'dismiss', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  searchTasks(searchBy: string) {
    console.log(searchBy);
    this.refreshList(searchBy);
  }
  refreshList(searchBy:string) {
    if (searchBy === '') {
      this.todos = this.todoService.getAllToDos();
    } else {
      this.todos = this.todoService
        .getAllToDos()
        .filter((x) => x.title.includes(searchBy));
    }

    console.log(this.todos);
  }
}
