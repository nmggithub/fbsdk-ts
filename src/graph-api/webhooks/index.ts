export interface WebhookEventNotificationBase<EntryType> {
    /**
     * An array containing an object describing the changes. Multiple changes from different objects that are of the same type may be batched together.
     */
    entry: EntryType[];
    /**
     * The object's type (e.g., `user`, `page`, etc.)
     */
    object: string;
}

interface WebhookEventNotificationEntry {
    /**
     * The object's ID
     */
    id: string;
    /**
     * An array of strings indicating the names of the fields that have been changed. Only included if you disable the Include Values setting when configuring the Webhooks product in your app's App Dashboard.
     */
    changed_fields: string[];
    /**
     * An array containing an object describing the changed fields and their new values. Only included if you enable the Include Values setting when configuring the Webhooks product in your app's App Dashboard.
     */
    changes: [unknown];
    /**
     * A UNIX timestamp indicating when the Event Notification was sent (not when the change that triggered the notification occurred).
     */
    time: number;
}

export default interface WebhookEventNotification
    extends WebhookEventNotificationBase<WebhookEventNotificationEntry> {}
