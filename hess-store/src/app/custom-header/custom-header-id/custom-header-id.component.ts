import { Component, OnInit } from '@angular/core';
import { AuthService,  UserService } from '@spartacus/core';
import { LoginComponent } from '@spartacus/user/account/components';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-header-id',
  templateUrl: './custom-header-id.component.html',
  styleUrls: ['./custom-header-id.component.scss']
})
export class CustomHeaderIdComponent extends LoginComponent implements OnInit {
  // isUserloggedIn$!: Observable<any>;
  // iscustomerId$!: Observable<any>;
  // username$!: Observable<any>;

  // constructor() {}

  // ngOnInit(): void {
  //   customerId: string;
  //   customerName: string;
  
  // constructor(private auth: AuthService, private userAccount: UserAccountFacade) {
  //   this.loggedIn$ = this.auth.isUserLoggedIn();
  //   this.customerId$ = this.userAccount.get().pipe(
  //     map(user => user?.customerId)
  //   );
  //   this.username$ = this.userAccount.get().pipe(
  //     map(user => user?.uid)
  //   )
  //   
  // };
  

  ngOnInit(): void {
   
}

  }