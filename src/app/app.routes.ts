import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

import { MenuSuggestionComponent } from './menu-suggestion/menu-suggestion.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: 'menu', component: MenuSuggestionComponent },
  { path: 'menu-admin', component: MenuAdminComponent },
  { path: '**',    component: NoContent },
];
