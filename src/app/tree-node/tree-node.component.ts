// import {Component, Input} from '@angular/core';
//
// @Component({
//     selector: 'app-tree-node',
//     template: `
//         <div class="list-group">
//             <a routerLink="detail/{{categoryDTO.id}}" class="list-group-item list-group-item-action text-nowrap">
//                 {{categoryDTO.name}}
//             </a>
//             <div *ngFor="let category of categoryDTO.children" class="list-group">
//                 <app-tree-node [categoryDTO]="category"></app-tree-node>
//             </div>
//         </div>
//     `,
//     styles: [
//         `.list-group {
//             margin: 0 0 0 5px;
//         }
//         .list-group a {
//             overflow: hidden;
//             text-overflow: ellipsis;
//         }
//         .list-group .list-group-item {
//             border: none !important;
//         }
//
//         .list-group-item:hover {
//         border: 1px solid rgba(0,0,0,.125);
//         }
//         `
//     ]
// })
// export class TreeNodeComponent {
//     // @Input() categoryDTO: CategoryDTO;
// }
