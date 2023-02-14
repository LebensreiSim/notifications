type RetryPolicy = {
    maxAttempts: number;
    retryInterval: number;
    backoffFactor: number;
    shouldRetry: (error: Error) => boolean;
};

type Recipient = {
    email: string,
    phone: string,
    userId: string,
    deviceToken: string,
    rateLimit?: RateLimiterAttributes
}

type RateLimiterAttributes = {
    limitBreach: boolean,
    requestsPerSecond: number
}

export {
    RetryPolicy,
    Recipient
}