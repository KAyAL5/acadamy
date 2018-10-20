import { Component } from '@angular/core';

import { DialogService } from './services/utilities/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  answer: String = '';
  answerDisplay: String = '';
  showSpinner: Boolean = false;

  constructor(private dialogSvc: DialogService) { }

  showRegistrationDialog() {
    this.dialogSvc.showRegistrationDialog();
  }

  showLoginDialog() {
    // this.dialogSvc.data = { username: '', password: ''};
    this.dialogSvc.showLoginDialog();
  }

  showCourseDialog() {
    this.dialogSvc.openCourseDialog();
  }

  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
}
