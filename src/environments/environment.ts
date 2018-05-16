// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBWkIwW7l8AaIfLDeNM9vnGWnV_tc-MhaY',
        authDomain: 'angular-todo-list-b141a.firebaseapp.com',
        databaseURL: 'https://angular-todo-list-b141a.firebaseio.com',
        projectId: 'angular-todo-list-b141a',
        storageBucket: 'angular-todo-list-b141a.appspot.com',
        messagingSenderId: '30044375325'
    }
};
