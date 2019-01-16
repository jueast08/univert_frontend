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
import { QuestListComponent } from './quest-list/quest-list.component';
import { NoProfileToastComponent } from './no-profile-toast/no-profile-toast.component';
import { ButtonComponent } from './button/button.component';
import { FloatingMapComponent } from './floating-map/floating-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GardenComponent,
    ProfileComponent,
    ProfileToastComponent,
    QuestComponent,
    QuestListComponent,
    NoProfileToastComponent,
    ButtonComponent,
    FloatingMapComponent
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
