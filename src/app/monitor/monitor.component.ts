import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { MonitorService } from "./monitor.service";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [],
  template: `
    <div class="monitoring-container">
      <h1 class="system-name">{{ systemName }}</h1>
      <div class="status-card">
        <h2 class="status-header">System Status</h2>
        <div class="status-body">
          <p><strong>Status:</strong> {{ status.status }}</p>
          <p><strong>Event Type:</strong> {{ status.event_type }}</p>
          <p><strong>Message:</strong> {{ status.message }}</p>
          <p><strong>Timestamp:</strong> {{ status.timestamp }}</p>
        </div>
      </div>
      <!-- Add more parts of the solution as needed -->
    </div>
  `,
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  status: any = {};
  private intervalId: any;

  systemName: string = 'System Monitor';  // Replace with your system name

  constructor(
    private monitorService: MonitorService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(): void {
    this.monitorService.getStatus().subscribe({
      next: data => {
        this.status = data;
      },
      error: error => console.error('Error fetching status', error)
    });
  }
}
