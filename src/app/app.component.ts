import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  title = 'bookstore-ui';
  opened = true;
  
  toggle() {
    this.opened = !this.opened;
  }
}
