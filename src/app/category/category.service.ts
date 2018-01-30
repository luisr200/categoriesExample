import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService{

    constructor(){}

    getCategories(){
        return[
            {
                CategoryId: 100,
                ParentCategoryId: -1,
                Name: "Business",
                Keywords: "Money"
            },
            {
                CategoryId: 200,
                ParentCategoryId: -1,
                Name: "Tutoring",
                Keywords: "Teaching"
            },
            {
                CategoryId: 101,
                ParentCategoryId: 100,
                Name: "Accounting",
                Keywords: "Taxes"
            },
            {
                CategoryId: 102,
                ParentCategoryId: 100,
                Name: "Taxation",
                Keywords: ""
            },
            {
                CategoryId: 201,
                ParentCategoryId: 200,
                Name: "Computer",
                Keywords: ""
            },
            {
                CategoryId: 103,
                ParentCategoryId: 101,
                Name: "Corporate tax",
                Keywords: ""
            },
            {
                CategoryId: 202,
                ParentCategoryId: 201,
                Name: "Operating System",
                Keywords: ""
            },
            {
                CategoryId: 109,
                ParentCategoryId: 101,
                Name: "Small business Tax",
                Keywords: ""
            }
        ]
    }
}