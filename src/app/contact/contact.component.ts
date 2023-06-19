import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  showMailLoader = false;
  showMailSuccess = false;
  showMail = false;
  nameWarning = false;
  nameSuccess = false;
  emailWarning = false;
  emailSuccess = false;
  messageWarning = false;
  messageSuccess = false;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    //loader anzeigen
    this.showMail = true;
    this.showMailLoader = true;
    //animation

    //senden

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch(
      'https://gerhard-baliet.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    //loader ausblenden
    this.showMailLoader = false;
    this.showMailSuccess = true;
    this.myForm.nativeElement.reset();

    setTimeout(() => {
      this.showMailSuccess = false;
      this.showMail = false;
      console.log(this.showMail);
    }, 500);

    //text anzeigen erfolgreich gesendet

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }

  checkinputStatus(status: string) {
     
    let field = status

    if (this.nameField.nativeElement.value.length === 0 && field == 'name') {
      this.nameWarning = true;
      this.nameSuccess = false;
    } else if (this.nameField.nativeElement.value.length > 0 && field == 'name') {
      this.nameWarning = false;
      this.nameSuccess = true;
    }
    if (this.emailField.nativeElement.value.length === 0 && field == 'email') {
      this.emailWarning = true;
      this.emailSuccess = false;
    } else if (this.emailField.nativeElement.value.length > 0 && field == 'email') {
      this.emailWarning = false;
      this.emailSuccess = true;
    }
    if (this.messageField.nativeElement.value.length === 0 && field == 'message') {
      this.messageWarning = true;
      this.messageSuccess = false;
    } else if (this.messageField.nativeElement.value.length > 0 && field == 'message') {
      this.messageWarning = false;
      this.messageSuccess = true;
    }
  }
}
