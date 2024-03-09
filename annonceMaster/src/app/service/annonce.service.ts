import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce.model';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  private apiUrl = 'http://localhost:8085/api/annonces';

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<Annonce[]> {
    // Récupérer le token du localStorage
    const token = localStorage.getItem('token');

    // Créer les headers
    let headers = new HttpHeaders();
    // Ajouter le token au header si présent
    if (token) {
      headers = headers.set('Authorization', `${token}`);
      console.log('Token', token);
    }

    // Effectuer la requête HTTP avec les headers
    return this.http.get<Annonce[]>(this.apiUrl, { headers });
  }
}
