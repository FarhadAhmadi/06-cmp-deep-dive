import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit , OnChanges , AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}
  ngAfterViewInit(): void {
    console.log('ngOnChangesngAfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
