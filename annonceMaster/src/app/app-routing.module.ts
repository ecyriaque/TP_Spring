import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { LoginComponent } from './login/login.component'; // Assurez-vous d'importer le LoginComponent

const routes: Routes = [
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'login', component: LoginComponent }, // Ajoutez la route pour le LoginComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
