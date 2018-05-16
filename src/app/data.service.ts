import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CategoryDTO} from './entity/CategoryDTO';

@Injectable()
export class DataService {

    private storeSource = new BehaviorSubject<CategoryDTO[]>([]);
    currentStore = this.storeSource.asObservable();

    constructor() {
    }

    changeStore(categories: CategoryDTO[]) {
        this.storeSource.next(categories);
    }
}
