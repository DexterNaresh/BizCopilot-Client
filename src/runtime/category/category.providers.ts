import { Provider } from '@angular/core';
import { CategoryService } from './category.service';
import { CategoryApplication } from './application/category.application';

export const categoryProviders: Provider[] = [
  CategoryService,
  CategoryApplication
];
