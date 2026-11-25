import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4PersonTableOutput } from './components/step4-person-table-output/step4-person-table-output';
import { Step5PersonOutput } from './components/step5-person-output/step5-person-output';
import { Person } from './shared/interfaces/person';
import { Navbar } from './components/navbar/navbar';


@Component({
  imports: [
    Step2PersonTable,
    Step3PersonTableInput,
    Step4PersonTableOutput,
    Step5PersonOutput,
    RouterOutlet,
    Navbar
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  // Step 1 One way Binding
  name = 'Markos'
  doNotShowRest: boolean = true;

  user = {
    firstname: "Bob",
    lastname: "Dylan",
    email: "bob.dylan@aueb.gr"
  }

  person1: Person = {
    firstname: "Goorge",
    lastname: "Harrison",
    email: "george.harrison@aueb.gr"
  }

  person2: Person = {
    firstname: "Lakis",
    lastname: "Lalakis",
    email: "lakis.lalakis@aueb.gr"
  }

}