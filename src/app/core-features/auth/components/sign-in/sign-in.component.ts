import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public err!: string;

  public profileForm: FormGroup = this.fb.group({
    phone: [null, [Validators.required]],
    password: [null, [Validators.required]],
    remember: [false]
  });

  constructor(
    private fb: FormBuilder,
    private si: SignInService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.profileForm.controls['phone'].setValue('13585845436');
    this.profileForm.controls['password'].setValue('123456');
  }

  public onSubmit(): void {
    // for (const i in this.profileForm.controls) {
    //   this.profileForm.controls[i].markAsDirty();
    //   this.profileForm.controls[i].updateValueAndValidity();
    // }
    this.err = '';
    const observer = {
      next: (/*res: User | null*/) => {
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        console.dir(err);
        this.err = 'Incorrect User name or Password!';
      }
    };
    this.si.signIn(this.profileForm.value).subscribe(observer);
  }
}
