import { Component } from '@angular/core';

@Component({
  selector: 'learn-servers',
  // selector: '[learn-server]', // <div learn-server></div>
  // selector: '.learn-server', // <div class="learn-server"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  public allowNewServer = false;
  public serverCreated = false;
  public serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  public onCreateServer() {
    this.serverCreated = true;
  }

  public onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
