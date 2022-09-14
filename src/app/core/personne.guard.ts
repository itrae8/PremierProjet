import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonneService } from '../personne/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonneGuard implements CanActivate {

  constructor(private router: Router,
    private personneService: PersonneService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const personneTrouvee = this.personneService.getPersonnes().find(personne => personne.nom === route.paramMap.get('nom'))

    if (personneTrouvee != undefined) {
      return true;
    } else {
      this.router.navigate(['liste']);
      return false;
    }


  }

}
