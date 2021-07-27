import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    .moreThanFive {
      color: white;
    }
  `
  ]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus : string= 'offline';
  detailInfo= [];
  showInfo = false;
  moreThanFive = false;

  constructor(){
    this.serverStatus = Math.random() > 0.5? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onDisplayDetails()
  {
    this.showInfo = !this.showInfo;
    this.detailInfo.push(this.detailInfo.length.toString());
    this.moreThanFive = this.detailInfo.length >= 5;
  }
  getDisplay()
  {
    return this.showInfo?'block':'hidden';
  }
  getDetailColor(detail)
  {
    return detail >= 5 ? 'blue' : 'white';
  }
  getIndexOf(detail)
  {
    return detail;
  }
}
