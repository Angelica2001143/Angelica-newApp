import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angelica-newApp';
  appMessage = "";


  appEvent(event: any){
    this.appMessage=event;
  }
}
