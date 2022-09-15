import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  public name:string=''; 
  public names: string[]=[];

  constructor() { }
  submit(){
    this.names.push(this.name);
  }
  delete(){
    this.names.pop();
  }
  deleteAll(){
    this.names=[];
  }
  deleteEach(i:number){
    this.names.splice(i,1);
  }
  ngOnInit(): void {
  }

}
