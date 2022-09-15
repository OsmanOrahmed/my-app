import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountsComponent } from './accounts/acounts.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SquareComponent } from './square/square.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path: 'home',component:HomeComponent},
    {path: 'calculator', component:CalculatorComponent},
    {path:'square', component:SquareComponent},
    {path:'databinding', component:DataBindingComponent},
    {path:'eventbinding', component:EventBindingComponent},
    {path:'twowaybinding', component:TwowaybindingComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'event-registration', component: EventRegistrationComponent},
    {path:'student-registration', component: StudentRegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'shoppingcart', component:ShoppingcartComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars', component:CarsComponent},
    {path:'gpay', component:GpayComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'accounts', component:AcountsComponent},
    {path:'item', component:ItemComponent},
    {path:'mail', component:MailComponent},
    {path:'createvehicle', component:CreateVehicleComponent, canDeactivate:[NotifyGuard]},
    {path:  'createuser',  component:CreateUserComponent}
  ]
},
  {path: '', component: LoginComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
