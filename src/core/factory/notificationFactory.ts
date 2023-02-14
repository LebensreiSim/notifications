import { RetryPolicy, Recipient } from '@notificationTypes';

export interface Notification {

    message: string;
    messageType: string;
    recipientHost: Recipient;
    timestamp: string;
    failsafeOptions: string[];
    retryPolicies: RetryPolicy[];

    
}
