import { Injectable } from '@angular/core';

declare const microsoftTeams: any;

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  openTeamsPopup(data: any) {
    microsoftTeams.shareContent({
      content: JSON.stringify(data),
      contentType: 'application/json',
      conversationId: null
    });
  }
}
