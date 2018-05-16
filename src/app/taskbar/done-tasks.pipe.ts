import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../entity/Task';

@Pipe({
    name: 'doneTasks'
})
export class DoneTasksPipe implements PipeTransform {
    transform(tasks: Task[]): any {
        if (tasks) {
            return tasks.filter(task => task.completedFlag).length;
        } else {
            return 0;
        }
    }
}
