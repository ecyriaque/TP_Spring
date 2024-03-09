import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AnnoncesComponent } from './annonces/annonces.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnoncesComponent,
    AnnoncesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
  ], // Ajoutez FormsModule ici
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
