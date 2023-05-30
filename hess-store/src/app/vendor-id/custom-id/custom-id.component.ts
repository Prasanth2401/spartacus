import { Component, OnInit } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { User, UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-custom-id',
  templateUrl: './custom-id.component.html',
  styleUrls: ['./custom-id.component.scss'],
 
})
export class CustomIdComponent implements OnInit {
  user$: Observable<{ user: User | undefined, customerId: string }> | undefined;
  customerId!:string;

  constructor(
    private auth: AuthService,
    private userAccount: UserAccountFacade
  ) {}

  ngOnInit(): void {
    
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccount.get().pipe(
            map((user) => ({ user, customerId: user?.customerId || '' })
            )
          );
        
        } else {
          return of({ user: undefined, customerId: '' });
        }
      
      })
    );
    this.user$.subscribe(({ customerId }) => {
      this.customerId = customerId;
    });
  }
}
  
