import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;
  signupError = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Validator for matching passwords
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.signupError = '';

    if (this.signupForm.invalid) return;

    // Example signup logic (replace with real API call)
    alert(`Signup successful! Welcome, ${this.signupForm.value.name}`);
    this.signupForm.reset();
    this.submitted = false;
  }
}
