import { FirstComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { CantactUsComponent } from './layouts/cantact-us/cantact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BooksComponent } from './products/books/books.component';
import { CosmeticsComponent } from './products/cosmetics/cosmetics.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { DecorComponent } from './products/decor/decor.component';
import { OfferPipe } from './pipes/offer.pipe';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { HomeComponent } from './layouts/home/home.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MotoComponent } from './products/mobiles/moto/moto.component';
import { SamsungComponent } from './products/mobiles/samsung/samsung.component';
import { MobMenuComponent } from './products/mobiles/mob-menu/mob-menu.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    CantactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    BooksComponent,
    CosmeticsComponent,
    MobilesComponent,
    DecorComponent,
    OfferPipe,
    SimpleStyleDirective,
    HomeComponent,
    PageNotFoundComponent,
    MotoComponent,
    SamsungComponent,
    MobMenuComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [FirstComponent],
  providers: [SharedService],
})
export class FirstModule {}
