import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddTask } from './pages/add-task/add-task';
import { Statistics } from './pages/statistics/statistics';
import { Edit } from './pages/edit/edit';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'add', component: AddTask},
    {path: 'stats', component: Statistics},
    {path: 'edit/:id', component: Edit}
];
