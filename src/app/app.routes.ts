import { Routes } from '@angular/router';
import { Step6WelcomeRouting } from './components/step6-welcome-routing/step6-welcome-routing';
import { Step4PersonTableOutput } from './components/step4-person-table-output/step4-person-table-output';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step5PersonOutput } from './components/step5-person-output/step5-person-output';

export const routes: Routes = [
  { path: 'person-table-example', component: Step2PersonTable },
  { path: 'component-input-example', component: Step3PersonTableInput },
  { path: 'for-directive-example', component: Step4PersonTableOutput },
  { path: 'event-bind-example', component: Step5PersonOutput },
  { path: 'welcome', component: Step6WelcomeRouting },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];