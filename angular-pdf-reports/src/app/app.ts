// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfGeneratorComponent],
  template: `
    <router-outlet></router-outlet>
    <app-pdf-generator></app-pdf-generator>
  `,
})
export class App {}  // Asegúrate de que esté exportado