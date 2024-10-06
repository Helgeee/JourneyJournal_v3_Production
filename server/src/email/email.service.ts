
// email.service.ts

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendRegistrationEmail(email: string, username: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: '',
      template: '',
      context: {
        username,
      },
    });
  }
}
