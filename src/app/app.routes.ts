import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './inicio/inicio';
import { Experiencia } from './experiencia/experiencia';
import { Servicio } from './servicio/servicio';
import { Contacto } from './contacto/contacto';
import { Empleo } from './empleo/empleo';
import { Detalle } from './detalle/detalle';
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Inicio,
        title: 'Inicio',
      },
      {
        path: 'experiencias',
        component:Experiencia,
        title: 'Experiencias',
      },
      {
        path: 'servicio',
        component: Servicio,
        title: 'Servicio',
      },
      {
        path:'contacto',
        component: Contacto,
        title: 'Contacto',
      },
      {
        path:'empleo',
        component:Empleo,
        title: 'Empleo',
      },
      {
        path: 'detalle/:slug',
        component: Detalle,
        title: 'Detalle',
      }
    ],
  },
];
