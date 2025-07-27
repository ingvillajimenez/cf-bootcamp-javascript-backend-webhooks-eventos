import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {
  private readonly discordWebhookUrl =
    'https://discord.com/api/webhooks/1398723789688410314/cEQpita9YQbEZesqeUuZiskj8o4vX3L8VW2Mg_8OG74iVhp7rbJ_T0lVAH3C5i5Y-_ue';

  async notify(message: string) {
    const body = {
      content: message,
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;
  }
}
