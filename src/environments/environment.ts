// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyA_KlCr-8FoTZsQdc66tk1luyPvSX9W6pQ",
    authDomain: "todolist-ee34e.firebaseapp.com",
    databaseURL: "https://todolist-ee34e.firebaseio.com",
    projectId: "todolist-ee34e",
    storageBucket: "todolist-ee34e.appspot.com",
    messagingSenderId: "141613716878"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't for get to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
