export interface PageMessageRequest {
    /**
     * The messaging type of the message being sent.
     *
     * For supported types and more information, see [Sending Messages - Messaging Types](https://developers.facebook.com/docs/messenger-platform/send-messages/#messaging_types)
     */
    messaging_type: string;
    /**
     * The ID of a Persona
     */
    persona_id: string;
    /**
     * The recipient of the message
     */
    /**
     * Message state to display to the user:
     * - `typing_on`: display the typing bubble
     * - `typing_off`: remove the typing bubble
     * - `mark_seen`: display the confirmation icon
     *
     * Cannot be sent with message. Must be sent as a separate request.
     *
     * When using `sender_action`, recipient should be the only other property set in the request.
     */
    sender_action: string;
    message: PageMessage;
    recipient: PageMessageRecipient;
    /**
     * Push notification type:
     * - `REGULAR`: sound/vibration
     * - `SILENT_PUSH`: on-screen notification only
     * - `NO_PUSH`: no notification
     *
     * Defaults to `REGULAR`.
     */
    notification_type?: 'REGULAR' | 'SILENT_PUSH' | 'NO_PUSH';
    /**
     * The message tag string. See [Message Tags](https://developers.facebook.com/docs/messenger-platform/message-tags).
     */
    tag: 'CONFIRMED_EVENT_UPDATE' | 'POST_PURCHASE_UPDATE' | 'ACCOUNT_UPDATE' | 'HUMAN_AGENT';
}
interface PageMessageRecipient {
    /**
     * Page Scoped User ID (PSID) of the message recipient. The user needs to have interacted with any of the `Messenger entry points` in order to opt-in into messaging with the Page. Note that `Facebook Login` integrations return user IDs are app-scoped and will not work with the Messenger platform.
     */
    id: string;
    /**
     * Used for the [checkbox plugin](https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin) and [customer chat plugin](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin).
     */
    user_ref?: string;
    /**
     * Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies) to reference the visitor post to reply to.
     */
    post_id?: string;
    /**
     * Used for [Private Replies](https://developers.facebook.com/docs/messenger-platform/discovery/private-replies) to reference the post comment to reply to.
     */
    comment_id?: string;
}
interface PageMessageBase {
    /**
     * Array of quick replies to be sent with messages
     */
    quick_replies?: [];
    /**
     * Custom string that is delivered as a [message echo](https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-echo). 1000 character limit.
     */
    metadata?: string;
}
interface PageMessageWithText extends PageMessageBase {
    /**
     * Message text. Previews will not be shown for the URLs in this field. Use attachment instead. Must be UTF-8 and has a 2000 character limit.
     */
    text: string;
}
interface PageMessageWithAttachment extends PageMessageBase {
    /**
     * `attachment` object. Previews the URL. Used to send messages with media or Structured Messages.
     */
    attachment: PageMessageAttachment;
}
declare type PageMessage = PageMessageWithText | PageMessageWithAttachment;
interface PageMessageAttachmentBase {
    /**
     * Type of attachment, may be `image`, `audio`, `video`, `file` or `template`. For assets, max file size is 25MB.
     */
    type: 'image' | 'audio' | 'video' | 'file' | 'template';
    /**
     * Payload of attachment, can either be a [Template Payload](https://developers.facebook.com/docs/messenger-platform/reference/templates#payload) or a [File Attachment Payload](https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api#payload)
     */
    payload: unknown;
}
interface PageMessageFileAttachment extends PageMessageAttachmentBase {
    type: 'image' | 'audio' | 'video' | 'file';
    payload: {
        /**
         * URL of the file to upload. Max file size is 25MB (after encoding). A Timeout is set to 75 sec for videos and 10 secs for every other file type.
         */
        url?: string;
        /**
         * Set to `true` to make the saved asset sendable to other message recipients. Defaults to `false`.
         */
        is_reusable: boolean;
    };
}
interface PageMessageTemplateAttachment extends PageMessageAttachmentBase {
    type: 'template';
    /**
     * The rest of `message.attachment.payload` properties depend on the template type. See [Available templates](https://developers.facebook.com/docs/messenger-platform/reference/templates#available_templates).
     */
    payload: MessageTemplate;
}
declare type PageMessageAttachment = PageMessageFileAttachment | PageMessageTemplateAttachment;
declare type MessageTemplate = GenericTemplate | ButtonTemplate | MediaTemplate | ReceiptTemplate | AirlineBoardingPassTemplate | AirlineCheckInTemplate | AirlineItineraryTemplate | AirlineFlightUpdateTemplate;
declare type AirlineTemplateType = `airline_${'boardingpass' | 'checkin' | 'itinerary' | 'update'}`;
interface MessageTemplateBase {
    template_type: 'generic' | 'button' | 'media' | 'receipt' | AirlineTemplateType;
}
interface GenericTemplate extends MessageTemplateBase {
    template_type: 'generic';
    /**
     * The aspect ratio used to render images specified by `element.image_url`. Must be `horizontal` (1.91:1) or `square` (1:1). Defaults to `horizontal`.
     */
    image_aspect_ratio: 'horizontal' | 'square';
    /**
     * An array of [`element`](https://developers.facebook.com/docs/messenger-platform/reference/templates/generic#elements) objects that describe instances of the generic template to be sent. Specifying multiple elements will send a horizontally scrollable carousel of templates. A maximum of 10 elements is supported.
     */
    elements: GenericTemplateElement;
}
interface GenericTemplateElement {
    /**
     * The title to display in the template. 80 character limit.
     */
    title: string;
    /**
     * The subtitle to display in the template. 80 character limit.
     */
    subtitle?: string;
    /**
     * The URL of the image to display in the template.
     */
    image_url?: string;
    /**
     * The default action executed when the template is tapped. Accepts the same properties as [URL button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button), except `title`.
     */
    default_action?: Omit<URLButton, 'title'>;
    /**
     * An array of [buttons](https://developers.facebook.com/docs/messenger-platform/send-api-reference/buttons) to append to the template. A maximum of 3 buttons per element is supported.
     */
    buttons?: MessageButton[];
}
interface ButtonTemplate extends MessageTemplateBase {
    template_type: 'button';
    /**
     * UTF-8-encoded text of up to 640 characters. Text will appear above the buttons.
     */
    text: string;
    /**
     * Set of 1-3 [buttons](https://developers.facebook.com/docs/messenger-platform/send-api-reference/buttons) that appear as call-to-actions.
     */
    buttons: MessageButton[];
}
interface MediaTemplate extends MessageTemplateBase {
    template_type: 'media';
    /**
     * An array containing 1 [element](https://developers.facebook.com/docs/messenger-platform/reference/templates/media#elements) object that describe the media in the message. A maximum of 1 element is supported.
     */
    elements: [MediaTemplateElement];
    /**
     * Set to `true` to enable the native share button in Messenger for the template message. Defaults to `false`.
     */
    sharable: true;
}
interface MediaTemplateElement {
    /**
     * The type of media being sent - image or video is supported.
     */
    media_type: string;
    /**
     * The attachment ID of the image or video. Cannot be used if url is set.
     */
    attachment_id: string;
    /**
     * The URL of the image. Cannot be used if attachment_id is set.
     */
    url: string;
    /**
     * An array of button objects to be appended to the template. A maximum of 1 button is supported.
     */
    buttons: [MessageButton];
}
interface ReceiptTemplate extends MessageTemplateBase {
    template_type: 'receipt';
    /**
     * Set to `true` to enable the native share button in Messenger for the template message. Defaults to `false`.
     */
    sharable: true;
    /**
     * The recipient's name.
     */
    recipient_name: string;
    /**
     * The merchant's name. If present this is shown as logo text.
     */
    merchant_name?: string;
    /**
     * The order number. Must be unique.
     */
    order_number: string;
    /**
     * The currency of the payment.
     */
    currency: string;
    /**
     * The payment method used. Providing enough information for the customer to decipher which payment method and account they used is recommended. This can be a custom string, such as, "Visa 1234".
     */
    payment_method: string;
    /**
     * Timestamp of the order in seconds.
     */
    timestamp?: string;
    /**
     * Array of a maximum of 100 [`element`](https://developers.facebook.com/docs/messenger-platform/reference/templates/receipt#elements) objects that describe items in the order. Sort order of the elements is not guaranteed.
     */
    elements?: ReceiptTemplateElement[];
    /**
     * The shipping address of the order.
     */
    address?: ReceiptTemplateAddress;
    /**
     * The payment summary.
     */
    summary: ReceiptTemplateSummary;
    /**
     * An array of [payment](https://developers.facebook.com/docs/messenger-platform/reference/templates/receipt#payment) objects that describe payment adjustments, such as discounts.
     */
    adjustments: ReceiptTemplateAdustment[];
}
interface ReceiptTemplateElement {
    /**
     * The name to display for the item.
     */
    title: string;
    /**
     * The subtitle for the item, usually a brief item description.
     */
    subtitle?: string;
    /**
     * The quantity of the item purchased.
     */
    quantity?: number;
    /**
     * The price of the item. For free items, '0' is allowed.
     */
    price: number;
    /**
     * The currency of the item price.
     */
    currency?: string;
    /**
     * The URL of an image to be displayed with the item.
     */
    image_url?: string;
}
interface ReceiptTemplateAddress {
    /**
     * The street address, line 1.
     */
    street_: string;
    /**
     * The street address, line 2.
     */
    street_2?: string;
    /**
     * The city name of the address.
     */
    city: string;
    /**
     * The postal code of the address.
     */
    postal_code: string;
    /**
     * The state abbreviation for U.S. addresses, or the region/province for non-U.S. addresses.
     */
    state: string;
    /**
     * The two-letter country abbreviation of the address.
     */
    country: string;
}
interface ReceiptTemplateSummary {
    /**
     * The sub-total of the order.
     */
    subtotal?: number;
    /**
     * The shipping cost of the order.
     */
    shipping_cost?: number;
    /**
     * The tax of the order.
     */
    total_tax?: number;
    /**
     * The total cost of the order, including sub-total, shipping, and tax.
     */
    total_cost: number;
}
interface ReceiptTemplateAdustment {
    /**
     * Name of the adjustment.
     */
    name: string;
    /**
     * The amount of the adjustment.
     */
    amount: number;
}
interface AirlineMessageTemplateBase {
    template_type: AirlineTemplateType;
    /**
     * Introduction message
     */
    intro_message: string;
    /**
     * Two-letter language region code. Must be a two-letter ISO 639-1 language code and a ISO 3166-1 alpha-2 region code separated by an underscore character. Used to translate field labels (e.g. en_US). See [this document](https://developers.facebook.com/docs/internationalization#locales) for more information about Facebook's locale support.
     */
    locale: string;
}
interface AirlineBoardingPassTemplate extends AirlineMessageTemplateBase {
    template_type: 'airline_boardingpass';
    /**
     * Background color of the attachment. Must be a RGB hexadecimal string. Defaults to #009ddc.
     */
    theme_color?: string;
    /**
     * Boarding passes for passengers
     */
    boarding_pass: AirlineBoardingPassTemplateBoardingPass[];
}
interface AirlineBoardingPassTemplateBoardingPassBase {
    /**
     * Flight number
     */
    passenger_name: string;
    /**
     * Passenger name record number (Booking Number)
     */
    pnr_number: string;
    /**
     * Travel class.
     */
    travel_class?: string;
    /**
     * Seat number for passenger.
     */
    seat?: string;
    /**
     * Flexible information to display in the auxiliary section.
     */
    auxiliary_fields?: AirlineBoardingPassTemplateBoardingPassField[];
    /**
     * Flexible information to display in the secondary section.
     */
    secondary_fields?: AirlineBoardingPassTemplateBoardingPassField[];
    /**
     * URL for the logo image
     */
    logo_image_url: string;
    /**
     * URL for the header image.
     */
    header_image_url?: string;
    /**
     * Text for the header field.
     */
    header_text_field?: AirlineBoardingPassTemplateBoardingPassField;
    /**
     * URL of thin image above the barcode.
     */
    above_bar_code_image_url: string;
    /**
     * Information about the flight.
     */
    flight_info: AirlineMessageTemplateFlightInfo;
}
interface AirlineBoardingPassTemplateBoardingPassWithQRCode extends AirlineBoardingPassTemplateBoardingPassBase {
    /**
     * Aztec or QR code.
     */
    qr_code: string;
}
interface AirlineBoardingPassTemplateBoardingPassWithBarCode extends AirlineBoardingPassTemplateBoardingPassBase {
    /**
     * URL of the barcode image.
     */
    barcode_image_url: string;
}
interface AirlineBoardingPassTemplateBoardingPassField {
    /**
     * Label for the additional field
     */
    label: string;
    /**
     * Value for the additional field
     */
    value: string;
}
interface AirlineMessageTemplateFlightInfo {
    /**
     * Flight number
     */
    flight_number: string;
    /**
     * Departure airport.
     */
    departure_airport: AirlineMessageTemplateFlightInfoDepartureAirport;
    /**
     * Arrival airport.
     */
    arrival_airport: AirlineMessageTemplateFlightInfoArrivalAirport;
    /**
     * Schedule for the flight.
     */
    flight_schedule: AirlineMessageTemplateFlightInfoFlightSchedule;
}
interface AirlineMessageTemplateFlightInfoFlightSchedule {
    /**
     * Boarding time in departure airport timezone. Must be in the ISO 8601-based format YYYY-MM-DDThh:mm (e.g. 2015-09-26T10:30).
     */
    boarding_time?: string;
    /**
     * Departure time in departure airport timezone. Must be in the ISO 8601-based format YYYY-MM-DDThh:mm (e.g. 2015-09-26T10:30).
     */
    departure_time: string;
    /**
     * Arrival time in arrival airport timezone. Must be in the ISO 8601-based format YYYY-MM-DDThh:mm (e.g. 2015-09-26T10:30).
     */
    arrival_time?: string;
}
interface AirlineMessageTemplateFlightInfoDepartureAirport {
    /**
     * Airport code of the departure airport.
     */
    airport_code: string;
    /**
     * Departure city of the flight.
     */
    city: string;
    /**
     * Terminal of the departing flight.
     */
    terminal: string;
    /**
     * Gate for the departing flight.
     */
    gate: string;
}
interface AirlineMessageTemplateFlightInfoArrivalAirport {
    /**
     * Airport code of the arrival airport.
     */
    airport_code: string;
    /**
     * Arrival city of the flight.
     */
    city: string;
}
declare type AirlineBoardingPassTemplateBoardingPass = AirlineBoardingPassTemplateBoardingPassWithQRCode | AirlineBoardingPassTemplateBoardingPassWithBarCode;
interface AirlineCheckInTemplate extends AirlineMessageTemplateBase {
    template_type: 'airline_checkin';
    /**
     * The Passenger Name Record number (Booking Number).
     */
    pnr_number?: string;
    /**
     * The URL where the customer can check in for their flight.
     */
    checkin_url: string;
    /**
     * The flight number, departure airport, arrival airport, and schedule information for the flight.
     */
    flight_info: AirlineMessageTemplateFlightInfo;
}
interface AirlineItineraryTemplate extends AirlineMessageTemplateBase {
    template_type: 'airline_itinerary';
    /**
     * Background color of the attachment. Must be a RGB hexadecimal string. Defaults to #009ddc.
     */
    theme_color?: string;
    /**
     * The Passenger Name Record number (Booking Number).
     */
    pnr_number?: string;
    /**
     * Information about passengers
     */
    passenger_info: AirlineItineraryTemplatePassengerInfo[];
    /**
     * Information about flights
     */
    flight_info: AirlineItineraryTemplateFlightInfo[];
    /**
     * Information unique to passenger/segment pairs
     */
    passenger_segment_info: AirlineItineraryTemplatePassengerSegmentInfo[];
    /**
     * Itemization of the total price. Maximum of 4 items is supported.
     */
    price_info?: AirlineItineraryTemplatePriceInfo[];
    /**
     * Base price amount
     */
    base_price?: number;
    /**
     * Tax amount
     */
    tax?: number;
    /**
     * Total price for the booking
     */
    total_price: number;
    /**
     * Pricing currency. Must be a three digit ISO-4217-3 code. See [this document](https://developers.facebook.com/docs/payments/reference/supportedcurrencies) for more information about Facebook's currency support.
     */
    currency: string;
}
interface AirlineItineraryTemplatePassengerInfo {
    /**
     * Passenger ID. Must be unique within the itinerary.
     */
    passenger_id: string;
    /**
     * Ticket number.
     */
    ticket_number?: string;
    /**
     * Full name of passenger, including title
     */
    name: string;
}
interface AirlineItineraryTemplateFlightInfo extends AirlineMessageTemplateFlightInfo {
    /**
     * Used to group segments of a connection together. Must be unique within the itinerary
     */
    connection_id: string;
    /**
     * `segment_id` of `passenger_segment_info` object
     */
    segment_id: string;
    /**
     * Aircraft type (e.g. Boing 787).
     */
    aircraft_type?: string;
    /**
     * Travel class. Must be `economy`, `business` or `first_class`.
     */
    travel_class: 'economy' | 'business' | 'first_class';
}
interface AirlineItineraryTemplatePassengerSegmentInfo {
    /**
     * Used to identify a flight segment. Must be unique within the itinerary.
     */
    segment_id: string;
    /**
     * passenger_id of passenger_info object
     */
    passenger_id: string;
    /**
     * Seat number for the passenger
     */
    seat: string;
    /**
     * Seat type for the passenger (e.g. Economy comfort)
     */
    seat_type: string;
    /**
     * List of products the passenger purchased. Maximum of 4 items is supported.
     */
    product_info?: AirlineItineraryTemplatePassengerSegmentInfoProductInfo[];
}
interface AirlineItineraryTemplatePassengerSegmentInfoProductInfo {
    /**
     * Product title
     */
    title: string;
    /**
     * Product description
     */
    value: string;
}
interface AirlineItineraryTemplatePriceInfo {
    /**
     * Price info title
     */
    title: string;
    /**
     * Price amount
     */
    amount: number;
    /**
     * Pricing currency. Must be a three digit ISO-4217-3 code. See this document for more information about Facebook's currency support.
     */
    currency?: string;
}
interface AirlineFlightUpdateTemplate {
    template_type: 'airline_update';
    /**
     * Background color of the attachment. Must be a RGB hexadecimal string. Defaults to #009ddc.
     */
    theme_color?: string;
    /**
     * Type of update. Must be `delay`, `gate_change` or `cancellation`.
     */
    update_type: 'delay' | 'gate_change' | 'cancellation';
    /**
     * The Passenger Name Record number (Booking Number).
     */
    pnr_number?: string;
    /**
     * Updated flight information.
     */
    update_flight_info: AirlineMessageTemplateFlightInfo;
}
interface MessageButtonBase {
    /**
     * Type of button
     */
    type: 'web_url' | 'postback' | 'phone_number' | 'account_link' | 'account_unlink';
}
interface URLButtonBase extends MessageButtonBase {
    type: 'web_url';
    /**
     * Button title. 20 character limit.
     */
    title: string;
    /**
     * This URL is opened in a mobile browser when the button is tapped. Must use HTTPS protocol if `messenger_extensions` is true.
     */
    url: `http://${string}` | `https://${string}`;
    /**
     * Height of the [webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview). Valid values: `compact`, `tall`, `full`. Defaults to `full`.
     */
    webview_height_ratio?: string;
    /**
     * Must be `true` if using Messenger Extensions.
     */
    messenger_extensions?: boolean;
    /**
     * The URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview). If this is not defined, the `url` will be used as the fallback. It may only be specified if `messenger_extensions` is true.
     */
    fallback_url: string;
    /**
     * Set to `hide` to disable the share button in the Webview (for sensitive info). This does not affect any shares initiated by the developer using Extensions.
     */
    webview_share_button?: 'hide';
}
interface URLButtonUsingMessengerExtensions {
    messenger_extensions: true;
    url: `https://${string}`;
}
export declare type URLButton = URLButtonBase | URLButtonUsingMessengerExtensions;
export interface PostbackButton extends MessageButtonBase {
    type: 'postback';
    /**
     * Button title. 20 character limit.
     */
    title: string;
    /**
     * This data will be sent back to your webhook. 1000 character limit.
     */
    payloaod: string;
}
interface CallButton extends MessageButtonBase {
    type: 'phone_number';
    /**
     * Button title. 20 character limit.
     */
    title: string;
    /**
     * Format must have "+" prefix followed by the country code, area code and local number. For example, `+16505551234`.
     */
    payload: `+${number}`;
}
interface LoginButton extends MessageButtonBase {
    type: 'account_link';
    /**
     * [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL. Must use HTTPS protocol.
     */
    url: string;
}
interface LogoutButton {
    type: 'account_unliknk';
}
declare type MessageButton = URLButton | PostbackButton | CallButton | LoginButton | LogoutButton;
export {};
