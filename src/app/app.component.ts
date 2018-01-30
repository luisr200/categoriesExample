import { Component, OnInit } from '@angular/core';
import { Category } from './category/category.model';
import { CategoryLevel } from './category/categoryLevel.model';
import { CategoryService } from './category/category.service';
import { CategoryLevelService } from './category/categoryLevel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  categoryLevels: CategoryLevel[];
  categoryLevel: CategoryLevel;
  categories: Category[];
  category: Category = new Category();
  title = 'Categories App!';
  categoryNames: string[] = new Array();
  listFilter: string = '';

  constructor(private categoryService: CategoryService,private categoryLevelService: CategoryLevelService) {}

  ngOnInit(){
    this.categories = this.categoryService.getCategories();
    this.categoryLevels = this.categoryLevelService.getCategoryLevels();
  }

  getCategory(catId: number){
    console.log(catId);
    console.log(this.categories)
    this.category = this.categories.filter(x => x.CategoryId == catId)[0]
    if(this.category.Keywords == ""){
      this.category.Keywords = this.getCategoryKeyword(this.category.ParentCategoryId);
    }
  }

  getLevel(level:number){
    this.categoryNames.length = 0;
    this.categoryLevel = this.categoryLevels.filter(f => f.Id == level)[0];
    this.categoryLevel.Values.forEach(element => {
      let cat = this.categories.filter(q => q.CategoryId == element)[0];
      this.categoryNames.push(cat.CategoryId + " - " + cat.Name);
    });
  }

  private getCategoryKeyword(id: number): string{
    let cat = this.categories.filter(x => x.CategoryId == id)[0];
    if(cat.Keywords == ""){
      this.getCategoryKeyword(cat.ParentCategoryId);
    }
    return cat.Keywords;
  }
}

