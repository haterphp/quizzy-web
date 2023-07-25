import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login/login.component';
import { RouterPath } from '../common/router/paths.enum';
import { LayoutComponent } from './common/layout/layout.component';
import { UIModule } from '../common/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: RouterPath.LOGIN, component: LoginPageComponent }
]

@NgModule({
  declarations: [LayoutComponent, LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AuthModule {}
