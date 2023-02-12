import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeaserboxsComponent } from './components/main-container/teaserboxs/teaserboxs.component';
import { TeaserboxComponent } from './components/main-container/teaserboxs/teaserbox/teaserbox.component';
import { FiltersComponent } from './components/main-container/filters/filters.component';
import { CardsComponent } from './components/main-container/cards/cards.component';
import { CardComponent } from './components/main-container/cards/card/card.component';
import { InfoComponent } from './components/main-container/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    TeaserboxsComponent,
    TeaserboxComponent,
    FiltersComponent,
    CardsComponent,
    CardComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
