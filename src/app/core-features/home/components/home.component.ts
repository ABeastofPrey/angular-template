import { Component, OnInit } from '@angular/core';
import { SignOutService } from '../../auth/services/sign-out/sign-out.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private signOutService: SignOutService) { }

  ngOnInit(): void { }

  public signOut(): void {
    this.signOutService.signOut();
  }
}
