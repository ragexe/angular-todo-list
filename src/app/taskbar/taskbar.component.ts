import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {CategoryDTO} from '../entity/CategoryDTO';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit, OnDestroy {

    tasksRef: AngularFireList<any>;
    tasks: Observable<any[]>;
    category: Observable<any>;
    subscriptions: Subscription[] = [];

    constructor(private route: ActivatedRoute,
                private angularFireDatabase: AngularFireDatabase,
                private dataService: DataService) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.route.params.subscribe(
                params => {
                    const id = params['id'];
                    this.getCategory(id);
                    this.getTasks(id);
                }
            ));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    getCategory(key: string): void {
        this.category = this.angularFireDatabase.object(`categories/${key}`).valueChanges();
    }

    getTasks(key: string): void {
        this.tasksRef = this.angularFireDatabase.list(`tasks2/${key}`);
        this.angularFireDatabase.object(`tasks2/${key}`)
            .valueChanges()
            .subscribe(result => {
                if (result) {
                    this.tasks = this.tasksRef.snapshotChanges().map(changes => {
                        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
                    });
                } else {
                    this.tasks = Observable.of([]);
                }
            });
    }

    addItem(newName: string) {
        this.tasksRef.push({textDetails: newName});
    }

    updateItem(key: string, flag: boolean, newText: string) {
        this.tasksRef.update(key, {completedFlag: flag, textDetails: newText});
    }

    deleteItem(key: string) {
        this.tasksRef.remove(key);
    }

    deleteEverything() {
        this.tasksRef.remove();
    }

    finishAll() {
        console.log(this.tasks.toPromise())

        this.tasks.toPromise().then(results => {
            console.log('dsa');
            // results.forEach(result => this.updateItem(result.key, true, result.textDetails));
        }, errMsg => {
            console.error(errMsg);
        });
    }
}
