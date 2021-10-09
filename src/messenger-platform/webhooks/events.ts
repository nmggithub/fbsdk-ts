import type { XOR } from '../../util';
import type { MessageTemplate } from '../apis/send';

export interface MessageReceivedEvent {
    /**
     * Message ID
     */
    mid: string;
    /**
     * Text of message
     */
    text: string;
    quick_reply: {
        /**
         * Optional custom data provided by the sending app
         */
        payload: string;
    };
    reply_to: {
        /**
         * Reference to the message id (mid) that this message is replying to
         */
        mid: string;
    };
    /**
     * Array containing attachment data
     */
    attachments: MessageReceivedEventAttachment[];
    /**
     * Referral of the message from Facebook Shops product details page.
     */
    referral: {
        /**
         * Product information
         */
        product: {
            /**
             * Product ID
             */
            id: string;
        };
    };
}

type MessageReceivedEventAttachment = XOR<
    [
        MessageReceivedEventAttachmentBase,
        MessageReceivedEventFallbackAttachment,
        MessageReceivedEventLocationAttachment,
        MessageReceivedEventStickerAttachment,
        MessageReceivedEventProductAttachment,
    ]
>;

interface MessageReceivedEventAttachmentBase {
    /**
     * 	`audio`, `file`, `image`, `location`, `video`, or `fallback`
     */

    type: 'audio' | 'file' | 'image' | 'location' | 'video' | 'fallback';
    /**
     * message.attachments.payload
     */
    payload: MessageReceivedEventPayloadBase;
}

interface MessageReceivedEventFallbackAttachment
    extends MessageReceivedEventAttachmentBase {
    type: 'fallback';
    payload: MessageReceivedEventFallbackAttachmentPayload;
}

interface MessageReceivedEventLocationAttachment
    extends MessageReceivedEventAttachmentBase {
    type: 'location';
    payload: MessageReceivedEventLocationAttachmentPayload;
}

interface MessageReceivedEventStickerAttachment
    extends MessageReceivedEventAttachmentBase {
    type: 'image';
    payload: MessageReceivedEventStickerAttachmentPayload;
}

interface MessageReceivedEventProductAttachment {
    type: 'template';
    payload: MessageReceivedEventProductAttachmentPayload;
}

interface MessageReceivedEventPayloadBase {
    /**
     * URL of the attachment type.
     */
    url: string;
}

interface MessageReceivedEventFallbackAttachmentPayload
    extends MessageReceivedEventPayloadBase {
    /**
     * Title of the attachment.
     */
    title: string;
}

interface MessageReceivedEventLocationAttachmentPayload
    extends MessageReceivedEventPayloadBase {
    coordinates: {
        /**
         * Latitude.
         */
        lat: number;

        /**
         * Longitude.
         */
        long: number;
    };
}

interface MessageReceivedEventStickerAttachmentPayload
    extends MessageReceivedEventPayloadBase {
    /**
     * Persistent id of this sticker, for example `369239263222822` references the Like sticker.
     */
    sticker_id: string;
}

interface MessageReceivedEventProductAttachmentPayload {
    product: {
        elements: {
            /**
             * Product ID from [Facebook product catalog](https://developers.facebook.com/docs/marketing-api/catalog/overview)
             */
            id: string;
            /**
             * External ID that is associated with the Product. (ex: SKU/ Content ID)
             */
            retailer_id: string;
            /**
             * URL of product
             */
            image_url: string;
            /**
             * Title of product
             */
            title: string;
            /**
             * Subtitle of product
             */
            subtitle: string;
        }[];
    };
}

export interface AccountLinkingEvent {
    /**
     * linked or unlinked
     */
    status: string;
    /**
     * Value of pass-through authorization_code provided in the Account Linking flow
     */
    authorization_code: string;
}

export interface MessageDeliveredEvent {
    /**
     * Array containing message IDs of messages that were delivered. Field may not be present.
     */
    mids: string[];
    /**
     * All messages that were sent before this timestamp were delivered
     */
    watermark: number;
}

interface MessageEchoEventBase {
    /**
     * Indicates the message sent from the page itself
     */
    is_echo: boolean;
    /**
     * ID of the app from which the message was sent
     */
    app_id: string;
    /**
     * Custom string passed to the Send API as the metadata field. Only present if the metadata property was set in the original message.
     */
    metadata: string;
    /**
     * Message ID
     */
    mid: string;
}

export type MessageEchoEvent = XOR<
    [
        TextMessageEchoEvent,
        AttachmentMessageEchoEvent,
        TemplateAttachmentMessageEchoEvent,
        FallbackAttachmentMessageEchoEvent,
    ]
>;

interface TextMessageEchoEvent extends MessageEchoEventBase {
    /**
     * Text of message
     */
    text: string;
}

interface AttachmentMessageEchoEvent extends MessageEchoEventBase {
    attachments: {
        /**
         * Type of attachment: `image`, `audio`, `video` or `file`
         */
        type: 'image' | 'audio' | 'video' | 'file';
        payload: {
            /**
             * URL of attachment
             */
            url: string;
        };
    }[];
}

interface TemplateAttachmentMessageEchoEvent extends MessageEchoEventBase {
    attachments: {
        /**
         * `template`
         */
        type: 'template';
        /**
         * Template payload as described in the [Send API Reference](https://developers.facebook.com/docs/messenger-platform/send-api-reference#request)
         */
        payload: MessageTemplate;
    }[];
}

interface FallbackAttachmentMessageEchoEvent extends MessageEchoEventBase {
    attachments: {
        type: 'fallback';
        /**
         * Title of attachment
         */
        title?: string;
        /**
         * URL of attachment
         */
        url?: string;
        /**
         * Payload of attachment
         */
        payload: unknown;
    };
}

