import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './board/board.component';
import { RepositoryComponent } from './repository/repository.component';
import { CategoryComponent } from './category/category.component';
import { CategoryHistoryComponent } from './category-history/category-history.component';
import { CategoryService } from './category.service';
import { ContactComponent } from './contact/contact.component';
import { DictionaryService } from './dictionary.service';
import { GameComponent } from './game/game.component';
import { GameDBService } from './gamedb.service';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { ImageComponent } from './image/image.component';
import { ImageHistoryComponent } from './image-history/image-history.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BoardComponent,
    RepositoryComponent,
    CategoryComponent,
    CategoryHistoryComponent,
    ContactComponent,
    GameComponent,
    HeaderComponent,
    HistoryComponent,
    ImageComponent,    
    ImageHistoryComponent,
    NavigationComponent,
    StatsComponent,
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService, DictionaryService, GameDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
