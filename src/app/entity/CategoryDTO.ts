import {Category} from './Category';

export class CategoryDTO {
    public id: string;
    public parentalCategory: CategoryDTO;
    public name: string;
    public children: CategoryDTO[] = [];

    constructor(category: Category) {
        this.id = category.id;
        this.name = category.name;
    }
}

