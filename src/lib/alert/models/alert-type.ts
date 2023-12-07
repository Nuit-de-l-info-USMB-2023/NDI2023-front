export enum AlertType {
  SUCCESS = 'alert-success',
  INFO = 'alert-info',
  WARNING = 'alert-warning',
  ERROR = 'alert-error'
}

export const iconsForType = [
  {
    type: AlertType.SUCCESS,
    icon: 'trophy',
  },
  {
    type: AlertType.INFO,
    icon: 'info'
  },
  {
    type: AlertType.WARNING,
    icon: 'diamond-exclamation'
  },
  {
    type: AlertType.ERROR,
    icon: 'times-hexagon'
  }
]
