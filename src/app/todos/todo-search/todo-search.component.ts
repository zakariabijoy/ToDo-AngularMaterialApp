import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css'],
})
export class TodoSearchComponent implements OnInit {
  searchBy = '';
  @Output() searchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewSearch(value:string){
    this.searchEvent.emit(value);
  }
  
}
