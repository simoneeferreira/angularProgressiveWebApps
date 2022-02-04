import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {

        if ('serviceWorker' in navigator) {

            navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            })
            .then(registration => {

                console.log('Service worker registration completed');

                setInterval(() => {

                    console.log('Updating Service Worker ...');
                    registration.update();

                }, 60000);


            });
        }

    });
