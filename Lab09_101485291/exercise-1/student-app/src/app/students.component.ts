import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h1>{{ getTitle() }}</h1>
    <p>Current Date: {{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {

  title = 'Welcome to Students Component';

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }

}