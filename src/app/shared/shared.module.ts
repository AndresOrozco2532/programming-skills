import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidateDirective } from './directives/form-validate.directive';
import { SharedService } from './shared.service';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [FormValidateDirective, DialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  entryComponents: [DialogComponent],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormValidateDirective,
    DialogComponent,
  ],
  providers: [SharedService],
})
export class SharedModule {}
