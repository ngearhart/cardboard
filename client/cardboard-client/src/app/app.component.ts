import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardboard-client';
}

@Component({
  selector: 'navBar',
  templateUrl: './navBar.html'
})
export class NavBarComponent {
  objectKeys = Object.keys;
  links = {"All Music" : "/", "Manage Parts": "/parts", "Manage Users": "/users"};
}
