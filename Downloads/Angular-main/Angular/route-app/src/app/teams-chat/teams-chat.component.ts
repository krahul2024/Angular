import { Component, ChangeDetectorRef } from '@angular/core';
import { EmbedText } from './embedText.interface';

@Component({
  selector: 'app-teams-chat',
  templateUrl: './teams-chat.component.html',
  styleUrls: ['./teams-chat.component.css']
})
export class TeamsChatComponent {

  embedText: EmbedText = {
    heading: '',
    subHeading: '',
    body: ''
  }

  submittedForm: any;
  embedContent: string = `
  < h2 style = "font-weight: bold;" > </h2>
    < h5 style = "font-weight: lighter;" ></h5>
    <span><h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
    <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
    <h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
    <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
    <h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
    <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
    </span>
      `

  formatMessage(heading: string, subheading: string, body: string): string {
    const htmlString = `
    < h2 style = "font-weight: bold;" > ${ heading } </h2>
      < h5 style = "font-weight: lighter;" > ${ subheading } </h5>
      <span><h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
      <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
      <h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
      <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
      <h2 style="font-weight: bold;">Introduction to Machine Learning</h2>
      <h5 style="font-weight: lighter;">fjsad;kjs;jfk</h5>
      </span>
        `;

    return htmlString;
  }

  onFormSubmitted(data: any) {
    const heading: string = data.value.title;
    const subHeading: string = data.value.subTitle;
    const body: string = data.value.content;

    this.embedText = {
      heading,
      subHeading,
      body
    };

    let htmlMessage: string = this.formatMessage(this.embedText.heading as string, this.embedText.subHeading as string, this.embedText.body as string);
    console.log(htmlMessage);
    this.embedContent = htmlMessage;
  }
}
