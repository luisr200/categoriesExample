import { Component, OnInit, Input } from '@angular/core';
import { Category } from './category.model';
@Component({
    moduleId: module.id,
    selector: 'my-category',
    templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {
    @Input() category: Category
    
    constructor() { }

    ngOnInit() { }
}