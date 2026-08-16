import { Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';

export const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'new', component: CategoryFormPageComponent },
  { path: ':id/edit', component: CategoryFormPageComponent }
];
