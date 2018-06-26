// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import * as Guards from './guards';
// import * as Views from './views';

// const appRoutes: Routes = [
//   {
//     path: 'home',
//     component: Views.HomeViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Home',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'users',
//     component: Views.UsersViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Users',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'user/:id',
//     component: Views.UserViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'User',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'translate',
//     component: Views.TranslateViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Translate',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'custom-widget',
//     component: Views.CustomWidgetViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Custom widget',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'custom-widget-overview',
//     component: Views.CustomWidgetOverviewViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Custom widget overview',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'custom-widget-overview/:id',
//     component: Views.CustomWidgetOverviewViewComponent,
//     canActivate: [Guards.AuthGuard],
//     data: {
//       title: 'Custom widget overview',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: 'login',
//     component: Views.LoginViewComponent,
//     canActivate: [Guards.UnAuthGuard],
//     data: {
//       title: 'Login',
//       menu: {
//         isHidden: false,
//       },
//       footer: {
//         isHidden: true,
//       },
//     },
//   },
//   {
//     path: '',
//     redirectTo: '/rt90-admin/home',
//     pathMatch: 'full',
//   },
//   { path: '**', redirectTo: '/rt90-admin/home' }, // TODO: 404
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
//   exports: [RouterModule],
// })
// export class RoutingModule {}
