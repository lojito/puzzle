import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  onChildLoaded(component) {
    const chk = document.getElementById('menu') as HTMLInputElement;
    chk.checked = false;
  }

}
