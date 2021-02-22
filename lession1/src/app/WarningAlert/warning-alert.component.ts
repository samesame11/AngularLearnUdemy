import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus () {
    return this.serverStatus
  }

}
