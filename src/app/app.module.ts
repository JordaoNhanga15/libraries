import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateRangePickerModule } from 'my-lib';
// import { DateRangePickerModule } from 'ngx-angular-date-range-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DateRangePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
