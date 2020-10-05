import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { PageNotFoundComponent } from 'src/app/layouts/page-not-found/page-not-found.component';
import { MobilesComponent } from 'src/app/products/mobiles/mobiles.component';
import { BooksComponent } from 'src/app/products/books/books.component';
import { CosmeticsComponent } from 'src/app/products/cosmetics/cosmetics.component';
import { DecorComponent } from 'src/app/products/decor/decor.component';
import { MotoComponent } from 'src/app/products/mobiles/moto/moto.component';
import { SamsungComponent } from 'src/app/products/mobiles/samsung/samsung.component';
import { MobMenuComponent } from 'src/app/products/mobiles/mob-menu/mob-menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'mobile',
    component: MobMenuComponent,
    children: [
      { path: '', component: MobilesComponent },
      { path: 'moto', component: MotoComponent },
      { path: 'samsung', component: SamsungComponent },
    ],
  },
  { path: 'books', component: BooksComponent },
  { path: 'cosmetics', component: CosmeticsComponent },
  { path: 'decor', component: DecorComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
