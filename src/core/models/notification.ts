import { RetryPolicy, Recipient } from "./types";

class Notification {

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

export default Notification;