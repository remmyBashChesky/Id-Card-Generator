import { Injectable } from '@angular/core';
import { 
  CanLoad,
  Route,
  UrlSegment, 
  Router,
  ActivatedRouteSnapshot ,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs'; 
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}
