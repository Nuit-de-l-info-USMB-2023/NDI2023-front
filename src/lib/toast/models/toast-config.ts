import {AlertType} from "../../alert/models/alert-type";

export interface ToastItemConfig{
  alertType?: AlertType;
  coords?: [number,number];
  duration?: number;
}
