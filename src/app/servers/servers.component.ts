import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // name of a cutsom html element
  // selector: '[app-servers]', // attribute
  // selector: '.app-servers', //class
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus:string = 'No server was created!';

  // A constructor is a method executed at the point of time, this component is created by angular
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void { }

  //the starting of method with 'on' makes it clear that this will be triggered from within the HTML template
  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }
}
