import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public filterTerm: string="";

  public column: string= "";
  public order: string = "";
  public vehicles:Vehicle[]=[];


  constructor(private _vehicleService:VehicleService) {

    this._vehicleService.getVehicles().subscribe(

      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{alert('Internal Server Eror');
    }
    )
   }


  ngOnInit(): void {
  }

  filter(){
     this._vehicleService.getFiltervehicles(this.filterTerm).subscribe(

      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{alert('Internal Server Eror');
    }
    )

  }

  sort(){
    this._vehicleService.getSortedvehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles =data;
      },
      (err:any)=>{alert('internal server error')}
    )

  }
  page(pageNo:number){
this._vehicleService.getPagedvehicles(pageNo).subscribe(

  (data:any)=>{
    this.vehicles = data;
  },
  (err:any)=>{
    alert('intermal server error');
  }
)

  }

  delete(id:string){

    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully !!!");
        location.reload();
      },
      (err:any)=>{
        alert('internal server error')
      }
    )

  }

}
