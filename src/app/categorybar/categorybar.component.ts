import {Component, OnDestroy, OnInit} from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {CategoryService} from '../category.service';
import {CategoryDTO} from '../entity/CategoryDTO';
import {Subscription} from 'rxjs/Subscription';
import {DataService} from '../data.service';

@Component({
    selector: 'app-categorybar',
    templateUrl: './categorybar.component.html',
    styleUrls: ['./categorybar.component.css']
})
export class CategorybarComponent implements OnInit, OnDestroy {

    categoriesRef: AngularFireList<any>;
    categories: Observable<any[]>;
    data: CategoryDTO[];
    subscription: Subscription;

    constructor(private angularFireDatabase: AngularFireDatabase,
                private categoryService: CategoryService,
                private dataService: DataService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getCategories(): void {
        this.categoriesRef = this.angularFireDatabase.list('categories');
        this.categories = this.categoriesRef.snapshotChanges().map(changes => {
            return changes.map(c => ({
                id: c.payload.key, ...c.payload.val()
            }));
        });
        this.subscription = this.categories.subscribe(result => {
            this.data = this.categoryService.normalize(result);
            this.changeState();
        });
    }

    changeState() {
        this.dataService.changeStore(this.data);
    }

    addCategory(newName: string) {
        this.categoriesRef.push({name: newName}).then(onFulfilledResult => {
            // this.angularFireDatabase.object(`tasks2/${onFulfilledResult.key}/0`).set(0)
            //     .then(result => {/* do nothing */}, onRejectedReason => {
            //     console.error(`Failure addind new category in tasks db model: ${onRejectedReason}`);
            // });
        }, onRejectedReason => {
            console.error(`Failure addind new category: ${onRejectedReason}`);
        });
    }
}
