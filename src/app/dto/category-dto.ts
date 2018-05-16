// import {Category} from '../entity/Category';
//
// export class CategoryDTO {
//     public id: number;
//     public children: CategoryDTO[];
//     public parent: CategoryDTO;
//     public name: string;
//
//     constructor(category: Category) {
//         this.id = category.id;
//         this.name = category.name || null;
//         this.children = [];
//     }
//
//     static construct(categories: Category[]): CategoryDTO {
//         const result = new CategoryDTO({id: 0, name: 'root', parentalCategoryId: null});
//         result.appendChildren(categories);
//         return result;
//     }
//
//     appendChildren(categories: Category[]): void {
//         if (categories.some(category => category.parentalCategoryId === this.id)) {
//             this.children = categories.filter(category => category.parentalCategoryId === this.id)
//                 .map(category => new CategoryDTO(category));
//             this.children.forEach(category => category.parent = this);
//             this.children.forEach((child => child.appendChildren(categories)));
//         }
//         return;
//     }
// }
// Todo del
