import { Recipient, RetryPolicy } from "@notificationParams";
import Notification from "@interface/notification";

export class SmsNotification implements Notification {
    
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
}