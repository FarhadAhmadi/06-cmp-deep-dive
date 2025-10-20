import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [FormsModule, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketsComponent {
  onSubmit() {}
}
