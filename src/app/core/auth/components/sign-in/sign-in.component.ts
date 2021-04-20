import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInServiceService } from '../../services/sign-in/sign-in-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public profileForm: FormGroup = this.fb.group({
    nameOrPhone: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private si: SignInServiceService
    ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.si.signIn(this.profileForm.value);
  }
}
