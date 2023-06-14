import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // name of a cutsom html element
  // selector: '[app-servers]', // attribute
  // selector: '.app-servers', //class
  // templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
