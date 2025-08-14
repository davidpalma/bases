import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacto',
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    component: ContactFormComponent
  },
  // Puedes agregar más rutas aquí
];
