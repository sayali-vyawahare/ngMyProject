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
import { LoginComponent } from "./../../dashboard/login/login.component";
import { DashComponent } from 'src/app/dashboard/dash/dash.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'mobile',
    component: MobMenuComponent,
    children: [
      { path: '', component: MobilesComponent },
      { path: 'moto', component: MotoComponent },
      { path: 'moto/:prod_id', component: MotoComponent },
      { path: 'moto/:prod_name', component: MotoComponent },

      { path: 'samsung', component: SamsungComponent },
    ],
  },
  { path: 'books', component: BooksComponent },
  { path: 'cosmetics', component: CosmeticsComponent },
  { path: 'decor', component: DecorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },


  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
