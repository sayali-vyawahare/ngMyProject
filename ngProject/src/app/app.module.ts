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
import { HomeDecorComponent } from './products/home-decor/home-decor.component';

@NgModule({
  declarations: [FirstComponent, NavComponent, BannerOneComponent, ProductsComponent, BannerTwoComponent, CantactUsComponent, BannerThreeComponent, FooterComponent, BooksComponent, CosmeticsComponent, MobilesComponent, HomeDecorComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
