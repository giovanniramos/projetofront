import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string, object?: any): void {
    this.messages.push(message);
    console.log(message, object ?? ' ');
  }

  clear(): void {
    this.messages = [];
  }

}
