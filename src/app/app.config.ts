import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig = {
    
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient() // Enable HttpClient service DI in the app level.
    ],

    apiKey: environment.apiKey,
    gptUrl: "https://api.openai.com/v1/chat/completions"
};
