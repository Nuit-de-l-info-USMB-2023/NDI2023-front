import {Component, Input} from '@angular/core';
import {AlertType} from "../../models/alert-type";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: string = '';
}
