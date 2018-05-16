import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {EmptyComponent} from './empty/empty.component';
import {TaskbarComponent} from './taskbar/taskbar.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: EmptyComponent},
    { path: 'detail/:id', component: TasksComponent },
    { path: 'amply/:id', component: TaskbarComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

