import { XOR } from '../../util';
import { PostbackButton, URLButton } from './send';
export interface MessengerProfile {
    /**
     * Authentication callback URL. Must use https protocol.
     *
     * For more, see [Account Linking URL Reference](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/account-linking-url).
     */
    account_linking_url: string;
    /**
     * The payload that will be sent as a `messaging_postbacks` event when someone taps the 'get started' button on your Page Messenger welcome screen.
     *
     * For more, see [Get Started Button Reference](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button).
     */
    get_started: MessengerProfileGetStarted;
    /**
     * Settings related to locale-aware greeting text
     */
    greeting: MessengerProfileGreeting[];
    /**
     * An array with an ice breaker object.
     *
     * For more, see [Ice Breakers Reference](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/ice-breakers).
     */
    ice_breakers: MessengerProfileIceBreaker[];
    /**
     * An array of call-to-action buttons to include in the persistent menu.
     *
     * For more, see [Persistent Menu Reference](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu).
     */
    persistent_menu: MessengerProfilePersistentMenu[];
    /**
     * A list of whitelisted domains. Required for Pages that use the Messenger Extensions SDK and the checkbox plugin.
     *
     * For more, see [Domain Whitelisitng Reference](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/domain-whitelisting).
     */
    whitelisted_domains: string[];
    /**
     * A boolean flag that determines whether the page is impacted by the [Messenger API Updates for Europe](https://developers.facebook.com/docs/messenger-platform/europe-updates/). This property is only available for `GET` request.
     */
    subject_to_new_eu_privacy_rules: boolean;
}
interface MessengerProfileGetStarted {
    /**
     * Payload sent back to your webhook in a `messaging_postbacks` event when the 'Get Started' button is tapped. 1000 character limit.
     */
    payload: string;
}
interface MessengerProfileGreeting {
    /**
     * Locale of the greeting text, shown when the person's locale matches the provided locale.
     *
     * You must at least specify greeting text for the default locale, which will be displayed if no provided locale matches the person's locale.
     *
     * List of supported locales.
     */
    locale: string;
    /**
     * The greeting text for the specific locale. Must be in UTF-8. 160 character limit.
     */
    text: string;
}
interface MessengerProfileIceBreaker {
    /**
     * Text that will be posted on the thread as the user asking the question.
     */
    question: string;
    /**
     * Payload the will be returned as a [postback webhook event](https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_postbacks/)
     */
    payload: string;
}
export interface MessengerProfilePersistentMenu {
    /**
     * An array of objects that define the persistent menu for different locales. The menu with a `locale` property that matches the person's locale will be displayed.
     *
     * At least one object in the `persistent_menu` array must specify `"locale": "default"`. This is the menu we will fall back to if no object has a `locale` property that matches the users locale.
     *
     * See the list of [supported locales](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales).
     */
    locale: string;
    /**
     * Disables the Messenger composer field if set to `true`. This means your bot can only be interacted with via the persistent menu, postbacks, buttons, and webviews.
     *
     * Defaults to `false`.
     */
    composer_input_disabled: boolean;
    /**
     * Array of interface names to disable the persistent menu in. Currently only `customer_chat_plugin` is supported.
     */
    disabled_surfaces: 'customer_chat_plugin'[];
    /**
     * An array of top-level menu items for the persistent menu. A maximum of 3 items is allowed.
     *
     * Required if `"composer_input_disabled": true`.
     */
    call_to_actions: XOR<[PostbackButton, URLButton]>[];
}
export {};
