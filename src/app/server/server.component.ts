import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 1; // These variables are called 'properties'
    serverStatus: string = "offline";

    getServerStatus(){
        return this.serverStatus;
    }
}