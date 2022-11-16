import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import { CalculateComponent } from '../calculate/calculate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    HomeRoutingModule,
    
  ],
  declarations: [HomeComponent, CalculateComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
