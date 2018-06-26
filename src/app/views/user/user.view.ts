import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';

import { UsersService } from '../../services/users.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.view.pug',
  styleUrls: ['./user.view.scss'],
})
export class UserViewComponent implements OnInit {
  public userId: string;
  public user: RT90.IUser;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
      this.usersService.setUser(this.userId).subscribe(data => {
        this.user = data.data.getUser;
      });
    });
  }
}
