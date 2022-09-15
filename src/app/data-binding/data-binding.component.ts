import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public age:number = 22;
  public name:string = "ram";
  public isIndian:boolean =true;

  //array interpolation
  public phones: number[] = [9696, 66655];
  public courses:string[] =['Angular','React'];

  //object interpolation
  public user ={name:'john',city:'texas'};
  constructor() { }

  public student: Student= {
    name:'Ajay',
    id:'n123',
    marks:99
  };

  public Employee: Employee={

    name: 'Laxman',
    company: 'Genpact',
    package:16
  };

  public users: User[]=
  [
    {name:'jphn',city:'Texas'},
    {name:'smith',city:'vegas'},
    {name:'raj', city:'Delhi'},
    {name:'shyam',city:'Hyderabad'}

  ];

  public students: Student[]=
  [
    {name:'Anil', id:'n123', marks:90},
    {name:'Ajay', id:'n234', marks: 80},
    {name:'Anjan', id:'n244', marks: 70}
  ]
  
  ngOnInit(): void {
  }

}
