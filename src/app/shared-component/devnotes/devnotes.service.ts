import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevnotesService {
  private notesSubject = new BehaviorSubject<{ header: string, message: string } | null>(null);
  notesState$ = this.notesSubject.asObservable();

  setNotes(header: string = 'info', message: string) {
    const sentences = message.split('. ');
    const formattedSentences = sentences.map(sentence => {
      const firstLetter = sentence.charAt(0).toUpperCase();
      const restOfSentence = sentence.slice(1);
      return firstLetter + restOfSentence;
    });
    const formattedMessage = formattedSentences.join('. ');
    this.notesSubject.next({ header: header.toUpperCase(), message: message });
  }
}
