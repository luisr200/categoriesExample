import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/category.service';
import { CategoryLevelService } from './category/categoryLevel.service';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CategoryService,CategoryLevelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
