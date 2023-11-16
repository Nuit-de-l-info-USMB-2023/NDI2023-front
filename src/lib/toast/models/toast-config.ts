import {AlertType} from "../../alert/components/alert/alert.component";

export interface ToastItemConfig{
  alertType?: AlertType;
  coords?: [number,number];
  duration?: number;
}
