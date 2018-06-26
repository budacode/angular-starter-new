// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   public canActivate(): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       this.authService.isLoggedIn().subscribe((loggedInStatus: boolean) => {
//         if (!loggedInStatus) {
//           this.router.navigate(['/', 'login']);
//         }
//         resolve(loggedInStatus);
//       });
//     });
//   }
// }
