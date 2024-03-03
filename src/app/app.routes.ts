import { Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { PromiseComponent } from './shared/components/promise/promise.component';
import { ObservableComponent } from './shared/components/observable/observable.component';
import { ListComponent } from './shared/components/observable/list/list.component';
import { FromComponent } from './shared/components/observable/from/from.component';
import { IntervalComponent } from './shared/components/observable/interval/interval.component';

export const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: 'promise', component: PromiseComponent },
      {
        path: 'observable',
        component: ObservableComponent,
        children: [
          { path: '', component: ListComponent },
          { path: 'from', component: FromComponent },
          { path: 'interval', component: IntervalComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'promise' },
];
