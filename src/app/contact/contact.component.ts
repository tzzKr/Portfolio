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
  showMailConfimation = false;

  fieldStatus = {
    name: { warning: false, success: false },
    email: { warning: false, success: false },
    message: { warning: false, success: false }
  };


  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
name: any;

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
      'https://gerhardbaliet.de/send_mail/send_mail.php',
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
      this.fieldStatus.name.success = false;
      this.fieldStatus.email.success = false;
      this.fieldStatus.message.success = false;
      this.showMailSuccess = false;
      this.showMail = false;
      this.showMailConfimation = true;
    }, 500);

    setTimeout(() => {
      this.showMailConfimation = false;
    }, 5000);
    

    //text anzeigen erfolgreich gesendet

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }

  
  checkInputStatus(field: string) {
    let fieldElement: ElementRef;

    switch (field) {
      case 'name':
        fieldElement = this.nameField;
        break;
      case 'email':
        fieldElement = this.emailField;
        break;
      case 'message':
        fieldElement = this.messageField;
        break;
      default:
        console.error(`Unexpected field: ${field}`);
        return;
    }

    const isFieldEmpty = fieldElement.nativeElement.value.length === 0 || fieldElement.nativeElement.validity.typeMismatch;
    this.fieldStatus[field].warning = isFieldEmpty;
    this.fieldStatus[field].success = !isFieldEmpty;

    
  }
}