export interface InstantGameEvent {
    /**
     * App ID of the game
     */
    game_id: string;
    /**
     * ID of the user in the Instant Game name-space. By linking this ID to the `PSID` received in the sender field, the bot can send messages to a user after a game play.
     */
    player_id: string;
    /**
     * Type of the social context a game is played in.
     */
    context_type: 'SOLO' | 'THREAD' | 'GROUP';
    /**
     * ID of the context if not a SOLO type. This ID is in the Instant Game name-space.
     */
    context_id: string;
    /**
     * Best score achieved by this user in this game round. Only available to Classic score based games.
     */
    score: number;
    /**
     * JSON encoded payload data, set using `FBInstant.setSessionData()`. Only available to game with Rich Games Feature enabled.
     */
    payload: string;
}

export interface HandoverProtocolPassThreadControlEvent {
    /**
     * App ID that thread control is passed to.
     */
    new_owner_app_id: string;
    /**
     * Custom string specified in the API request.
     */
    metadata: string;
}
export interface HandoverProtocolTakeThreadControlEvent {
    /**
     * App ID that thread control was taken from.
     */
    previous_owner_app_id: string;
    /**
     * Custom string specified in the API request.
     */
    metadata: string;
}

export interface HandoverProtocolRequestThreadControlEvent {
    /**
     * App ID of the Secondary Receiver that is requesting thread control.
     */
    requested_owner_app_id: string;
    /**
     * Custom string specified in the API request.
     */
    metadata: string;
}

export interface HandoverProtocolAppRolesEvent {
    [key: string]: ['primary_receiver' | 'secondary_receiver'];
}

export interface PluginOptInEvent {
    /**
     * data-ref attribute that was defined with the entry point.
     */
    ref: string;
    /**
     * Checkbox plugin only. user_ref attribute that was defined in the checkbox plugin include.
     */
    user_ref: string;
}

interface PolicyEnforcementEventBase {
    /**
     * `action` will be either `warning`, `block` or `unblock`
     */
    action: string;
}

export type PolicyEnforcementEvent = XOR<
    [PolicyEnforcementWarningOrBlockEvent, PolicyEnforcementUnblockEvent]
>;

interface PolicyEnforcementWarningOrBlockEvent
    extends PolicyEnforcementEventBase {
    action: 'warning' | 'block';
    /**
     * The reason for being warned or blocked.
     */
    reason: string;
}

interface PolicyEnforcementUnblockEvent extends PolicyEnforcementEventBase {
    action: 'unblock';
}

export interface PostbackRecievedEvent {
    /**
     * Title for the CTA that was clicked on. This is sent to all apps subscribed to the page. For apps other than the original CTA sender, the postback event will be delivered via the [standby channel](https://developers.facebook.com/docs/messenger-platform/webhook-reference/standby-channel).
     */
    title: string;
    /**
     * payload parameter that was defined with the button. This is only visible to the app that send the original template message.
     */
    payload: string;
    /**
     * Referral information for how the user got into the thread.
     */
    referral: ReferralEvent;
}

export interface MessageReactionEvent {
    /**
     * Text description of the reaction. Possible values: `smile`, `angry`, `sad`, `wow`, `love`, `like`, `dislike`.
     *
     * `other` could also be returned in case the emoji based reaction does not match the ones above.
     */
    reaction:
        | 'smile'
        | 'angry'
        | 'sad'
        | 'wow'
        | 'love'
        | 'like'
        | 'dislike'
        | 'other';
    /**
     * Reference to the emoji corresponding to the reaction.
     */
    emoji: string;
    /**
     * Action performed by the user. Possible values: `react`, `unreact`
     */
    action: 'react' | 'unreact';
    /**
     * Reference to the Message ID that the user reacted performed the reaction on.
     */
    mid: string;
}

export interface MessageReadEvent {
    /**
     * All messages that were sent before or at this timestamp were read
     */
    watermark: number;
}

export interface ReferralEvent {
    /**
     * The source of the referral. Supported values:
     * - `MESSENGER_CODE`
     * - `DISCOVER_TAB`
     * - `ADS`
     * - `SHORTLINK`
     * - `CUSTOMER_CHAT_PLUGIN`
     */
    source:
        | 'MESSENGER_CODE'
        | 'DISCOVER_TAB'
        | 'ADS'
        | 'SHORTLINK'
        | 'CUSTOMER_CHAT_PLUGIN';
    /**
     * The referral type. Currently supports OPEN_THREAD.
     */
    type: 'OPEN_THREAD';
    /**
     * The optional ref attribute set in the referrer.
     */
    ref: string;
    /**
     * The URI of the site where the message was sent in the Facebook chat plugin.
     */
    referrer_uri: string;
    /**
     * A flag indicating whether the user is a guest user from [Facebook Chat Plugin](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/)
     */
    is_guest_user: string;
    /**
     * The data contaning information about the CTM ad, the user initiated the thread from.
     */
    ads_context_data: {
        /**
         * Title of the Ad.
         */
        ad_title: string;
        /**
         * Url of the image from the Ad the user is interested.
         */
        photo_url: string;
        /**
         * Thumbnail url of the the video from the ad.
         */
        video_url: string;
        /**
         * ID of the post.
         */
        post_id: string;
    };
}

export type HandoverProtocolStandbyChannelEvent = XOR<
    [
        MessageReadEvent,
        MessageDeliveredEvent,
        MessageReceivedEvent,
        Omit<PostbackRecievedEvent, 'payload'>,
    ]
>[];
