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
  serverName:string = 'Test-server';
  serverCreated:boolean = false;
  servers:string[] = ['Test-server', 'Test-server-2'];

  // A constructor is a method executed at the point of time, this component is created by angular
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void { }

  //the starting of method with 'on' makes it clear that this will be triggered from within the HTML template
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // this.serverName = event.target.value; //This is fine and will work!

    // This '<HTMLInputElement>', we are doing so that we inform TypeScript that we know that the type of the HTMl element of this event will be an HTML Input Element. It is an 'explicit casting'
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event);
  }
}
