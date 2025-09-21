import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loginError = '';

    if (this.loginForm.invalid) return;

    // Example login logic (replace with real API call)
    const { email, password } = this.loginForm.value;
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      this.loginForm.reset();
      this.submitted = false;
    } else {
      this.loginError = 'Invalid email or password';
    }
  }
}
