import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  private notifications: { message: string, type: string, id: number }[] = [];
  private idCounter: number = 0;
  private notificationSubject = new BehaviorSubject<{ message: string, type: string, id: number }[]>([]);

  notificationState$ = this.notificationSubject.asObservable();

  showNotification(message: string, type: string = 'info') {
    const id = this.idCounter++;
    const newNotification = { message, type, id };
    this.notifications.push(newNotification);
    this.notificationSubject.next([...this.notifications]);

    setTimeout(() => {
      this.removeNotification(id);
    }, 3000);
  }

  private removeNotification(id: number) {
    this.notifications = this.notifications.filter(notif => notif.id !== id);
    this.notificationSubject.next([...this.notifications]);
  }
}
