import { CustomData } from './custom-data';
import { UserData } from './user-data';
/**
 * EventName
 * @see {@link https://developers.facebook.com/docs/facebook-pixel/reference#standard-events}
 */
declare type EventName = 'AddPaymentInfo' | 'AddToCart' | 'Purchase' | 'AddToWishlist' | 'CompleteRegistration' | 'Contact' | 'CustomizeProduct' | 'Donate' | 'FindLocation' | 'InitiateCheckout' | 'Lead' | 'PageView' | 'Purchase' | 'Schedule' | 'Search' | 'StartTrial' | 'SubmitApplication' | 'Subscribe' | 'ViewContent';
/**
 * ServerEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event}
 */
export interface ServerEvent {
    data: {
        /**
         * A Facebook pixel Standard Event or Custom Event name.
         */
        event_name: EventName | string;
        /**
         * A Unix timestamp in seconds indicating when the actual event occurred.
         */
        event_time: number;
        /**
         * The browser URL where the event happened.
         */
        event_source_url: string;
        /**
         * This ID can be any string chosen by the advertiser.
         */
        event_id?: string;
        /**
         * A string that indicates where the event took place.
         */
        action_source: 'email' | 'website' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
        /**
         * A flag that indicates we should not use this event for ads delivery optimization.
         */
        opt_out?: boolean;
        /**
         * A map that contains user data. See UserData Class for options.
         */
        user_data: UserData;
        /**
         * A map that contains user data. See CustomData Class for options.
         */
        custom_data?: CustomData;
        /**
         * Processing options you would like to enable for a specific event.
         */
        data_processing_options?: string[];
        /**
         * A country that you want to associate to this data processing option.
         */
        data_processing_options_state?: number;
        /**
         * A state that you want to associate with this data processing option.
         */
        data_processing_options_country?: number;
    }[];
}
export {};
