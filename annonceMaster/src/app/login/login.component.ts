import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Vérifier si un token est présent dans le local storage
  }
  onSubmit(): void {
    console.log('Submit');
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        // Pour sauvegarder le token dans LocalStorage
        localStorage.setItem('token', response);
        this.router.navigate(['/annonces']);
        // Pour récupérer le token depuis LocalStorage
      },
      (error) => {
        // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        console.error(error);
      }
    );
  }
}
