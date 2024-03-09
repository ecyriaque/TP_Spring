export interface Annonce {
  id?: number; // L'ID est facultatif car il sera généré automatiquement côté serveur
  title: string;
  description: string;
  address: string;
}
