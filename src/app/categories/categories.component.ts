import {Component, OnInit} from '@angular/core';
import {Category} from '../entity/Category';
import {CategoryService} from '../category.service';
// import {CategoryDTO} from '../dto/category-dto';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: Category[];
    // categoryDTO: CategoryDTO;
    categoriesRef: AngularFireList<any>;

    // categories: Observable<any[]>;

    constructor(private categoryService: CategoryService, private angularFireDatabase: AngularFireDatabase) {
    }

    ngOnInit() {
        this.getCategories();
    }

    // getCategories(): void {
    //     this.categoryService.getCategories().subscribe(categories => {
    //         this.categories = categories;
    //         this.categoryDTO = this.categoryService.convert(this.categories);
    //     });
    // }

    createCategory(newCategoryName: string): void {
        this.categories.push(new Category(666, 0, newCategoryName));
    }

    getCategories(): void {
        this.categoriesRef = this.angularFireDatabase.list('categories');
        this.categoriesRef.snapshotChanges().map(changes => {
            return changes.map(c => ({
                key: c.payload.key, ...c.payload.val()
            }));
        }).subscribe(snap => console.log(snap));
    }
}
