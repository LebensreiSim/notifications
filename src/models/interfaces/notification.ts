import { RetryPolicy, Recipient } from "@notificationParams";

interface Notification {

    message: string;
    messageType: string;
    recipientHost: Recipient;
    timestamp: string;
    failsafeOptions: string[];
    retryPolicies: RetryPolicy[];

}

export default Notification;