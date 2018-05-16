import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../entity/Task';
import {CategoryService} from '../category.service';
import {Category} from '../entity/Category';


@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterContentChecked {
    tasks: Task[];
    category: Category;
    tasksNumber: number;
    tasksDoneNumber: number;


    constructor(private route: ActivatedRoute,
                private taskService: TaskService,
                private categoryService: CategoryService) {
        this.tasks = [];
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getCategory(id);
                this.getTasks(id);
                this.updateCounter();
            }
        );
    }

    ngAfterContentChecked(): void {
        this.updateCounter();
        //    TODO save changes
    }

    updateTask(task: Task) {
        console.log(task);
        this.taskService.update(task);
    }

    updateCounter(): void {
        this.tasksNumber = this.tasks
            .filter(task => task.categoryId.toString() === this.category.id)
            .length;
        this.tasksDoneNumber = this.tasks
            .filter(task => task.completedFlag)
            .length;
    }

    getTasks(categoryId: number) {
        // TODO del
        // const categoryId = +this.route.snapshot.paramMap.get('categoryId');
        this.taskService.getAllTasks()
            .subscribe(tasks => {
                console.log(tasks);
                if (tasks) {
                    this.tasks = tasks.filter(task => task.categoryId === categoryId);
                }
            });
        this.categoryService.getCategory(categoryId)
            .subscribe(category => this.category = category);
    }

    getCategory(id: number): void {
        this.categoryService.getCategory(id);
    }

    createTask(formValue: string): boolean {
        this.taskService.addTask(new Task(formValue, this.category.id));
        return true;
    }
}

