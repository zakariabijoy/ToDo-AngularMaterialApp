import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo.service';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    TodoDetailsComponent,
    TodoSearchComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TodosModule {}
