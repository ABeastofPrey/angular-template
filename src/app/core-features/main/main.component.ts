import { Component, OnInit } from '@angular/core';
import { SignOutService } from '../auth/services/sign-out/sign-out.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private signOutService: SignOutService) { }

  ngOnInit(): void { }

  public signOut(): void {
    this.signOutService.signOut();
  }
}
