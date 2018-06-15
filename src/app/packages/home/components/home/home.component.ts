import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@lib/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.login().then(x => console.log('logged-in'));
  }
}
