import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import '@github/markdown-toolbar-element'; 


@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent {
  title : string = ''
  subTitle : string = ''
  content : string = ''




  // Apply h2 on the heading, h4 on the subheading and pre on the content
  onSubmit(form : NgForm) {
    const {title, subTitle , content} = form.value
    const heading : string = `<h2>${title}</h2>`; 
    const subHeading : string = `<h4>${subTitle}</h4>`; 
    const body : string = `<pre>${content}</pre>`
    const embedText : string = heading + subHeading + body; 

    console.log(embedText)
  }


}
