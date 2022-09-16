import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AcountsComponent } from './accounts/acounts.component';
import { ItemComponent } from './item/item.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NavComponent } from './nav/nav.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    SquareComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    ShoppingcartComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    AcountsComponent, 
    ItemComponent, MailComponent, CreateVehicleComponent, CreateUserComponent, ParentComponent, ChildComponent, StarComponent, ProductComponent, CartlistComponent, NavComponent, VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
