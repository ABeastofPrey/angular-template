import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '@app/_share-gards';
import { SignOutService } from '../auth/services/sign-out/sign-out.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, CanComponentDeactivate {

  constructor(private signOutService: SignOutService) { }

  ngOnInit(): void { }

  public signOut(): void {
    this.signOutService.signOut();
  }

  public canDeactive(): boolean {
    return window.confirm('Do you really want to leave?');
  }
}
