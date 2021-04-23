import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInService } from '../../services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public profileForm: FormGroup = this.fb.group({
    phone: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private si: SignInService
    ) { }

  ngOnInit(): void {
    this.profileForm.controls['phone'].setValue('13585845436');
    this.profileForm.controls['password'].setValue('123456');
  }

  public onSubmit(): void {
    this.si.signIn(this.profileForm.value)
    // .subscribe(success => {
    //   console.log('Successfully sign in: ' + success);
    // });
  }
}
