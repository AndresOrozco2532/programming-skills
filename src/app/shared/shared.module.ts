import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidateDirective } from './directives/form-validate.directive';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [FormValidateDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, FormValidateDirective],
  providers: [SharedService],
})
export class SharedModule {}
