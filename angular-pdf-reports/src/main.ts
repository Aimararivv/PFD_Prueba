// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // Asegúrate que coincida con el nombre de la clase
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));