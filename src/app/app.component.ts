import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonitorComponent } from "./monitor/monitor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MonitorComponent,
  ],
    template: `
  <main>
    <section class="content">
      <app-monitor></app-monitor>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'System Monitoring';
}
