import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    type: new FormControl('1', Validators.required),
    date: new FormControl('', Validators.required),
    completed: new FormControl(false),
  });

  selected = '1';

  constructor(
    public todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    if (this.data !== null) {
      this.form.setValue({
        id: this.data.todo.id,
        title: this.data.todo.title,
        description: this.data.todo.description,
        type: this.data.todo.type,
        date: this.data.todo.date,
        completed: this.data.todo.completed,
      });
      this.selected = `${this.data.todo.type}`;
    }
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.value.id === '') {
      this.form.value.id = Math.floor(Math.random() * 10000 + 1);
      this.todoService.todos.push(this.form.value);

      this._snackBar.open('Task is Created', 'dismiss', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    } else {
      let todo = this.todoService.todos.find((x) => x.id == this.form.value.id);
      if (todo !== undefined) {
        todo.title = this.form.value.title;
        todo.description = this.form.value.description;
        todo.completed = this.form.value.completed;
        todo.type = this.form.value.type;
        todo.date = this.form.value.date;

        this._snackBar.open('Task is Updated', 'dismiss', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      }
    }
  }
}
