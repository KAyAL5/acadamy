import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

import { UserService } from '../../../services/users/users.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrl: String = '';
  readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';
  constructor(private swPush: SwPush, private UserSvc: UserService) { }

  ngOnInit() {
    // if (this.swPush.isEnabled) {
    //    this.swPush.available.subscribe(() => {
    //   if (confirm('New version available. Load New Version?')) {
    //     window.location.reload();
    //   }
    //    });
    // }
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.UserSvc.addPushSubscriber(sub).subscribe())
    .catch(err => console.error('Could not subscribe to notifications', err));
}

}
