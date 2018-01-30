import { Injectable } from '@angular/core';

@Injectable()
export class CategoryLevelService{

    constructor(){}

    getCategoryLevels(){
        return[
            {
                Id: 1,
                Values: [100,200]
            },
            {
                Id: 2,
                Values: [101,102,201]
            },
            {
                Id: 3,
                Values: [103,202,109]
            }
        ]
    }
}