import { FirstComponent } from './app.component';
import { NgModule } from '@angular/core';
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
  ],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
