import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  showMailLoader = false;
  showMailSuccess = false;
  showMail = false;

  @ViewChild('myForm')myForm!: ElementRef;
  @ViewChild('nameField')nameField!: ElementRef;
  @ViewChild('emailField')emailField!: ElementRef;
  @ViewChild('messageField')messageField!: ElementRef;
  @ViewChild('sendBtn')sendBtn!: ElementRef;


  
  async sendMail() {
    
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true
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
    await fetch('https://gerhard-baliet.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
      )

    //loader ausblenden
    this.showMailLoader = false;
    this.showMailSuccess = true;
    this.myForm.nativeElement.reset();
    this.showMail = true;
    setTimeout(() => {
      this.showMailSuccess = false;
    this.showMail = false;

    }, 500);


      //text anzeigen erfolgreich gesendet

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false
    sendBtn.disabled = false;

  }
}
