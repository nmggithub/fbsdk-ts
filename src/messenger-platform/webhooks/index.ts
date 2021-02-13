import { WebhookEventNotificationBase } from '../../graph-api/webhooks';
import { XOR } from '../../util';
import {
    AccountLinkingEvent,
    HandoverProtocolEvent,
    HandoverProtocolStandbyChannelEvent,
    InstantGameEvent,
    MessageDeliveredEvent,
    MessageEchoEvent,
    MessageReactionEvent,
    MessageReadEvent,
    MessageReceivedEvent,
    PluginOptInEvent,
    PolicyEnforcementEvent,
    PostbackRecievedEvent,
    ReferralEvent,
} from './events';

interface MessengerWebhookEventNotificationEntry {
    /**
     * Page ID of page
     */
    id: string;
    /**
     * Time of update (epoch time in milliseconds)
     */
    time: number;
    /**
     * Array containing one `messaging` object. Note that even though this is an array, it will only contain one `messaging` object.
     */
    messaging: [MessengerWebhookEvent];
}

type MessengerWebhookEvent = {
    sender: {
        /**
         * The PSID of the user that triggered the webhook event.
         */
        id: string;
        /**
         * The user_ref of the user that triggered the webhook event. This is only available for webhook event from the chat plugin.
         */
        user_ref?: string;
    };
    recipient: {
        /**
         * Your Page ID.
         */
        id: string;
    };
    timestamp: number;
} & { [Event in keyof MessengerWebhookEvents]?: MessengerWebhookEvents[Event] };

export interface MessengerWebhookEventNotification
    extends WebhookEventNotificationBase<MessengerWebhookEventNotificationEntry> {
        object: 'page';
    }

interface MessengerWebhookEvents {
    message: XOR<[MessageReceivedEvent, MessageEchoEvent]>;
    account_linking: AccountLinkingEvent;
    message_deliveries: MessageDeliveredEvent;
    message_echos: MessageEchoEvent;
    messaging_game_plays: InstantGameEvent;
    messaging_handovers: HandoverProtocolEvent;
    messaging_optins: PluginOptInEvent;
    messaging_policy_enforcement: PolicyEnforcementEvent;
    messaging_postbacks: PostbackRecievedEvent;
    message_reactions: MessageReactionEvent;
    message_reads: MessageReadEvent;
    messaging_referrals: ReferralEvent;
    standby: HandoverProtocolStandbyChannelEvent;
}