import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../service/Annonce.service';
import { Annonce } from '../model/Annonce.model';
import { HttpClientModule } from '@angular/common/http'; // Importez le module HttpClientModule
@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [HttpClientModule], // Ajoutez HttpClientModule au tableau des imports
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss'],
})
export class AnnonceListComponent implements OnInit {
  annonces!: Annonce[];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.getAllAnnonces();
  }

  getAllAnnonces(): void {
    this.annonceService
      .getAllAnnonces()
      .subscribe((annonces) => (this.annonces = annonces));
  }
}
