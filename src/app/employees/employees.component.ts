import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public name: string='';
  public age: number=0;
  public company: string='';
  public package:number=0;

  public employees:Employees[]=[];
     constructor() { }

  submit(){
    this.employees.push(
      {
        'name':this.name,
        'age':this.age,
        'company':this.company,
        'package':this.package
      }
    )
  }
  deleteAll(){
  this.employees=[];     
}
delete(i:number){
    this.employees.splice(i,1);
  }
  packageLowtoHigh(){
    this.employees=this.employees.sort((a,b)=>a.package - b.package);
 
  }
  packageHightoLow(){
    this.employees=this.employees.sort((a,b)=>b.package - a.package);

  }
  ngOnInit(): void {
  }

}
