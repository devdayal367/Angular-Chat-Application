import { Component } from '@angular/core';
import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBv0XAGVpnWmZKZpppV1OMXsKo4MszYvdE',
  databaseURL:'https://angularchat-8ae22-default-rtdb.firebaseio.com'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
