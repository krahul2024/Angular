import { Component, EventEmitter, Output } from '@angular/core';
import { EmbedText } from '../embedText.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-embed-form',
  templateUrl: './embed-form.component.html',
  styleUrls: ['./embed-form.component.css']
})
export class EmbedFormComponent {

  @Output() submittedForm = new EventEmitter<any>();

  formData: any = { heading: '', subHeading: '', body: '' }; 

  ngOnInit() : void {

  }

  onSubmit(form : NgForm) {
    // console.log(form.value)
    this.submittedForm.emit(form); 
  }; 

}
