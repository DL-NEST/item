import { Notification ,NotificationConstructorOptions} from "electron";
import {join} from "path";

// 通知栏
interface Notify {
  title: string;
  message: string;
}



function sendNotification(options: NotificationConstructorOptions) {
  new Notification({
    icon: join(__dirname, "../../public/favicon.png"),
    ...options
  }).show();
}
export {
  sendNotification
}