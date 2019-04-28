import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CheeseMakerService } from './service/cheese-maker.service';
import { CheeseMakerImplService } from './service/cheese-maker-impl.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: CheeseMakerService, useClass: CheeseMakerImplService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
