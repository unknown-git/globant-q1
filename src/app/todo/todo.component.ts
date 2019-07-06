import { Component, OnInit } from '@angular/core';
import {} from '../../app/action.js'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  task = {
    name: 'Task'
  }
  
  taskList = [];
  

  ngOnInit() {
    this.taskList.push(this.task);
  }

  addTask(){
    this.taskList.push(this.task);
  }

  deleteTask(i){
    this.taskList.splice(i,1);
  }

}
