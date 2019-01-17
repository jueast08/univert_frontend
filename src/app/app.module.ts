import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ButtonComponent } from './button/button.component';
import { FloatingMapComponent } from './floating-map/floating-map.component';

import { CommonModule } from '@angular/common';
import { AvatarCircleComponent } from './avatar-circle/avatar-circle.component';
import { QuestItemComponent } from './quest-item/quest-item.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AddQuestFormComponent } from './add-quest-form/add-quest-form.component';

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
    ItemListComponent,
    QuestListComponent,
    NoProfileToastComponent,
    ButtonComponent,
    FloatingMapComponent,
    AvatarCircleComponent,
    QuestItemComponent,
    AddQuestFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
