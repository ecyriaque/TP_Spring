import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';
import { Annonce } from '../model/annonce.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    // Si un token est présent, rediriger vers une autre page (par exemple la page d'accueil)
    if (!token) {
      this.router.navigate(['/login']);
    } else {
      this.getAnnonces();
    }
  }

  getAnnonces(): void {
    this.annonceService
      .getAnnonces()
      .subscribe((annonces: any) => (this.annonces = annonces));
  }
}
