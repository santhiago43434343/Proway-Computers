import { RenderMode, ServerRoute } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const serverRoutes: ServerRoute[] = [


  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
