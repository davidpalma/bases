import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', Validators.required)
  });

  success = signal(false);
  error = signal(false);

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const message = {
        nombre: formValue.nombre || '',
        telefono: formValue.telefono || '',
        email: formValue.email || '',
        mensaje: formValue.mensaje || ''
      };
      this.contactService.sendMessage(message).subscribe({
        next: () => {
          this.success.set(true);
          this.error.set(false);
          this.form.reset();
        },
        error: () => {
          this.success.set(false);
          this.error.set(true);
        }
      });
    }
  }
}