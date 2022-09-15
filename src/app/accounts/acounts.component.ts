import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css']
})
export class AcountsComponent implements OnInit {

  public Accounts:Accounts[]=[];

  constructor(private _Accountservice:AccountsService){

    this._Accountservice.getaccounts().subscribe(

      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{alert('internal server error')}
    )
  }

  ngOnInit(): void {
  }

}
