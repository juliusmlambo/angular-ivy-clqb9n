import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router) {}

  getValues(val: String) {
    console.warn(val);
  }

  navigateToSportbot() {
    this.router.navigate(['/sportbot']);
  }

  ngOnInit(): void {}

  clearForm() {
    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    //alert('Thank you for submitting your info!!');
  }
}
