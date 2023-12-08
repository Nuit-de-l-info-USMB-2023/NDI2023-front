import { Component, Input } from '@angular/core';
import { Post } from '../../../../../_api/models/post';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss'],
})
export class GreenComponent {
  @Input('post') post?: Post;
}
