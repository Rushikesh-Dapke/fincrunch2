import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = environment.contactMail;
  contactForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required], // Add contact number field
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post<any>('https://fincrunch.in/api/send_email.php', this.contactForm.value, { headers }).subscribe({
        next: (response) => {
          if (response.success) {
            this.successMessage = response.success;
            this.errorMessage = null;
            this.contactForm.reset();
          } else if (response.error) {
            this.errorMessage = response.error;
            this.successMessage = null;
          }
        },
        error: (error) => {
          this.errorMessage = 'An error occurred. Please try again.';
          window.location.href ='mailto:{{contact}}';
          console.error(error);
          this.successMessage = null;
        },
      });
    } else {
      Object.values(this.contactForm.controls).forEach((control) => control.markAsTouched());
    }
  }
}
