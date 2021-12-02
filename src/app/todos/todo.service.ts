import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1,
      title: 'test',
      date: new Date(2021, 12, 1),
      description: 'asd',
      type: '1',
      completed: false,
    },
    {
      id: 2,
      title: 'test2',
      date: new Date(2021, 12, 2),
      description: 'asd',
      type: '2',
      completed: true,
    },
  ];

  types = [
    { id: 1, value: 'Office Work' },
    { id: 2, value: 'Home Work' },
    { id: 3, value: 'OutSide Work' },
  ];
  constructor() {}

  getAllToDos() {
    return this.todos;
  }
}
