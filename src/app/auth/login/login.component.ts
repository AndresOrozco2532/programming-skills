import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CONSTANTS } from '../../shared/constants/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean;
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.isLoading = false;
    this._setForm();
  }

  public onSubmit() {
    if (this.form.invalid) return;
    this.isLoading = true;
    this._authService.login(this.form.value).subscribe(() => {
      this.isLoading = false;
      this._router.navigateByUrl(CONSTANTS.ROUTES.HOME);
    });
  }

  private _setForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
