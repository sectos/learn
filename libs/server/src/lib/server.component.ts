import { Component } from '@angular/core';

@Component({
  selector: 'learn-server',
  // selector: '[learn-server]', // <div learn-server></div>
  // selector: '.learn-server', // <div class="learn-server"></div>
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  public serverId = 10;
  private serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  public getServerStatus() {
    return this.serverStatus;
  }

  public getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
