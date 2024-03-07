import { Component } from '@angular/core';
import { AnnonceListComponent } from '../annonce-list/annonce-list.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnnonceListComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
