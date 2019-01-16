import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GardenComponent } from './garden/garden.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileToastComponent } from './profile-toast/profile-toast.component';
import { QuestComponent } from './quest/quest.component';
import { BadgeComponent } from './badge/badge.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { NoProfileToastComponent } from './no-profile-toast/no-profile-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GardenComponent,
    ProfileComponent,
    ProfileToastComponent,
    QuestComponent,
    BadgeComponent,
    BadgeListComponent,
    ItemComponent,
    ItemListComponent
    QuestListComponent,
    NoProfileToastComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
