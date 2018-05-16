import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


import {of} from 'rxjs/observable/of';
import {Task} from './entity/Task';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class TaskService {
    private _PATH = '/tasks';

    constructor(private angularFireDatabase: AngularFireDatabase) {
    }

    getAllTasks(): Observable<Task[]> {
        console.log(this.angularFireDatabase.list(this._PATH));
        return this.angularFireDatabase.list(this._PATH).valueChanges();
    }

    addTask(task): boolean {
        const result = this.angularFireDatabase.list(this._PATH).push(task)
            .then((item) => {
                console.log(`new key ${item.key}`);
            });
        console.log(`result of pushing: ${result}`);
        return !!result;
    }

    update(task: Task): void {
        console.log(`updating... ${task}`);
    }
}
