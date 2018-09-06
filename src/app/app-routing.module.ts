import { FoodBeverageComponent } from "./food-beverage/food-beverage.component";
import { AccomaditionComponent } from "./accomadition/accomadition.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CelebrationsComponent } from "./celebrations/celebrations.component";
import { LifestyleComponent } from "./lifestyle/lifestyle.component";
import { WeddingsComponent } from "./weddingd/weddings.component";
import { OffersComponent } from "./offers/offers.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: "accomadition", component: AccomaditionComponent },
  { path: "celebrations", component: CelebrationsComponent },
  { path: "food-beverage", component: FoodBeverageComponent },
  { path: "lifestyle", component: LifestyleComponent },
  { path: "weddings", component: WeddingsComponent },
  { path: "offers", component: OffersComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
