import { V } from '@angular/cdk/keycodes';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Credentials, LoginService } from '../../services/login/login';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  imports: [MatButtonModule,MatInputModule,MatSelectModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
 export class Login implements OnDestroy{
      private formBuilder = inject(FormBuilder);
      private loginService = inject(LoginService);
      private router = inject(Router);

      private loginSubscription: Subscription | null = null;

      loginFormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

invalidCredentials = false;

login() {
 this.loginSubscription = this.loginService.login(
  this.loginFormGroup.value as Credentials).subscribe({
    next: (result: User | null | undefined) => {
      this.navigateHome();
    },
    error: () => {
      this.invalidCredentials = true;
    }
  })
}



navigateHome() {
  this.router.navigate(['home']);
}

ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
}

}
