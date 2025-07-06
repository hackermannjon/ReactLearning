import { Routes } from '@angular/router';
import { ChampionDetailComponent } from './pages/champion-detail/champion-detail.component';
import { ChampionListComponent } from './pages/champion-list/champion-list.component';

export const routes: Routes = [
  { path: '', component: ChampionListComponent, title: 'Champion Hub' },
  {
    path: 'champion/:id',
    component: ChampionDetailComponent,
    title: 'Champion Details',
  },
];
