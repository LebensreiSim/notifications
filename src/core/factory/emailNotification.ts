import Notification from "@interface/notification";
import { Recipient, RetryPolicy } from "@notificationParams";
import AWS from 'aws-sdk';

export class EmailNotification implements Notification {

    message: string;
    messageType: string;
    recipientHost: Recipient;
    timestamp: string;
    failsafeOptions: string[];
    retryPolicies: RetryPolicy[];

    constructor(message: string, messageType: string, recipientHost: Recipient, timestamp: string, failsafeOptions: string[], retryPolicies: RetryPolicy[]) {
        this.message = message;
        this.messageType = messageType;
        this.recipientHost = recipientHost;
        this.timestamp = timestamp;
        this.failsafeOptions = failsafeOptions;
        this.retryPolicies = retryPolicies;
    }

    sendNotification = async (): Promise<void> => {
    }

}