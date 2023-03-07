import { RetryPolicy, Recipient } from '@notificationParams';

export interface Notification {

    message: string;
    messageType: string;
    recipientHost: Recipient;
    timestamp: string;
    failsafeOptions: string[];
    retryPolicies: RetryPolicy[];

    sendNotification (): void;
}
