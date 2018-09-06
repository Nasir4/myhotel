import { AppRoutingModule } from "./app-routing.module";
import { WeddingsComponent } from "./weddingd/weddings.component";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccomaditionComponent } from "./accomadition/accomadition.component";
import { RoomsComponent } from "./accomadition/rooms/rooms.component";
import { FoodBeverageComponent } from "./food-beverage/food-beverage.component";
import { RestaurantComponent } from "./food-beverage/restaurant/restaurant.component";
import { BarsComponent } from "./food-beverage/bars/bars.component";
import { LifestyleComponent } from "./lifestyle/lifestyle.component";
import { WellnessAndSpaComponent } from "./lifestyle/wellness-and-spa/wellness-and-spa.component";
import { ResortActivitiesComponent } from "./lifestyle/resort-activities/resort-activities.component";
import { ExperiencesComponent } from "./lifestyle/experiences/experiences.component";
import { ExcursionsComponent } from "./lifestyle/excursions/excursions.component";

import { TraditionsWeddingsComponent } from "./weddingd/traditions-weddings/traditions-weddings.component";
import { ModrenWeddingsComponent } from "./weddingd/modren-weddings/modren-weddings.component";
import { CelebrationsComponent } from "./celebrations/celebrations.component";
import { OffersComponent } from "./offers/offers.component";
import { AuthComponent } from "./auth/auth.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    AccomaditionComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    TraditionsWeddingsComponent,
    ModrenWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
