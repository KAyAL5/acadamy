import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PushNotificationsService } from '../../../services/utilities/push.notification.service';

@Component({
  selector: 'app-push-notifactions',
  templateUrl: './push-notifactions.component.html',
  styleUrls: ['./push-notifactions.component.css']
})

export class PushNotificationComponent implements OnInit {
  title: String = 'Browser Push Notifications!';
  constructor(private _notificationService: PushNotificationsService) {
      this._notificationService.requestPermission();
  }
  ngOnInit() {}

  notify() {
      const data: Array < any > = [];
      data.push({
          'title': 'Approval',
          'alertContent': 'This is First Alert -- By KAyAL'
      });
      data.push({
          'title': 'Request',
          'alertContent': 'This is Second Alert -- By KAyAL'
      });
      data.push({
          'title': 'Leave Application',
          'alertContent': 'This is Third Alert -- By KAyAL'
      });
      data.push({
          'title': 'Approval',
          'alertContent': 'This is Fourth Alert -- By KAyAL'
      });
      data.push({
          'title': 'To Do Task',
          'alertContent': 'This is Fifth Alert -- By KAyAL'
      });
      this._notificationService.generateNotification(data);
  }
}
