import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

export const router: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: StudentListComponent },
    { path: 'edit/:uid', component: StudentEditComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 