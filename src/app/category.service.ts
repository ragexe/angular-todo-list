import {Injectable} from '@angular/core';
import {Category} from './entity/Category';
// import {CategoryDTO} from './dto/category-dto';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {CategoryDTO} from './entity/CategoryDTO';

@Injectable()
export class CategoryService {
    private _PATH: string;

    constructor(private database: AngularFireDatabase) {
        this._PATH = '/categories';
    }

    // Todo impl mock
    getCategory(id: any): any {
        return undefined;
    }

    getCategories(): Observable<Category[]> {
        // return this.database.list('/categories').valueChanges();
        return this.database.list(this._PATH).valueChanges();
        // return of(CATEGORIES);
    }

    normalize(shallowCategories: Category[]): CategoryDTO[] {
        const result = shallowCategories
            .filter(category => !category.parentalCategoryId)
            .map(category => new CategoryDTO(category))
            .sort((a, b) => a.name > b.name ? 1 : -1);
        result.forEach(categoryDTO => {
            this.appendChildrenTo(categoryDTO, shallowCategories.filter(category => category.parentalCategoryId));
        });
        return result;
    }

    appendChildrenTo(categoryDTO: CategoryDTO, shallowCategories: Category[]): void {
        if (shallowCategories.some(shallowCatagory => shallowCatagory.parentalCategoryId === categoryDTO.id)) {
            categoryDTO.children = shallowCategories.filter(category => category.parentalCategoryId === categoryDTO.id)
                .map(category => new CategoryDTO(category))
                .sort((a, b) => a.name > b.name ? 1 : -1);
            categoryDTO.children.forEach(category => category.parentalCategory = categoryDTO);
            categoryDTO.children.forEach(child => this.appendChildrenTo(child, shallowCategories));
        }
    }
}
