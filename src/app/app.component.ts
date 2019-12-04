import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray:Employee [] = [
    {id:1 , name:'leonardo', country:'usa'},
    {id:2 , name:'milena', country:'panama'},
    {id:3 , name:'pedro', country:'chile'}
  ]


  selectedEmployee:Employee = new Employee();
  
  openForedit(employee:Employee){
    this.selectedEmployee = employee;
  }
  
    addoredit(){
      if(this.selectedEmployee.id === 0){
       this.selectedEmployee.id = this.employeeArray.length + 1;
       this.employeeArray.push(this.selectedEmployee)
      
    }else{
      this.selectedEmployee = new Employee();
    }
 
    
    }

    delete(){
      if(confirm('are you sure you want to delete it?')){
        this.employeeArray = this.employeeArray.filter(x=> x != this.selectedEmployee);
        this.selectedEmployee = new Employee();
      }
    
    }
   
}
