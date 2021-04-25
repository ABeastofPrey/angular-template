import { Component } from '@angular/core';
import { UserService } from './share/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular-template works!';

  constructor(public user: UserService) { }

}
