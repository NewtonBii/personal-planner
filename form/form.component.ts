import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  tasks=[]
  
  addTask(newTask:string){
    if(newTask){
      this.tasks.push(newTask);
    }
  }


}
