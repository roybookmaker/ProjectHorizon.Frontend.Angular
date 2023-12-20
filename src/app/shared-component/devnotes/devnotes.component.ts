import { Component, OnInit } from '@angular/core';
import { DevnotesService } from './devnotes.service';

@Component({
  selector: 'app-devnotes',
  templateUrl: './devnotes.component.html',
  styleUrl: './devnotes.component.css'
})
export class DevnotesComponent implements OnInit {
  notes: { message: string, type: string } | null = null;
  isNotesVisible: boolean = false;

  constructor(private devnotesService: DevnotesService) {}

  ngOnInit() {
    this.devnotesService.notesState$.subscribe(notes => {
      this.notes = notes;
      this.isNotesVisible = !notes;
    });
  }

  toggleNotes() {
    this.isNotesVisible = !this.isNotesVisible;
  }

  setNotesMessage(message: string, type: string = 'info') {
    this.devnotesService.setNotes(message, type);
  }

  onContainerClick(event: Event) {
    event.stopPropagation();
  }
}