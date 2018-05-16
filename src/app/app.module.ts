import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {TasksComponent} from './tasks/tasks.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ProgressComponent} from './progress/progress.component';
// import {TreeNodeComponent} from './tree-node/tree-node.component';
import {EmptyComponent} from './empty/empty.component';
import {CategoryService} from './category.service';
import {TaskService} from './task.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { CategorybarComponent } from './categorybar/categorybar.component';
import {DataService} from './data.service';
import { DoneTasksPipe } from './taskbar/done-tasks.pipe';
// import { TreeBuilderComponent } from './categorybar/treecomponent/treebuilder.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: [
        AppComponent,
        CategoriesComponent,
        TasksComponent,
        NavbarComponent,
        FooterComponent,
        ProgressComponent,
        // TreeNodeComponent,
        EmptyComponent,
        TaskbarComponent,
        CategorybarComponent,
        DoneTasksPipe
        // TreeBuilderComponent
    ],
    providers: [ CategoryService, TaskService, DataService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
