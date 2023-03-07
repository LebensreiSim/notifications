import AWS from 'aws-sdk';

class EmailService {
  private static instance: EmailService;
  private ses: AWS.SES;

  private constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    this.ses = new AWS.SES();
  }

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }

    return EmailService.instance;
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const params: AWS.SES.SendEmailRequest = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Text: {
            Data: body,
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: 'process.env.EMAIL_FROM_ADDRESS',
    };

    await this.ses.sendEmail(params).promise();
  }
}

export default EmailService.getInstance();
