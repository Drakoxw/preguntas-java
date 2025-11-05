import { Routes } from '@angular/router';

import { PATH } from '@constants/index';
import { LayoutComponent } from '@shared/components';

import LevelsIndexComponent from '@home-module/ui/levels-index/levels-index.component';
import ScoreCardIndexComponent from '@home-module/ui/score-card-index/score-card-index.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: PATH.HOME,
        loadChildren: () => import('@home-module/home-routing.module'),
      },
      {
        path: PATH.LEVELS,
        component: LevelsIndexComponent
      },
      {
        path: PATH.SCORE,
        component: ScoreCardIndexComponent
      },
      { path: '**', redirectTo: PATH.HOME, pathMatch: 'full' },
      { path: '', redirectTo: PATH.HOME, pathMatch: 'full' },
    ],
  },
];
