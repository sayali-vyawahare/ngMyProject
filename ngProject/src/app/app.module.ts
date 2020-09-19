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

@NgModule({
  declarations: [FirstComponent, NavComponent, BannerOneComponent, ProductsComponent, BannerTwoComponent, CantactUsComponent, BannerThreeComponent, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class FirstModule {}
