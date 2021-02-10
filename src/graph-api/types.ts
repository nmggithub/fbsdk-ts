type BackdatedTimeGranularityEnum = 'year' | 'month' | 'day' | 'hour' | 'min' | 'none';
export interface Album {
    /**
     * The Album ID.
     */
    id: string;
    /**
     * A user-specified time for when this object was created
     */
    backdated_time: string;
    /**
     * How accurate the backdated time is
     */
    backdated_time_granularity: BackdatedTimeGranularityEnum;
    /**
     * Whether the app user can upload photos to this Album
     */
    can_upload: boolean;
    /**
     * The approximate number of [Photos](https://developers.facebook.com/docs/graph-api/reference/photo) and [Videos](https://developers.facebook.com/docs/graph-api/reference/video) in the Album.
     */
    count: number;
    /**
     * Album cover photo id
     */
    cover_photo: Photo;
    /**
     * The Album creation date and time.
     */
    created_time: string;
    /**
     * The Album description.
     */
    description: string;
    /**
     * If this object has a place, the event associated with the place
     */
    event: Event;
    /**
     * The User who created the Album.
     */
    from: User | Page;
    /**
     * A link to this Album on Facebook.
     */
    link: URL;
    /**
     * The Album textual location.
     */
    location: string;
    /**
     * The Album title.
     */
    name: string;
    /**
     * Place info
     */
    place: Place;
    /**
     * The Album privacy settings.
     */
    privacy: string;
    /**
     * The Album type: album, app, cover, profile, mobile, normal, or wall
     */
    type: string;
    /**
     * The date and time the Album was last updated.
     */
    updated_time: string;
}
export interface AppRequest {
    /**
     * The ID of an individual request
     */
    id: string;
    /**
     * Request action type for structured request
     */
    action_type: string;
    /**
     * The app used to send the request
     */
    application: Application;
    /**
     * Timestamp when the request was sent
     */
    created_time: string;
    /**
     * Optional data passed with the request for tracking purposes
     */
    data: string;
    /**
     * The user who sent the request. This is not present for app-to-user requests made with the Graph API
     */
    from: unknown; // AppRequestUser
    /**
     * The message included with the request
     */
    message: string;
    /**
     * Open Graph object for structured request. Note the type of object should belong to this app
     */
    object: OpenGraphObject__generic;
    /**
     * The user who received the request
     */
    to: unknown; // AppRequestUser
}

interface OpenGraphObject__generic {
    /**
     * The Open Graph object ID
     */
    id: string;
    /**
     * A list of admins
     */
    admins: OpenGraphObjectProfile[];
    /**
     * The application that created this object
     */
    application: OpenGraphObjectProfile;
    /**
     * A list of audio URLs
     */
    audio: OpenGraphObjectAudio[];
    /**
     * The time the object was created
     */
    created_time: string;
    /**
     * A short description of the object
     */
    description: string;
    /**
     * The word that appears before the object's title
     */
    determiner: string;
    /**
     * The social sentence and like count for this object and its associated share. This is the same info used for the like button
     */
    engagement: Engagement;
    /**
     * A list of image URLs
     */
    image: OpenGraphObjectVideo[];
    /**
     * Whether the object has been scraped
     */
    is_scraped: boolean;
    /**
     * The locale the object is in
     */
    locale: OpenGraphObjectLocale;
    /**
     * The location inherited from Place
     */
    location: Location;
    /**
     * The action ID that created this object
     */
    post_action_id: string;
    /**
     * The Facebook ID of a user that can be followed
     */
    profile_id: OpenGraphObjectProfile;
    /**
     * Any restrictions that are placed on this object
     */
    restrictions: OpenGraphObjectRestrictions;
    /**
     * An array of URLs of related resources
     */
    see_also: string[];
    /**
     * The name of the web site upon which the object resides
     */
    site_name: string;
    /**
     * The title of the object as it should appear in the graph
     */
    title: string;
    /**
     * The type of the object
     */
    type: string;
    /**
     * The last time the object was updated
     */
    updated_time: string;
    /**
     * A list of video URLs
     */
    video: OpenGraphObjectVideo[];
}

interface OpenGraphObjectProfile {
    /**
     * The ID of the OG Object
     */
    id: string;
    /**
     * The image of the OG Object
     */
    image: string;
    /**
     * The Name of the OG Object
     */
    name: string;
    /**
     * The title of the object
     */
    title: string;
    /**
     * The type of the object
     */
    type: string;
    /**
     * The permalink to the OG Object
     */
    url: string;
}

interface OpenGraphObjectAudio {
    /**
     * SSL link to the audio
     */
    secure_url: string;
    /**
     * The og:audio:type property sepecified for the audio
     */
    type: string;
    /**
     * Link to the audio
     */
    url: string;
}

interface OpenGraphObjectVideo {
    /**
     * Height in pixels of the image
     */
    height: number;
    /**
     * Secure permalink to the object
     */
    secure_url: string;
    /**
     * Type of the object
     */
    type: string;
    /**
     * Permalink to the object
     */
    url: string;
    /**
     * Width in pixels of the image
     */
    width: number;
}

interface OpenGraphObjectLocale {
    /**
     * List of alternate representations of this locale
     */
    alternate: string[];
    /**
     * The String representation of this locale
     */
    locale: string;
}

interface OpenGraphObjectRestrictions {
    /**
     * Age restrictions for the OG Object
     */
    age: string;
    /**
     * Content restrictions for the OG Object
     */
    content: string[];
    /**
     * Country restrictions for the OG Object
     */
    country: OpenGraphObjectCountry;
}

interface OpenGraphObjectCountry {
    /**
     * Countries in which this OG Object is allowe
     */
    allowed: string[];
    /**
     * Countries in which this OG Object is disallowed
     */
    disallowed: string[];
}

interface Engagement {
    /**
     * Number of people who like this
     */
    count: number;
    /**
     * Abbreviated string representation of count
     */
    count_string: string;
    /**
     * Abbreviated string representation of count if the viewer likes the object
     */
    count_string_with_like: string;
    /**
     * Abbreviated string representation of count if the viewer does not like the object
     */
    count_string_without_like: string;
    /**
     * Text that the like button would currently display
     */
    social_sentence: string;
    /**
     * Text that the like button would display if the viewer likes the object
     */
    social_sentence_with_like: string;
    /**
     * Text that the like button would display if the viewer does not like the object
     */
    social_sentence_without_like: string;
}

interface Location {
    /**
     * City
     */
    city: string;
    /**
     * City ID. Any city identified is also a city you can use for targeting ads.
     */
    city_id: number;
    /**
     * Country
     */
    country: string;
    /**
     * Country code
     */
    country_code: string;
    /**
     * Latitude
     */
    latitude: number;
    /**
     * The parent location if this location is located within another location
     */
    located_in: string;
    /**
     * Longitude
     */
    longitude: number;
    /**
     * Name
     */
    name: string;
    /**
     * Region
     */
    region: string;
    /**
     * Region ID. Specifies a geographic region, such as California. An identified region is the same as one you can use to target ads.
     */
    region_id: number;
    /**
     * State
     */
    state: string;
    /**
     * Street
     */
    street: string;
    /**
     * Zip code
     */
    zip: string;
}

export interface Application {
    /**
     * The app ID
     */
    id: string;
    /**
     * Rules of Auto Advanced Matching in FB SDKs
     */
    aam_rules: string;
    /**
     * The maximum number of Ad Spaces allowed for each Audience Network supported platform
     */
    an_ad_space_limit: number;
    /**
     * The platforms associated with the app in the Audience Network product. Not enforced, but when present, it can be used to provide the user with platform specific information for the app and its placements
     */
    an_platforms: ('IOS' | 'ANDROID' | 'MOBILE_WEB' | 'DESKTOP' | 'INSTANT_ARTICLES' | 'UNKNOWN')[];
    /**
     * Domains and subdomains this app can use
     */
    app_domains: string[];
    /**
     * Configuration for app events
     */
    app_events_config: unknown; // ApplicationAppEventsConfig
    /**
     * Whether the app install is trackable or not
     */
    app_install_tracked: boolean;
    /**
     * App name
     */
    app_name: string;
    /**
     * List of app event bindings for iOS app
     */
    app_signals_binding_ios: unknown[]; // Binding[]
    /**
     * App type
     */
    app_type: number;
    /**
     * The URL of a special landing page that helps people who are using an app begin publishing Open Graph activity
     */
    auth_dialog_data_help_url: string;
    /**
     * One line description of an app that appears in the Login Dialog
     */
    auth_dialog_headline: string;
    /**
     * The text to explain why an app needs additional permissions.  This appears in the Login Dialog
     */
    auth_dialog_perms_explanation: string;
    /**
     * The default privacy setting selected for Open Graph activities in the Auth Dialog
     */
    auth_referral_default_activity_privacy: string;
    /**
     * Indicates whether Authenticated Referrals are enabled
     */
    auth_referral_enabled: number;
    /**
     * Extended permissions that a person can choose to grant when Authenticated Referrals are enabled
     */
    auth_referral_extended_perms: string[];
    /**
     * Basic friends permissions that a user must grant when Authenticated Referrals are enabled
     */
    auth_referral_friend_perms: string[];
    /**
     * The format that an app receives for the authentication token from the Login Dialog
     */
    auth_referral_response_type: string;
    /**
     * Basic user permissions that a user must grant when Authenticated Referrals are enabled
     */
    auth_referral_user_perms: string[];
    /**
     * Indicates whether the app uses fluid or settable height values for Canvas
     */
    canvas_fluid_height: boolean;
    /**
     * Indicates whether the app uses fluid or fixed width values for Canvas
     */
    canvas_fluid_width: number;
    /**
     * The non-secure URL from which Canvas app content is loaded
     */
    canvas_url: string;
    /**
     * The category of the app
     */
    category: string;
    /**
     * Config data for the client
     */
    client_config: { [key: string]: unknown };
    /**
     * The company the app belongs to
     */
    company: string;
    /**
     * True if the app has configured Single Sign On on iOS
     */
    configured_ios_sso: boolean;
    /**
     * Email address listed for people using the app to contact developers
     */
    contact_email: string;
    /**
     * Timestamp that indicates when the app was created
     */
    created_time: string;
    /**
     * User ID of the creator of this app
     */
    creator_uid: string;
    /**
     * The number of daily active users the app has
     */
    daily_active_users: string;
    /**
     * Ranking of this app vs other apps comparing daily active users
     */
    daily_active_users_rank: number;
    /**
     * URL that is pinged whenever a person removes the app
     */
    deauth_callback_url: string;
    /**
     * The platform that should be used to share content
     */
    default_share_mode: string;
    /**
     * The description of the app, as provided by the developer
     */
    description: string;
    /**
     * The ID for the corresponding audience network financial entity.
     */
    financial_id: string;
    /**
     * Webspace created with one of our hosting partners for this app
     */
    hosting_url: string;
    /**
     * The URL of this app's icon
     */
    icon_url: string;
    /**
     * Bundle ID of the associated iOS app
     */
    ios_bundle_id: string[];
    /**
     * Whether to support the native proxy login flow
     */
    ios_supports_native_proxy_auth_flow: boolean;
    /**
     * Whether to support the iOS integrated Login Dialog
     */
    ios_supports_system_auth: boolean;
    /**
     * ID of the app in the iPad App Store
     */
    ipad_app_store_id: string;
    /**
     * ID of the app in the iPhone App Store
     */
    iphone_app_store_id: string;
    /**
     * App latest sdk version
     */
    latest_sdk_version: unknown; // ApplicationSDKInfo
    /**
     * A link to the app on Facebook
     */
    link: string;
    /**
     * To use for logging purposes
     */
    logging_token: string;
    /**
     * The URL of the app's logo
     */
    logo_url: string;
    /**
     * Status of migrations for this app
     */
    migrations: { [key: string]: boolean };
    /**
     * Mobile URL of the app section on a person's profile
     */
    mobile_profile_section_url: string;
    /**
     * URL to which Mobile users will be directed when using the app
     */
    mobile_web_url: string;
    /**
     * The number of monthly active users the app has
     */
    monthly_active_users: string;
    /**
     * Ranking of this app vs other apps comparing monthly active users
     */
    monthly_active_users_rank: number;
    /**
     * The name of the app
     */
    name: string;
    /**
     * The string appended to `apps.facebook.com/` to navigate to the app's canvas page
     */
    namespace: string;
    /**
     * Mobile store URLs for the app
     */
    object_store_urls: ApplicationObjectStoreURLs;
    /**
     * The title of the app when used in a Page Tab
     */
    page_tab_default_name: string;
    /**
     * The non-secure URL from which Page Tab app content is loaded
     */
    page_tab_url: string;
    /**
     * The URL of the app photo
     */
    photo_url: string;
    /**
     * The URL that links to a Privacy Policy for the app
     */
    privacy_policy_url: string;
    /**
     * URL of the app section on a user's profile for the desktop site
     */
    profile_section_url: string;
    /**
     * The monetization property which owns this app
     */
    property_id: string;
    /**
     * List of real time hashed device
     */
    real_time_mode_devices: string[];
    /**
     * Demographic restrictions for the app
     */
    restrictions: ApplicationRestrictionInfo;
    /**
     * Params used to filter out restrictive data
     */
    restrictive_data_filter_params: string;
    /**
     * The secure URL from which Canvas app content is loaded
     */
    secure_canvas_url: string;
    /**
     * The secure URL from which Page Tab app content is loaded
     */
    secure_page_tab_url: string;
    /**
     * App requests must originate from this comma-separated list of IP addresses
     */
    server_ip_whitelist: string;
    /**
     * Indicates whether app usage stories show up in the Ticker or News Feed
     */
    social_discovery: number;
    /**
     * The subcategory the app can be found under
     */
    subcategory: string;
    /**
     * Settings for suggested events
     */
    suggested_events_setting: string;
    /**
     * All the platform the app supports
     */
    supported_platforms: (
        | 'WEB'
        | 'CANVAS'
        | 'MOBILE_WEB'
        | 'IPHONE'
        | 'IPAD'
        | 'ANDROID'
        | 'WINDOWS'
        | 'AMAZON'
        | 'SUPPLEMENTARY_IMAGES'
        | 'GAMEROOM'
        | 'INSTANT_GAME'
        | 'OCULUS'
        | 'SAMSUNG'
    )[];
    /**
     * URL to Terms of Service that appears in the Login Dialog
     */
    terms_of_service_url: string;
    /**
     * URL scheme suffix
     */
    url_scheme_suffix: string;
    /**
     * Main contact email for this app where people can receive support
     */
    user_support_email: string;
    /**
     * URL shown in the Canvas footer that people can visit to get support for the app
     */
    user_support_url: string;
    /**
     * URL of a website that integrates with this app
     */
    website_url: string;
    /**
     * The number of weekly active users the app has
     */
    weekly_active_users: string;
}

export interface ApplicationObjectStoreURLs {
    /**
     * URL for the app in the Amazon App store
     */
    amazon_app_store: string;
    /**
     * URL for the Facebook Canvas app
     */
    fb_canvas: string;
    /**
     * URL for the app in Facebook Gameroom
     */
    fb_gameroom: string;
    /**
     * URL for the app in the Google Play store
     */
    google_play: string;
    /**
     * URL for the Instant Game
     */
    instant_game: string;
    /**
     * URL for the app in the iTunes store
     */
    itunes: string;
    /**
     * URL for the iPad app in the iTunes store
     */
    itunes_ipad: string;
    /**
     * URL for the app in the Windows 10 store
     */
    windows_10_store: string;
}

export interface ApplicationRestrictionInfo {
    /**
     * Age restrictions for the app. Can be one of the following values: 13+, 16+, 17+, 18+, 19+, or 21+
     */
    age: '13+' | '16+' | '17+' | '18+' | '19+' | '21+';
    /**
     * Age restrictions by location
     */
    age_distribution: string;
    /**
     * Location restrictions for the app. Facebook uses [2 letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    location: string;
    /**
     * Custom category restrictions for the app. Currently can only be set to `alcohol`.
     */
    type: 'alcohol';
}

export interface AsyncSession {
    /**
     * The id of the object
     */
    id: string;
    /**
     * The app that called the async job
     */
    app: Application;
    /**
     * Time the job was completed
     */
    complete_time: string;
    /**
     * The error code if the async job fails
     */
    error_code: number;
    /**
     * The exception thrown if the async job fails
     */
    exception: string;
    /**
     * Represents the method of this HTTP request
     */
    method: string; // enum
    /**
     * The name of the specific job within the batch call
     */
    name: string;
    /**
     * The ID of a page that allowed an app to call a job
     */
    page: Page;
    /**
     * The percentage of the async job that has been completed
     */
    percent_completed: number;
    /**
     * Platform Version as specified by api call
     */
    platform_version: string; // enum
    /**
     * The result as returned by the async job
     */
    result: string;
    /**
     * Time the job was started
     */
    start_time: string;
    /**
     * Status of the current job. Possible return values: NOT_STARTED, IN_PROGRESS, FAILED, COMPLETED
     */
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'FAILED' | 'COMPLETED';
    /**
     * The full url for this async job
     */
    uri: string;
    /**
     * The user that called the async job
     */
    user: User;
}
export interface CPASAdvertiserPartnershipRecommendation {
    /**
     * ID of the recommendation object.
     */
    id: string;
    /**
     * Recommended advertiser for this partnership.
     */
    advertiser_business_id: string;
    /**
     * Recommended brand for this partnership.
     */
    brand_business_id: string;
    /**
     * Brands that can be advertised for in this partnership.
     */
    brands: string[];
    /**
     * Countries in which the partnership could run ads.
     */
    countries: string[];
    /**
     * Recommended retailer for this partnership.
     */
    merchant_business_id: string;
    /**
     * Categories associated with the retailer's products.
     */
    merchant_categories: string[];
    /**
     * Current status of this recommendation based on actions taken on it.
     */
    status: string; // enum
    /**
     * Reason why this recommendation has its current status.
     */
    status_reason: string; // enum
}
export interface CPASCollaborationRequest {
    /**
     * ID for the collaboration request object.
     */
    id: string;
    /**
     * List of brands that the advertiser wants to work with the retailer on.
     */
    brands: string[];
    /**
     * E-mail provided by the sender business in the reach out form.
     */
    contact_email: string;
    /**
     * First name provided by the sender business in the reach out form.
     */
    contact_first_name: string;
    /**
     * Last name provided by the sender business in the reach out form.
     */
    contact_last_name: string;
    /**
     * Phone number provided by the sender business.
     */
    phone_number: string;
    /**
     * Business that is receiving the collaboration request.
     */
    receiver_business: Business;
    /**
     * Whether the person reaching out is representing a brand or agency.
     */
    requester_agency_or_brand: string; // enum
    /**
     * Used if the sender business is representing other businesses through the request. This field includes the business or businesses represented.
     */
    sender_client_business: Business;
    /**
     * The status of the request handled by the receiver.
     */
    status: string; // enum
}
export interface CTCertDomain {
    /**
     * The id of the object.
     */
    id: string;
    /**
     * Domain extracted from X509 TLS Certificates.
     */
    domain: string;
}

export interface Comment {
    /**
     * The comment ID
     */
    id: string; // Comment ID
    /**
     * For a comment made by a page, the page admin who wrote it. A page access token is required to access this field.
     */
    admin_creator: User;
    /**
     * The app this comment was published by
     */
    application: Application;
    /**
     * Link or photo attached to the comment
     */
    attachment: StoryAttachment;
    /**
     * Whether the viewer can reply to this comment
     */
    can_comment: boolean;
    /**
     * Whether the viewer can hide this comment from everyone except the comment author and the author's friends. This can only be true for comments on Page posts
     */
    can_hide: boolean;
    /**
     * Whether the viewer can like this comment
     */
    can_like: boolean;
    /**
     * Whether the viewer can remove this comment
     */
    can_remove: boolean;
    /**
     * Whether the page viewer can send a private reply to this comment
     */
    can_reply_privately: boolean;
    /**
     * Number of replies to this comment
     */
    comment_count: number;
    /**
     * The time this comment was made
     */
    created_time: string;
    /**
     * The profile that made this comment
     */
    from: User | Page;
    /**
     * Whether this comment is hidden from everyone except the comment author and the author's friends
     */
    is_hidden: boolean;
    /**
     * Whether the comment is a private comment
     */
    is_private: boolean;
    /**
     * Number of times this comment was liked
     */
    like_count: number;
    /**
     * Time the comment was made on a live video
     */
    live_broadcast_timestamp: number;
    /**
     * The comment text
     */
    message: string;
    /**
     * Profiles tagged in mentions in the message
     */
    message_tags: EntityAtTextRange[];
    /**
     * The object the comment is on
     */
    object: unknown;
    /**
     * For comment replies, the comment this is a reply to
     */
    parent: Comment;
    /**
     * The permanent static URL to the comment
     */
    permalink_url: string;
    /**
     * If private reply was sent to this comment, gets private conversation between the page and author of the comment that was started by private reply
     */
    private_reply_conversation: Conversation;
    /**
     * Whether the viewer has liked this comment
     */
    user_likes: boolean;
}

interface StoryAttachment {
    /**
     * Text accompanying the attachment
     */
    description: string;
    /**
     * Profiles tagged in the text accompanying the attachment
     */
    description_tags: EntityAtTextRange[];
    /**
     * Media object (photo, link etc.) contained in the attachment
     */
    media: StorageAttachmentMedia;
    /**
     * Type of the media such as (photo, video, link etc)
     */
    media_type: string;
    /**
     * Object that the attachment links to
     */
    target: StoryAttachmentTarget;
    /**
     * Title of the attachment
     */
    title: string;
    /**
     * Type of the attachment. Possible types include: `album`, `animated_image_autoplay`, `checkin`, `cover_photo`, `event`, `link`, `multiple`, `music`, `note`, `offer`, `photo`, `profile_media`, `status`, `video`, `video_autoplay`, etc.
     */
    type:
        | 'album'
        | 'animated_image_autoplay'
        | 'checkin'
        | 'cover_photo'
        | 'event'
        | 'link'
        | 'multiple'
        | 'music'
        | 'note'
        | 'offer'
        | 'photo'
        | 'profile_media'
        | 'status'
        | 'video'
        | 'video_autoplay';
    /**
     * Unshimmed URL of the attachment
     */
    unshimmed_url: string;
    /**
     * URL of the attachment
     */
    url: string;
}

interface EntityAtTextRange {
    /**
     * ID of the profile
     */
    id: string;
    /**
     * Number of characters in the text indicating the object
     */
    length: string;
    /**
     * Name of the object
     */
    name: string;
    /**
     * The object itself
     */
    object: Profile;
    /**
     * The character offset in the source text of the text indicating the object
     */
    offset: string;
    /**
     * Type of the object
     */
    type: 'user' | 'page' | 'event' | 'group' | 'application';
}

interface StorageAttachmentMedia {
    /**
     * Image
     */
    image: unknown; // ImageSource
    /**
     * Source
     */
    source: string;
}

interface StoryAttachmentTarget {
    /**
     * ID
     */
    id: string;
    /**
     * Unshimmed URL
     */
    unshimmed_url: string;
    /**
     * URL
     */
    url: string;
}

export interface CommerceMerchantSettings {
    /**
     * The Braintree Merchant ID (for BigCommerce)
     */
    braintree_merchant_id: string;
    /**
     * Checkout Message of Commerce Merchant Settings
     */
    checkout_message: string;
    /**
     * Contact email of Commerce Merchant Settings
     */
    contact_email: string;
    /**
     * Shop's CTA (ie. onsite checkout, offsite, or contact-merchant)
     */
    cta: 'onsite checkout' | 'offsite' | 'contact-merchant' | string; // enum
    /**
     * Ignore checkout_urls for offsite links forthis merchant, if they exist on products.
     */
    disable_checkout_urls: boolean;
    /**
     * Business display name
     */
    display_name: string;
    /**
     * Merchant Identifier on External Partner Platforms (i.e. Shopify)
     */
    external_merchant_id: string;
    /**
     * ID of the Commerce Merchant Settings
     */
    id: string;
    /**
     * Facebook channel settings
     */
    facebook_channel: unknown; // CommerceFacebookChannel
    /**
     * Whether or not this merchant has discount code
     */
    has_discount_code: boolean;
    /**
     * This merchant selected onsite checkout during setup
     */
    has_onsite_intent: boolean;
    /**
     * Instagram channel settings
     */
    instagram_channel: unknown; // CommerceInstagramChannel
    /**
     * Place to send alert emails for the merchant
     */
    merchant_alert_email: string;
    /**
     * Profile of the merchant selling products
     */
    merchant_page: Profile;
    /**
     * Current status of the merchant
     */
    merchant_status: string; // enum
    /**
     * Commerce Merchant Settings Info for the new commerce platform API
     */
    onsite_commerce_merchant: unknown; // CommerceMerchantSettingsOnsiteCommerceMerchant
    /**
     * Payment Provider for Commerce Merchant Settings
     */
    payment_provider: string; // enum
    /**
     * Map from locale to merchant privacy policy url. The locale follows the format of concatenating ISO language and country code with an underscore. For instance, en_US represents U.S. English.
     */
    privacy_url_by_locale: { [key: string]: string };
    /**
     * Descriptive rejection messages corresponding to the given rejection reasons, if applicable
     */
    review_rejection_messages: string[];
    /**
     * Reasons the merchant was rejected on review (for onboarding requests or performance metrics), if applicable
     */
    review_rejection_reasons: string[]; // enum[]
    /**
     * The internal review status of the merchant
     */
    review_status: string; // enum
    /**
     * Credit card types supported by the merchant
     */
    supported_card_types: string[]; // enum[]
    /**
     * Terms of Commerce Merchant Settings
     */
    terms: string;
    /**
     * Map from locale to merchant terms url. The locale follows the format of concatenating ISO language and country code with an underscore. For instance, en_US represents U.S. English.
     */
    terms_url_by_locale: { [key: string]: string };
    /**
     * WhatsApp Channel Settings
     */
    whatsapp_channel: unknown; // CommerceWhatsAppChannel
}

export interface Destination {
    /**
     * Id
     */
    id: string;
    /**
     * Address
     */
    address: string;
    /**
     * App links for native platforms, e.g. Android, iOS and Windows Phone
     */
    applinks: CatalogItemAppLinks;
    /**
     * Currency
     */
    currency: string;
    /**
     * Description
     */
    description: string;
    /**
     * DestinationId
     */
    destination_id: string;
    /**
     * Images
     */
    images: string[];
    /**
     * Name
     */
    name: string;
    /**
     * Price
     */
    price: string;
    /**
     * PriceChange
     */
    price_change: string;
    /**
     * SanitizedImages
     */
    sanitized_images: string[];
    /**
     * Types
     */
    types: string[];
    /**
     * Url
     */
    url: string;
}

interface CatalogItemAppLinks {
    /**
     * App links to Android apps
     */
    android: AndroidAppLink[];
    /**
     * App links to apps supported across all iOS devices
     */
    ios: IosAppLink[];
    /**
     * App links to iPad apps
     */
    ipad: IosAppLink[];
    /**
     * App links to iPhone apps
     */
    iphone: IosAppLink[];
    /**
     * The web equivalent of an app link. An empty value indicates this is a mobile-only object.
     */
    web: WebAppLink;
    /**
     * App links to Windows apps
     */
    windows: WindowsAppLink[];
    /**
     * App links to Windows Phone apps
     */
    windows_phone: WindowsPhoneAppLink[];
    /**
     * App links to Windows and Windows Phone apps
     */
    windows_universal: WindowsAppLink[];
}

interface AndroidAppLink {
    /**
     * The native apps name in the Android store.
     */
    app_name: string;
    /**
     * The fully classified class name of the app for intent generation.
     */
    class: string;
    /**
     * The fully classified package name of the app for intent generation.
     */
    package: string;
    /**
     * The native Android URL that will be navigated to.
     */
    url: string;
}

interface IosAppLink {
    /**
     * The native apps name in the iTunes store.
     */
    app_name: string;
    /**
     * The native apps ID in the iTunes store.
     */
    app_store_id: string;
    /**
     * The native iOS URL that will be navigated to.
     */
    url: string;
}

interface WebAppLink {
    /**
     * Describes if the web link should be used if the native links don't work
     */
    should_fallback: boolean;
    /**
     * The web equivalent for an app link
     */
    url: string;
}

interface WindowsAppLink {
    /**
     * The native apps id in the Windows store.
     */
    app_id: string;
    /**
     * The native apps name in the Windows store.
     */
    app_name: string;
    /**
     * The Package Family Name of the app.
     */
    package_family_name: string;
    /**
     * The native Windows URL that will be navigated to.
     */
    url: string;
}

interface WindowsPhoneAppLink {
    /**
     * The native apps id in the Windows Phone store.
     */
    app_id: string;
    /**
     * The native apps name in the Windows Phone store.
     */
    app_name: string;
    /**
     * The native Windows Phone URL that will be navigated to.
     */
    url: string;
}

export interface Doc {
    /**
     * The document ID
     */
    id: string;
    /**
     * Boolean, can document be deleted by viewer
     */
    can_delete: boolean;
    /**
     * Boolean, can document be edited by viewer
     */
    can_edit: boolean;
    /**
     * Url link for cover photo of group doc
     */
    cover_photo_url: string;
    /**
     * Timestamp of when the document was created
     */
    created_time: string;
    /**
     * A list of urls that were embedded into the note
     */
    embedded_urls: string[];
    /**
     * Author of the document
     */
    from: User;
    /**
     * Image file for document icon
     */
    icon: string;
    /**
     * URL for the document
     */
    link: string;
    /**
     * Content of the document
     */
    message: string;
    /**
     * Current revision ID
     */
    revision: string;
    /**
     * Title of the document
     */
    subject: string;
    /**
     * Last updated timestamp
     */
    updated_time: string;
}

export interface Event {
    /**
     * The event ID
     */
    id: string;
    /**
     * Number of people attending the event
     */
    attending_count: number;
    /**
     * Can guests invite friends. Requires an access token of an Admin of the Event
     */
    can_guests_invite: boolean;
    /**
     * The category of the event
     */
    category:
        | 'ART_EVENT'
        | 'BOOK_EVENT'
        | 'MOVIE_EVENT'
        | 'FUNDRAISER'
        | 'VOLUNTEERING'
        | 'FAMILY_EVENT'
        | 'FESTIVAL_EVENT'
        | 'NEIGHBORHOOD'
        | 'RELIGIOUS_EVENT'
        | 'SHOPPING'
        | 'COMEDY_EVENT'
        | 'MUSIC_EVENT'
        | 'DANCE_EVENT'
        | 'NIGHTLIFE'
        | 'THEATER_EVENT'
        | 'DINING_EVENT'
        | 'FOOD_TASTING'
        | 'CONFERENCE_EVENT'
        | 'MEETUP'
        | 'CLASS_EVENT'
        | 'LECTURE'
        | 'WORKSHOP'
        | 'FITNESS'
        | 'SPORTS_EVENT'
        | 'OTHER';
    /**
     * Cover picture
     */
    cover: CoverPhoto;
    /**
     * Number of people who declined the event
     */
    declined_count: number;
    /**
     * Long-form description
     */
    description: string;
    /**
     * Is discount code enabled for this event
     */
    discount_code_enabled: boolean;
    /**
     * End time, if one has been set
     */
    end_time: string;
    /**
     * Array of times of a multi-instance event
     */
    event_times: ChildEvent[];
    /**
     * Can see guest list. Requires an access token of an Admin of the Event
     */
    guest_list_enabled: boolean;
    /**
     * Number of people interested in the event
     */
    interested_count: number;
    /**
     * Whether or not the event has been marked as canceled
     */
    is_canceled: boolean;
    /**
     * Whether the event is in draft mode or published. Requires an access token of an Admin of the Event
     */
    is_draft: boolean;
    /**
     * Whether the event is online or not. Required to pass the 'address' (city name) parameter for online events.
     */
    is_online: boolean;
    /**
     * Whether the event is created by page or not
     */
    is_page_owned: boolean;
    /**
     * Number of people who maybe going to the event
     */
    maybe_count: number;
    /**
     * Event name
     */
    name: string;
    /**
     * Number of people who did not reply to the event
     */
    noreply_count: number;
    /**
     * Type of online event - Live, Link or Other
     */
    online_event_format: 'messenger_room' | 'third_party' | 'fb_live' | 'other' | 'none';
    /**
     * Third party streaming url associated with Link events
     */
    online_event_third_party_url: string;
    /**
     * The profile that created the event
     */
    owner: unknown;
    /**
     * The group the event belongs to
     */
    parent_group: Group;
    /**
     * Event Place information
     */
    place: Place;
    /**
     * Time when event is scheduled to be published
     */
    scheduled_publish_time: string;
    /**
     * Start time
     */
    start_time: string;
    /**
     * The link users can visit to buy a ticket to this event
     */
    ticket_uri: string;
    /**
     * Time when tickets go on sale
     */
    ticket_uri_start_sales_time: string;
    /**
     * URI to seller's privacy policy for ticket purchases
     */
    ticketing_privacy_uri: string;
    /**
     * URI to seller's terms of service for ticket purchases
     */
    ticketing_terms_uri: string;
    /**
     * Timezone
     */
    timezone: string; // enum
    /**
     * The type of the event
     */
    type: 'private' | 'public' | 'group' | 'community' | 'friends';
    /**
     * Last update time (ISO 8601 formatted)
     */
    updated_time: string;
}

interface ChildEvent {
    end_time: string;
    id: string;
    start_time: string;
    ticket_uri: string;
}

interface CoverPhoto {
    /**
     * The ID of the cover photo
     */
    id: string;
    /**
     * Deprecated. Please use the `id` field instead
     * @deprecated
     */
    cover_id: string;
    /**
     * When greater than 0% but less than 100%, the cover photo overflows horizontally. The value represents the horizontal manual offset (the amount the user dragged the photo horizontally to show the part of interest) as a percentage of the offset necessary to make the photo fit the space.
     */
    offset_x: number;
    /**
     * When greater than 0% but less than 100%, the cover photo overflows vertically. The value represents the vertical manual offset (the amount the user dragged the photo vertically to show the part of interest) as a percentage of the offset necessary to make the photo fit the space.
     */
    offset_y: number;
    /**
     * Direct URL for the person's cover photo image
     */
    source: string;
}

export interface Flight {
    /**
     * Id
     */
    id: string;
    /**
     * App links for native platforms, e.g. Android, iOS and Windows Phone
     */
    applinks: CatalogItemAppLinks;
    /**
     * Currency
     */
    currency: string;
    /**
     * Description
     */
    description: string;
    /**
     * DestinationAirport
     */
    destination_airport: string;
    /**
     * DestinationCity
     */
    destination_city: string;
    /**
     * FlightId
     */
    flight_id: string;
    /**
     * Images
     */
    images: string[];
    /**
     * OnewayCurrency
     */
    oneway_currency: string;
    /**
     * OnewayPrice
     */
    oneway_price: string;
    /**
     * OriginAirport
     */
    origin_airport: string;
    /**
     * OriginCity
     */
    origin_city: string;
    /**
     * Price
     */
    price: string;
    /**
     * SanitizedImages
     */
    sanitized_images: string[];
    /**
     * Url
     */
    url: string;
}

export interface Group {
    /**
     * The Group ID
     */
    id: string;
    /**
     * Whether the Group allows members outside of the company
     */
    allows_guest_members: boolean;
    /**
     * Whether the Group is archived
     */
    archived: boolean;
    /**
     * The cover photo of the Group
     */
    cover: CoverPhoto;
    /**
     * The time this Group was originally started
     */
    created_time: string;
    /**
     * A brief description of the Group
     */
    description: string;
    /**
     * The email address to upload content to the Group. Only current members of the Group can use this
     */
    email: string;
    /**
     * The URL for the Group's icon
     */
    icon: string;
    /**
     * Application install info for the Workplace community
     */
    install: unknown; // WorkAppInstall
    /**
     * Whether this Workplace group is a community, i.e., a group of groups
     */
    is_community: boolean;
    /**
     * Whether this Group is default Workplace Group
     */
    is_workplace_default: boolean;
    /**
     * Permissions to join the Group
     */
    join_setting: string; // enum
    /**
     * The Group's website
     */
    link: string;
    /**
     * Number of members of this Group
     */
    member_count: number;
    /**
     * Number of people requesting to join the Group. Requires an access token of an Admin of the Group. Only returned if the number of requests is greater than 50
     */
    member_request_count: number;
    /**
     * The name of the Group
     */
    name: string;
    /**
     * The parent Group of this Group, if it exists
     */
    parent: Group | Page | Application;
    /**
     * The permissions user has granted for this app in this Group
     */
    permissions: string[];
    /**
     * Permissions to post to the Group
     */
    post_permissions: string; // enum
    /**
     * Whether posts to the Group require Administrator approval
     */
    post_requires_admin_approval: boolean;
    /**
     * The privacy setting of the Group
     */
    privacy: string;
    /**
     * The intended purpose for this Group
     */
    purpose: string; // enum
    /**
     * Company subdomain
     */
    subdomain: string;
    /**
     * The last time the Group was updated (this includes changes in the Group's properties and changes in posts and comments if user can see them)
     */
    updated_time: string;
    /**
     * The location for the Group
     */
    venue: Location;
}

export interface GroupMessage {
    /**
     * actions
     */
    actions: unknown[];
    /**
     * admin_creator
     */
    admin_creator: BusinessUser | User | Application;
    /**
     * allowed_advertising_objectives
     */
    allowed_advertising_objectives: string[];
    /**
     * application
     */
    application: Application;
    /**
     * backdated_time
     */
    backdated_time: string;
    /**
     * call_to_action
     */
    call_to_action: {
        type: unknown;
        value: unknown;
    };
    /**
     * can_reply_privately
     */
    can_reply_privately: boolean;
    /**
     * caption
     */
    caption: string;
    /**
     * child_attachments
     */
    child_attachments: unknown[];
    /**
     * id
     */
    id: string; // Post ID
    /**
     * comments_mirroring_domain
     */
    comments_mirroring_domain: string;
    /**
     * coordinates
     */
    coordinates: {
        checkin_string: unknown;
        author_uid: unknown;
        page_string: unknown;
        target_string: unknown;
        target_href: unknown;
        coords: unknown;
        tagged_uids: unknown;
        timestamp: unknown;
        message: unknown;
        target_type: unknown;
    };
    /**
     * created_time
     */
    created_time: string;
    /**
     * description
     */
    description: string;
    /**
     * event
     */
    event: Event;
    /**
     * expanded_height
     */
    expanded_height: number;
    /**
     * expanded_width
     */
    expanded_width: number;
    /**
     * feed_targeting
     */
    feed_targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        genders: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        interested_in: unknown;
        user_adclusters: unknown;
        locales: unknown;
        countries: unknown;
        geo_locations: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        industries: unknown;
        politics: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        fan_of: unknown;
        relevant_until_ts: unknown;
    };
    /**
     * formatting
     */
    formatting: string; // enum
    /**
     * from
     */
    from: User | Page;
    /**
     * full_picture
     */
    full_picture: string;
    /**
     * height
     */
    height: number;
    /**
     * icon
     */
    icon: string;
    /**
     * instagram_eligibility
     */
    instagram_eligibility: 'eligible' | string; // enum
    /**
     * is_app_share
     */
    is_app_share: boolean;
    /**
     * is_eligible_for_promotion
     */
    is_eligible_for_promotion: boolean;
    /**
     * is_expired
     */
    is_expired: boolean;
    /**
     * is_hidden
     */
    is_hidden: boolean;
    /**
     * is_inline_created
     */
    is_inline_created: boolean;
    /**
     * is_instagram_eligible
     */
    is_instagram_eligible: boolean;
    /**
     * is_popular
     */
    is_popular: boolean;
    /**
     * is_published
     */
    is_published: boolean;
    /**
     * is_spherical
     */
    is_spherical: boolean;
    /**
     * link
     */
    link: string; // uri
    /**
     * message
     */
    message: string;
    /**
     * message_tags
     */
    message_tags: unknown[];
    /**
     * multi_share_end_card
     */
    multi_share_end_card: boolean;
    /**
     * multi_share_optimized
     */
    multi_share_optimized: boolean;
    /**
     * name
     */
    name: string;
    /**
     * object_id
     */
    object_id: string;
    /**
     * parent_id
     */
    parent_id: string; // Post ID
    /**
     * permalink_url
     */
    permalink_url: string; // uri
    /**
     * picture
     */
    picture: string;
    /**
     * place
     */
    place: Place;
    /**
     * privacy
     */
    privacy: Privacy;
    /**
     * promotable_id
     */
    promotable_id: string; // Post ID
    /**
     * promotion_status
     */
    promotion_status: string;
    /**
     * properties
     */
    properties: unknown[];
    /**
     * publishing_stats
     */
    publishing_stats: number;
    /**
     * scheduled_publish_time
     */
    scheduled_publish_time: number;
    /**
     * shares
     */
    shares: {
        count: unknown;
    };
    /**
     * source
     */
    source: string;
    /**
     * status_type
     */
    status_type: string;
    /**
     * story
     */
    story: string;
    /**
     * story_tags
     */
    story_tags: unknown[];
    /**
     * subscribed
     */
    subscribed: boolean;
    /**
     * target
     */
    target: Profile;
    /**
     * targeting
     */
    targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        zips: unknown;
        genders: unknown;
        college_networks: unknown;
        work_networks: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        college_majors: unknown;
        political_views: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        keywords: unknown;
        interested_in: unknown;
        user_clusters: unknown;
        user_clusters2: unknown;
        user_clusters3: unknown;
        user_adclusters: unknown;
        excluded_user_adclusters: unknown;
        custom_audiences: unknown;
        excluded_custom_audiences: unknown;
        locales: unknown;
        radius: unknown;
        connections: unknown;
        excluded_connections: unknown;
        friends_of_connections: unknown;
        countries: unknown;
        excluded_user_clusters: unknown;
        adgroup_string: unknown;
        user_event: unknown;
        qrt_versions: unknown;
        page_types: unknown;
        user_os: unknown;
        user_device: unknown;
        action_spec: unknown;
        action_spec_friend: unknown;
        action_spec_excluded: unknown;
        geo_locations: unknown;
        excluded_geo_locations: unknown;
        targeted_entities: unknown;
        conjunctive_user_adclusters: unknown;
        wireless_carrier: unknown;
        site_category: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        behaviors: unknown;
        travel_status: unknown;
        industries: unknown;
        politics: unknown;
        markets: unknown;
        income: unknown;
        net_worth: unknown;
        home_type: unknown;
        home_ownership: unknown;
        home_value: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        household_composition: unknown;
        moms: unknown;
        office_type: unknown;
        interest_clusters_expansion: unknown;
        dynamic_audience_ids: unknown;
        product_audience_specs: unknown;
        excluded_product_audience_specs: unknown;
        exclusions: unknown;
        flexible_spec: unknown;
        engagement_specs: unknown;
        excluded_engagement_specs: unknown;
    };
    /**
     * timeline_visibility
     */
    timeline_visibility: string;
    /**
     * translations
     */
    translations: { [key: string]: string };
    /**
     * type
     */
    type: string;
    /**
     * updated_time
     */
    updated_time: string;
    /**
     * via
     */
    via: User | Page;
    /**
     * video_buying_eligibility
     */
    video_buying_eligibility: string[]; // enum[]
    /**
     * width
     */
    width: number;
}

interface Privacy {
    /**
     * The IDs of the specific users or friend lists that can see the object (as a comma-separated string).
     */
    allow: unknown;
    /**
     * The IDs of the specific users or friend lists that cannot see the object (as a comma-separate string).
     */
    deny: unknown;
    /**
     * A description of the privacy settings. For custom settings, it can contain names of users, networks and friend lists.
     */
    description: string;
    /**
     * Which category of users can see the object. This field is only set when the 'value' field is CUSTOM.
     */
    friends: 'CUSTOM';
    /**
     * The ID of the network that can see the object, or 1 for all of the user's networks.
     */
    networks: string;
    /**
     * The privacy value for the object.
     */
    value: string; // enum
}

export interface ImageCopyright {
    /**
     * The id of the object
     */
    id: string;
    /**
     * Artist/Photographer related the reference asset, user providedNote that the "Creator" field is used for image agencies or partners.
     */
    artist: string;
    /**
     * The status of the copyright reference file. It is used to determine if the match should be skipped.
     */
    copyright_monitoring_status: string; // enum
    /**
     * Creation time provided by TAO Server
     */
    creation_time: string;
    /**
     * Creator of the reference asset, user provided
     */
    creator: string;
    /**
     * Custom Id for reference asset, user provided
     */
    custom_id: string;
    /**
     * Description for reference asset, user provided
     */
    description: string;
    /**
     * Filename for reference asset, user provided
     */
    filename: string;
    /**
     * The underlying image asset for the copyright
     */
    image: Photo;
    /**
     * The number of matches for this copyright that are displayed in Rights Manager
     */
    matches_count: number;
    /**
     * Date the reference asset was created, user provided
     */
    original_content_creation_date: string;
    /**
     * Countries of included or excluded ownership for the given image copyright
     */
    ownership_countries: VideoCopyrightGeoGate;
    /**
     * Tags for the reference asset
     */
    tags: string[];
    /**
     * The title of the copyright, generated from the reference asset
     */
    title: string;
    /**
     * Update time provided by TAO Server
     */
    update_time: string;
}

export interface VideoCopyrightGeoGate {
    excluded_countries: string[];
    included_countries: string[];
}

export interface LeadGenData {
    /**
     * The ID of the Lead Ad Form
     */
    id: string;
    /**
     * Include organic lead for this form
     */
    allow_organic_lead: boolean;
    /**
     * Flag to indicate whether non targeted viewers should be blocked from seeing the Lead Ad form
     */
    block_display_for_non_targeted_viewer: boolean;
    /**
     * The context card of this Lead Ad Form
     */
    context_card: LeadGenContextCard;
    /**
     * The time the LeadGenData was created
     */
    created_time: string;
    /**
     * Number of leads submitted for this form that have since expired
     */
    expired_leads_count: number;
    /**
     * The displayed label on the follow up action when the user completes the form
     */
    follow_up_action_text: string;
    /**
     * The URL that the `follow_up_action_text` will take them to on click
     */
    follow_up_action_url: string;
    /**
     * Flag to indicate whether the form will be optimized for quality
     */
    is_optimized_for_quality: boolean;
    /**
     * Total number of Leads for a given Form
     */
    leads_count: number;
    /**
     * The legal content of this Lead Ad Form
     */
    legal_content: LeadGenLegalContent;
    /**
     * The locale of contents in this lead gen ad
     */
    locale: string;
    /**
     * The name of LeadGen Ad Form name
     */
    name: string;
    /**
     * Total number of Organic Leads for a given Form
     */
    organic_leads_count: number;
    /**
     * The page that this form belongs to
     */
    page: Page;
    /**
     * The ID of the page that this form belongs to
     */
    page_id: string;
    /**
     * The URL to the advertiser's privacy policy
     */
    privacy_policy_url: string;
    /**
     * Custom headline for question page within a lead form
     */
    question_page_custom_headline: string;
    /**
     * The questions used in this form
     */
    questions: LeadGenQuestion[];
    /**
     * The status of this Lead Ad Form: active, deleted, etc
     */
    status: string;
    /**
     * Optional customized thank you page displayed post submission
     */
    thank_you_page: unknown; // LeadGenThankYouPage
    /**
     * Tracking parameters to include with this form's field data
     */
    tracking_parameters: { [key: string]: string };
}

interface LeadGenContextCard {
    button_text: string;
    /**
     * @deprecated Canvas ads are deprecated, so this field is likely no longer used. The node itself appears to be unused as well.
     */
    canvas: never; // Canvas
    canvas_jump_to_form_button_text: string;
    content: string[];
    cover_photo: Photo;
    format: string;
    id: string;
    style: string;
    title: string;
}

interface LeadGenLegalContent {
    custom_disclaimer: unknown;
    id: string;
    privacy_policy: unknown;
}

interface LeadGenQuestion {
    conditional_questions_choices: LeadGenConditionalQuestionsGroupChoices[];
    conditional_questions_group_id: string;
    dependent_conditional_questions: LeadGenConditionalQuestionsGroupQuestions[];
    id: string;
    inline_context: string;
    key: string;
    label: string;
    options: LeadGenQuestionOption[];
    type: string;
}

interface LeadGenQuestionOption {
    key: string;
    value: string;
}

interface LeadGenConditionalQuestionsGroupChoices {
    customized_token: string;
    next_question_choices: LeadGenConditionalQuestionsGroupChoices[];
    value: string;
    id: string;
}

interface LeadGenConditionalQuestionsGroupQuestions {
    field_key: string;
    input_type: string;
    name: string;
    id: string;
}

export interface Link {
    /**
     * The shared link idenftifier
     */
    id: string;
    /**
     * The caption
     */
    caption: string;
    /**
     * The time the link was created
     */
    created_time: string;
    /**
     * A summary of the link, as taken from the site's description og meta tag
     */
    description: string;
    /**
     * The entity that shared this link
     */
    from: User;
    /**
     * The icon representing this shared link
     */
    icon: string;
    /**
     * The URL of the link
     */
    link: string;
    /**
     * The text the author posted alongside the link
     */
    message: string;
    /**
     * Whether using backend recomendation to display
     */
    multi_share_optimized: boolean;
    /**
     * The title of the link, as taken from the site's title og meta tag
     */
    name: string;
    /**
     * The privacy settings
     */
    privacy: Privacy;
    /**
     * The unique identifier of the original link poster if this link was shared via another entity
     */
    via: unknown;
}
export interface LiveEncoder {
    /**
     * The id of the object
     */
    id: string;
    /**
     * The live encoder brand (eg: Wowza)
     */
    brand: string;
    /**
     * Creation time
     */
    creation_time: string;
    /**
     * The broadcast that is currently handled by the live encoder
     */
    current_broadcast: LiveVideo;
    /**
     * The ingest stream this encoder is currently streaming to
     */
    current_input_stream: LiveVideoInputStream;
    /**
     * The live encoder unique device ID used for the registration process
     */
    device_id: string;
    /**
     * Last time we received an heartbeat from the live encoder
     */
    last_heartbeat_time: string;
    /**
     * The live encoder model (eg: Wowza Streaming Engine)
     */
    model: string;
    /**
     * The live encoder name set by the manufacturer or the user to differentiate between multiple encoder from the same manufacturer
     */
    name: string;
    /**
     * The current status of this live encoder (eg: ready, register, preview, live...)
     */
    status: 'ready' | 'register' | 'preview' | 'live' | string; // enum
    /**
     * The live encoder version (eg: 4.0.1)
     */
    version: string;
}
export interface LiveVideo {
    /**
     * The time the video was initially published
     */
    broadcast_start_time: string;
    /**
     * The live video ID.
     */
    id: string;
    /**
     * The ad break configurations for clients implementing triggering an ad break ui. Contains ad break eligibility and constants to render the ui. In order to use this, the page hosting the broadcast needs to be whitelisted.
     */
    ad_break_config: LiveVideoAdBreakConfig;
    /**
     * Ad Break failure reason
     */
    ad_break_failure_reason: string; // enum
    /**
     * The copyright information for the live video
     */
    copyright: VideoCopyright;
    /**
     * The creation time of the live video
     */
    creation_time: string;
    /**
     * The dash ingest stream URL of the live video
     */
    dash_ingest_url: string;
    /**
     * Preview URL for dash player
     */
    dash_preview_url: string;
    /**
     * The description of the live video
     */
    description: string;
    /**
     * The embed html of the live video
     */
    embed_html: string;
    /**
     * The originator of the live video
     */
    from: User | Page;
    /**
     * Individual ingest streams.
     */
    ingest_streams: LiveVideoInputStream[];
    /**
     * Whether schedule live is in manual mode, in which live video will start manually instead of on schedled time
     */
    is_manual_mode: boolean;
    /**
     * Whether the live video is exclusively used for copyright monitoring
     */
    is_reference_only: boolean;
    /**
     * Live Encoders that will broadcast to this live video
     */
    live_encoders: LiveEncoder[];
    /**
     * The instant viewer count of the live video now
     */
    live_views: number;
    /**
     * A URL used in conjunction with Facebook Live Producer to show overlays for this broadcast. In order to use this, the page hosting the broadcast needs to be whitelisted.
     */
    overlay_url: string;
    /**
     * The permalink URL of this video on Facebook.
     */
    permalink_url: string;
    /**
     * Planned start time for a live video
     */
    planned_start_time: string;
    /**
     * Seconds left in the maximum possible duration for this live video
     */
    seconds_left: number;
    /**
     * The secure stream url of the live video. Check with your encoder whether this is supported before adapting
     */
    secure_stream_url: string;
    /**
     * The status of the LiveVideo.

A `LIVE_NOW` LiveVideo is one that will be published to the intended destination (Timeline, Group, Page, etc) upon receiving valid video data, or one that is already published and actively streaming.

An `UNPUBLISHED` LiveVideo is in preparation; it's not visible to other users, and it may be automatically deleted after several hours in this state.

A `SCHEDULED_UNPUBLISHED` LiveVideo is scheduled to go live at a future time.

A `SCHEDULED_LIVE` LiveVideo is one whose scheduled time has passed, yet the stream is not yet live. Either in the process of transitioning, or still waiting for a valid video stream.

(Consider using the `SCHEDULED` states to create a planned, future LiveVideo.)
     */
    status: 'LIVE_NOW' | 'UNPUBLISHED' | 'SCHEDULED_UNPUBLISHED' | 'SCHEDULED_LIVE';
    /**
     * The stream url of the live video
     */
    stream_url: string;
    /**
     * Targeting information for this live video
     */
    targeting: LiveVideoTargeting;
    /**
     * The title of the live video
     */
    title: string;
    /**
     * The inside video of the live video
     */
    video: Video;
}

export interface LiveVideoAdBreakConfig {
    default_ad_break_duration: number;
    failure_reason_polling_interval: number;
    first_break_eligible_secs: number;
    guide_url: string;
    is_eligible_to_onboard: boolean;
    is_enabled: boolean;
    onboarding_url: string;
    preparing_duration: number;
    time_between_ad_breaks_secs: number;
    viewer_count_threshold: number;
}

export interface LiveVideoTargeting {
    age_max: number;
    age_min: number;
    excluded_countries: string[];
    geo_locations: TargetingGeoLocation;
}

interface TargetingGeoLocation {
    cities: TargetingGeoLocationCity[];
    countries: string[];
    country_groups: string[];
    custom_locations: TargetingGeoLocationCustomLocation[];
    electoral_districts: TargetingGeoLocationElectoralDistrict[];
    geo_markets: TargetingGeoLocationMarket[];
    large_geo_areas: TargetingGeoLocationGeoEntities[];
    location_cluster_ids: TargetingGeoLocationLocationCluster[];
    location_expansion: TargetingGeoLocationLocationExpansion[];
    location_set_ids: string[];
    location_types: string[];
    medium_geo_areas: TargetingGeoLocationGeoEntities[];
    metro_areas: TargetingGeoLocationGeoEntities[];
    neighborhoods: TargetingGeoLocationGeoEntities[];
    places: TargetingGeoLocationPlace[];
    political_districts: TargetingGeoLocationPoliticalDistrict[];
    regions: TargetingGeoLocationRegion[];
    small_geo_areas: TargetingGeoLocationGeoEntities[];
    subcities: TargetingGeoLocationGeoEntities[];
    subneighborhoods: TargetingGeoLocationGeoEntities[];
    zips: TargetingGeoLocationZip[];
}

interface TargetingGeoLocationCity {
    country: string;
    distance_unit: string;
    key: string;
    name: string;
    radius: number;
    region: string;
    region_id: string;
}

interface TargetingGeoLocationCustomLocation {
    address_string: string;
    country: string;
    country_group: string;
    custom_type: string;
    distance_unit: string;
    key: string;
    latitude: number;
    longitude: number;
    max_population: number;
    min_population: number;
    name: string;
    primary_city_id: number;
    radius: number;
    region_id: number;
}

interface TargetingGeoLocationElectoralDistrict {
    country: string;
    electoral_district: string;
    key: string;
    name: string;
}

interface TargetingGeoLocationMarket {
    country: string;
    key: string;
    market_type: string;
    name: string;
}

interface TargetingGeoLocationGeoEntities {
    country: string;
    key: string;
    name: string;
    region: string;
    region_id: string;
}

interface TargetingGeoLocationLocationCluster {
    key: number;
}

interface TargetingGeoLocationLocationExpansion {
    allowed: boolean;
}

interface TargetingGeoLocationPlace {
    country: string;
    distance_unit: string;
    key: string;
    latitude: number;
    longitude: number;
    name: string;
    primary_city_id: number;
    radius: number;
    region_id: number;
}

interface TargetingGeoLocationPoliticalDistrict {
    country: string;
    key: string;
    name: string;
    political_district: string;
}

interface TargetingGeoLocationRegion {
    country: string;
    key: string;
    name: string;
}

interface TargetingGeoLocationZip {
    country: string;
    key: string;
    name: string;
    primary_city_id: number;
    region_id: number;
}

export interface LiveVideoInputStream {
    /**
     * The ID of the input stream
     */
    id: string;
    /**
     * The dash ingest stream URL of this stream
     */
    dash_ingest_url: string;
    /**
     * Preview URL for input to use with dash player
     */
    dash_preview_url: string;
    /**
     * Set to true if this is input is being served to viewers
     */
    is_master: boolean;
    /**
     * The live encoder broadcasting to this stream
     */
    live_encoder: LiveEncoder;
    /**
     * The RTMPS URL for this stream
     */
    secure_stream_url: string;
    /**
     * Parameters indicating the input stream health
     */
    stream_health: unknown; // LiveVideoStreamHealth
    /**
     * 0-indexed ID for this ingest stream
     */
    stream_id: string;
    /**
     * The ingest RTMP URL for this stream
     */
    stream_url: string;
}
export interface MailingAddress {
    /**
     * The mailing address ID
     */
    id: string;
    /**
     * Address city name
     */
    city: string;
    /**
     * Page representing the address city
     */
    city_page: Page;
    /**
     * Country of the address
     */
    country: string;
    /**
     * Postal code of the address
     */
    postal_code: string;
    /**
     * Region or state of the address
     */
    region: string;
    /**
     * Street address
     */
    street1: string;
    /**
     * Second part of the street address - apt, suite, etc
     */
    street2: string;
}
export interface MediaFingerprint {
    /**
     * Media fingerprint ID
     */
    id: string;
    /**
     * The length of the fingerprinted content, in seconds
     */
    duration_in_sec: number;
    /**
     * Media fingerprint content type
     */
    fingerprint_content_type: string; // enum
    /**
     * The metadata associated with the fingerprinted content
     */
    metadata: unknown; // FingerprintMetadata
    /**
     * The title of the fingerprinted content
     */
    title: string;
    /**
     * A unique code user can use to manage fingerprint. For example: International Standard Recording Code for songtracks. This is for your own use; Facebook will not use this data.
     */
    universal_content_id: string;
}

export interface NativeOffer {
    /**
     * The id of the native offer.
     */
    id: string;
    /**
     * Barcode image ID for in-store redemption.
     */
    barcode_photo: string;
    /**
     * Barcode image URI for in-store redemption.
     */
    barcode_photo_uri: string;
    /**
     * Barcode type for in-store redemption.
     */
    barcode_type: string;
    /**
     * Barcode value for in-store redemption.
     */
    barcode_value: string;
    /**
     * Additional primary text describing the native offer.
     */
    details: string;
    /**
     * Whether or not the location features, such as the map and nearby notification, are disabled.
     */
    disable_location: boolean;
    /**
     * A structured representation of each part of the deal.
     */
    discounts: NativeOfferDiscount[];
    /**
     * The time when the native offer expires, as a UNIX timestamp. After this time, the native offer will not be available for users to save.
     */
    expiration_time: string;
    /**
     * The code used to redeem the native offer in-store.
     */
    instore_code: string;
    /**
     * Where the offer may be redeemed. Valid values are `online`, `offline`, and `both`.
     */
    location_type: 'online' | 'offline' | 'both';
    /**
     * The maximum number of users who may save the native offer. A value of 0 means an unlimited number of saves are allowed.
     */
    max_save_count: number;
    /**
     * The code used to redeem the native offer online.
     */
    online_code: string;
    /**
     * The id of the page that owns the native offer.
     */
    page: Page;
    /**
     * The ID of Place Page Set which represents the locations where this in-store offer is valid for.
     */
    page_set_id: string;
    /**
     * The URL where the native offer may be redeemed.
     */
    redemption_link: string;
    /**
     * Number of users who have saved the native offer.
     */
    save_count: number;
    /**
     * Limitations, terms and conditions on the use of the native offer.
     */
    terms: string;
    /**
     * The title of the native offer
     */
    title: string;
    /**
     * Number of the unique codes/barcodes uploaded
     */
    total_unique_codes: string;
    /**
     * The fileId of the unique codes/barcodes file
     */
    unique_codes: string;
    /**
     * Code type of the unique codes/barcodes uploaded
     */
    unique_codes_file_code_type: string;
    /**
     * Name of the unique codes/barcodes uploaded
     */
    unique_codes_file_name: string;
    /**
     * The uploaded status of the unique codes/barcodes file
     */
    unique_codes_file_upload_status: string;
}

export interface NativeOfferDiscount {
    currency: string;
    override: string;
    text: string;
    type: string;
    value1: number;
    value2: number;
}

export interface OfflineConversionDataSet {
    /**
     * ID of the data set
     */
    id: string;
    /**
     * Business id of the owner of the data set
     */
    business: Business;
    /**
     * The configuration to use for uploads to this data set. Format determined by the method of upload (eg. UI or SDK)
     */
    config: string;
    /**
     * Time when dataset was created
     */
    creation_time: string;
    /**
     * The description given by the owner of this data set
     */
    description: string;
    /**
     * Number of duplicate entries for this data set
     */
    duplicate_entries: number;
    /**
     * Whether the data set is auto assigned and auto tracked for all accounts that the owner business owns
     */
    enable_auto_assign_to_accounts: boolean;
    /**
     * Event stats of this data set
     */
    event_stats: string;
    /**
     * Latest entry of this data set
     */
    event_time_max: number;
    /**
     * Earliest entry of this data set
     */
    event_time_min: number;
    /**
     * Whether the data set is restricted to MTA only
     */
    is_mta_use: boolean;
    /**
     * Whether the data set is restricted to Lift only
     */
    is_restricted_use: boolean;
    /**
     * Whether this data set is unavailable
     */
    is_unavailable: boolean;
    /**
     * The app that made the most recent upload
     */
    last_upload_app: string;
    /**
     * Time when the app that made the most recent upload last changed
     */
    last_upload_app_changed_time: number;
    /**
     * Approximate match rate percentage for the entries in this data set
     */
    match_rate_approx: number;
    /**
     * Number of matched entries of this data set
     */
    matched_entries: number;
    /**
     * The name given by the owner of this data set
     */
    name: string;
    /**
     * Usage info for the data set
     */
    usage: unknown; // OfflineConversionDataSetUsage
    /**
     * Number of valid entries of this data set
     */
    valid_entries: number;
}
export interface OfflineConversionDataSetUpload {
    /**
     * ID of the data set upload
     */
    id: string;
    /**
     * Api calls stat from RTCS
     */
    api_calls: number;
    /**
     * Time of the creation of this upload tag
     */
    creation_time: number;
    /**
     * Duplicate entries stat
     */
    duplicate_entries: number;
    /**
     * Event stats
     */
    event_stats: string;
    /**
     * Latest entry timestamp
     */
    event_time_max: number;
    /**
     * First entry timestamp
     */
    event_time_min: number;
    /**
     * Time of the first upload to this upload tag
     */
    first_upload_time: number;
    /**
     * The flag to determine if the upload data should be excluded from Lift
     */
    is_excluded_for_lift: boolean;
    /**
     * Time of the most recent upload to this upload tag
     */
    last_upload_time: number;
    /**
     * Approximate match rate percentage for the entries in this upload
     */
    match_rate_approx: number;
    /**
     * Matched entries stat
     */
    matched_entries: number;
    /**
     * The name by which uploads are grouped in this data set
     */
    upload_tag: string;
    /**
     * Valid entries stat
     */
    valid_entries: number;
}
export interface User {
    /**
     * *Returns no data as of April 4, 2018.*
     */
    about: string;
    /**
     * The access code for a Workplace email-less account.
     */
    access_code: unknown; // WorkAccessCode
    /**
     * The app user's App-Scoped User ID. This ID is unique to the app and cannot be used by other apps.
     */
    id: string;
    /**
     * The timestamp when the Workplace account was claimed.
     */
    account_claim_time: string;
    /**
     * The timestamp when the Workplace account was invited.
     */
    account_invite_time: string;
    /**
     * Whether this Workplace account is currently active.
     */
    active: boolean;
    /**
     * The age segment for this person expressed as a minimum and maximum age. For example, more than 18, less than 21.
     */
    age_range: AgeRange;
    /**
     * The authentication method a Workplace User has configured for their account. It can be either "password" or "sso".
     */
    auth_method: 'password' | 'sso';
    /**
     * The person's birthday.  This is a fixed format string, like `MM/DD/YYYY`. However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)
     */
    birthday: string;
    /**
     * Whether this Workplace user account can be deleted
     */
    can_delete: boolean;
    /**
     * Url for  claiming the workplace user account.
     */
    claim_link: string;
    /**
     * The Workplace community this user belongs to.
     */
    community: Group;
    /**
     * Cost center name of a Workplace user
     */
    cost_center: string;
    /**
     * Department name of a Workplace user
     */
    department: string;
    /**
     * Division name of a Workplace user
     */
    division: string;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    education: EducationExperience[];
    /**
     * The User's primary email address listed on their profile. This field will not be returned if no valid email address is available.
     */
    email: string;
    /**
     * The User's employee number, as set by the company via SCIM API.
     */
    employee_number: string;
    /**
     * A company specified unique identifier of employee users within a company.
     */
    external_id: string;
    /**
     * Athletes the User likes.
     */
    favorite_athletes: Experience[];
    /**
     * Sports teams the User likes.
     */
    favorite_teams: Experience[];
    /**
     * The person's first name
     */
    first_name: string;
    /**
     * Information about the frontline functionality related to this user
     */
    frontline: WorkUserFrontline;
    /**
     * The gender selected by this person, `male` or `female`. If the gender is set to a custom value, this value will be based off of the preferred pronoun; it will be omitted if the preferred pronoun is neutral
     */
    gender: string;
    /**
     * The person's hometown
     */
    hometown: Page;
    /**
     * The access token you can use to act as the person
     */
    impersonate_token: string;
    /**
     * The person's inspirational people
     */
    inspirational_people: Experience[];
    /**
     * Install type
     */
    install_type: string; // enum
    /**
     * Is the app making the request installed
     */
    installed: boolean;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    interested_in: string[];
    /**
     * if the current user is a guest user. should always return false.
     */
    is_guest_user: boolean;
    /**
     * Facebook Pages representing the languages this person knows
     */
    languages: Experience[];
    /**
     * The person's last name
     */
    last_name: string;
    /**
     * A link to the person's Timeline. The link will only resolve if the person clicking the link is logged into Facebook and is a friend of the person whose profile is being viewed.
     */
    link: string;
    /**
     * The person's current location as entered by them on their profile. This field requires the `user_location` permission.
     */
    location: Page;
    /**
     * What the person is interested in meeting for
     */
    meeting_for: string[];
    /**
     * The person's middle name
     */
    middle_name: string;
    /**
     * The person's full name
     */
    name: string;
    /**
     * The person's name formatted to correctly handle Chinese, Japanese, or Korean ordering
     */
    name_format: string;
    /**
     * Organization that the Workplace user belongs to
     */
    organization: string;
    /**
     * The person's payment pricepoints
     */
    payment_pricepoints: PaymentPricepoints;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    political: string;
    /**
     * The primary address of a Workplace user
     */
    primary_address: string;
    /**
     * The primary phone number of a Workplace user
     */
    primary_phone: string;
    /**
     * The profile picture URL of the Messenger user. The URL will expire.
     */
    profile_pic: string;
    /**
     * The person's favorite quotes
     */
    quotes: string;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    relationship_status: string;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    religion: string;
    /**
     * The time that the shared login needs to be upgraded to Business Manager by
     */
    shared_login_upgrade_required_by: string;
    /**
     * Shortened, locale-aware name for the person
     */
    short_name: string;
    /**
     * The person's significant other
     */
    significant_other: User;
    /**
     * Sports played by the person
     */
    sports: Experience[];
    /**
     * Whether the user can add a Donate Button to their Live Videos
     */
    supports_donate_button_in_live_video: boolean;
    /**
     * The date this Workplace user was terminated
     */
    term_date: string;
    /**
     * Job title of a Workplace user
     */
    title: string;
    /**
     * A token that is the same across a business's apps. Access to this token requires that the person be logged into your app or have a role on your app. This token will change if the business owning the app changes
     */
    token_for_business: string;
    /**
     * Video upload limits
     */
    video_upload_limits: VideoUploadLimits;
    /**
     * *Returns no data as of April 4, 2018.*
     */
    website: string;
    /**
     * Locale of a Workplace user
     */
    work_locale: string;
}

interface Experience {
    /**
     * ID
     */
    id: string;
    /**
     * Description
     */
    description: string;
    /**
     * From
     */
    from: User;
    /**
     * Name
     */
    name: string;
    /**
     * Tagged users
     */
    with: User[];
}

interface EducationExperience {
    classes: Experience[];
    concentration: Page[];
    degree: Page;
    id: string;
    school: Page;
    type: string;
    with: User[];
    year: Page;
}

interface AgeRange {
    /**
     * The upper bounds of the range for this person's age. `enum{17, 20, or empty}`.
     */
    max: number;
    /**
     * The lower bounds of the range for this person's age. `enum{13, 18, 21}`
     */
    min: number;
}

interface WorkUserFrontline {
    has_access: boolean;
    is_frontline: boolean;
}

interface PaymentPricepoints {
    /**
     * Mobile payment pricepoints
     */
    mobile: PaymentPricePoint[];
}

interface PaymentPricePoint {
    /**
     * Credits
     */
    credits: number;
    /**
     * Local currency
     */
    local_currency: string;
    /**
     * User price
     */
    user_price: string;
}

export interface VideoUploadLimits {
    /**
     * Length
     */
    length: number;
    /**
     * Size
     */
    size: number;
}

interface Place {
    /**
     * ID
     */
    id: string;
    /**
     * Location of Place
     */
    location: Location;
    /**
     * Name
     */
    name: string;
    /**
     * Overall Rating of Place, on a 5-star scale. 0 means not enough data to get a combined rating.
     */
    overall_rating: number;
}
export interface Post {
    /**
     * Action links
     */
    actions: unknown[];
    /**
     * The admin creator of a Page Post. Only available if there exists more than one admin for the page.
     */
    admin_creator: BusinessUser | User | Application;
    /**
     * The only objectives under which this post can be advertised
     */
    allowed_advertising_objectives: string[];
    /**
     * Information about the app this post was published by.
     */
    application: Application;
    /**
     * The backdated time for backdate post. For regular post, this field will be set to null.
     */
    backdated_time: string;
    /**
     * The call to action type used in any Page posts for mobile app engagement ads.
     */
    call_to_action: {
        type: unknown;
        value: unknown;
    };
    /**
     * Whether the page viewer can send a private reply to this post
     */
    can_reply_privately: boolean;
    /**
     * The caption of a link in the post (appears beneath the name).
     */
    caption: string;
    /**
     * Sub-shares of a multi-link share post
     */
    child_attachments: unknown[];
    /**
     * The post ID.
     */
    id: string; // Post ID
    /**
     * If comments are being mirrored to an external site, this function returns the domain of that external site.
     */
    comments_mirroring_domain: string;
    /**
     * An array of information about the attachment to the post
     */
    coordinates: {
        checkin_string: unknown;
        author_uid: unknown;
        page_string: unknown;
        target_string: unknown;
        target_href: unknown;
        coords: unknown;
        tagged_uids: unknown;
        timestamp: unknown;
        message: unknown;
        target_type: unknown;
    };
    /**
     * The time the post was published, expressed as UNIX timestamp
     */
    created_time: string;
    /**
     * A description of a link in the post (appears beneath the caption).
     */
    description: string;
    /**
     * If this Post has a place, the event associated with the place
     */
    event: Event;
    /**
     * An array of information about the attachment to the post
     */
    expanded_height: number;
    /**
     * An array of information about the attachment to the post
     */
    expanded_width: number;
    /**
     * Object that controls news feed targeting for this post. Anyone in these groups will be more likely to see this post, others will be less likely, but may still see it anyway. Any of the targeting fields shown here can be used, none are required (applies to Pages only).
     */
    feed_targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        genders: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        interested_in: unknown;
        user_adclusters: unknown;
        locales: unknown;
        countries: unknown;
        geo_locations: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        industries: unknown;
        politics: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        fan_of: unknown;
        relevant_until_ts: unknown;
    };
    /**
     * Information about the formatting for the message
     */
    formatting: string; // enum
    /**
     * The ID of the user, page, group, or event that published the post
     */
    from: User | Page;
    /**
     * If the photo's largest dimension exceeds 720 pixels, it is resized, with the largest dimension set to 720.
     */
    full_picture: string;
    /**
     * An array of information about the attachment to the post
     */
    height: number;
    /**
     * A link to an icon representing the type of this post.
     */
    icon: string;
    /**
     * Whether the post can be promoted on Instagram. It returns the enum "eligible" if it can be promoted.  Otherwise it returns an enum for why it cannot be promoted
     */
    instagram_eligibility: 'eligible' | string; // enum
    /**
     * Whether or not the post references an app
     */
    is_app_share: boolean;
    /**
     * Whether the post is eligible for promotion.
     */
    is_eligible_for_promotion: boolean;
    /**
     * Whether the post has expiration time that has passed
     */
    is_expired: boolean;
    /**
     * Whether a post has been set to hidden
     */
    is_hidden: boolean;
    /**
     * Returns True if the post was created inline when creating ads.
     */
    is_inline_created: boolean;
    /**
     * Whether this post can be promoted in Instagram
     */
    is_instagram_eligible: boolean;
    /**
     * Whether the post is currently popular. Based on whether the total actions as a percentage of reach exceeds a certain threshold
     */
    is_popular: boolean;
    /**
     * Indicates whether a scheduled post was published (applies to scheduled Page Post only, for users post and instanlty published posts this value is always true)
     */
    is_published: boolean;
    /**
     * Whether the post is a spherical video post
     */
    is_spherical: boolean;
    /**
     * The link attached to this post.
     */
    link: string; // uri
    /**
     * The message written in the post
     */
    message: string;
    /**
     * Profiles mentioned or tagged in a message. This is an object with a unique key for each mention or tag in the message.
     */
    message_tags: unknown[];
    /**
     * Whether display the end card for a multi-link share post
     */
    multi_share_end_card: boolean;
    /**
     * Whether automatically select the order of the links in multi-link share post when used in an ad
     */
    multi_share_optimized: boolean;
    /**
     * The name of the link.
     */
    name: string;
    /**
     * The ID of any uploaded photo or video attached to the post.
     */
    object_id: string;
    /**
     * The ID of a parent post for this post, if it exists. For example, if this story is a 'Your Page was mentioned in a post' story, the parent_id will be the original post where the mention happened
     */
    parent_id: string; // Post ID
    /**
     * The permanent static URL to the post on www.facebook.com. Example: https://www.facebook.com/FacebookforDevelopers/posts/10153449196353553
     */
    permalink_url: string; // uri
    /**
     * The picture scraped from any link included with the post.
     */
    picture: string;
    /**
     * ID of the place associated with the post
     */
    place: Place;
    /**
     * The privacy settings for a post
     */
    privacy: Privacy;
    /**
     * ID of post to use for promotion for stories that cannot be promoted directly
     */
    promotable_id: string; // Post ID
    /**
     * A list of properties for any attached video, for example, the length of the video.
     */
    properties: unknown[];
    /**
     * Total number of comments plus number of reactions of a post
     */
    publishing_stats: number;
    /**
     * UNIX timestamp of the scheduled publish time for the post
     */
    scheduled_publish_time: number;
    /**
     * Number of times the post has been shared
     */
    shares: {
        count: unknown;
    };
    /**
     * A URL to any Flash movie or video file attached to the post.
     */
    source: string;
    /**
     * Description of the type of a status update.
     */
    status_type: string;
    /**
     * Text of stories not intentionally generated by users, such as those generated when two users become friends. You must have the "Include recent activity stories" migration enabled in your app to retrieve this field
     */
    story: string;
    /**
     * The list of tags in the post description
     */
    story_tags: unknown[];
    /**
     * Whether user is subscribed to the post
     */
    subscribed: boolean;
    /**
     * The profile this was posted on if different from the author
     */
    target: Profile;
    /**
     * Object that limited the audience for this content. Anyone not in these demographics will not be able to view this content. This will not override any Page-level demographic restrictions that may be in place.
     */
    targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        zips: unknown;
        genders: unknown;
        college_networks: unknown;
        work_networks: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        college_majors: unknown;
        political_views: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        keywords: unknown;
        interested_in: unknown;
        user_clusters: unknown;
        user_clusters2: unknown;
        user_clusters3: unknown;
        user_adclusters: unknown;
        excluded_user_adclusters: unknown;
        custom_audiences: unknown;
        excluded_custom_audiences: unknown;
        locales: unknown;
        radius: unknown;
        connections: unknown;
        excluded_connections: unknown;
        friends_of_connections: unknown;
        countries: unknown;
        excluded_user_clusters: unknown;
        adgroup_string: unknown;
        user_event: unknown;
        qrt_versions: unknown;
        page_types: unknown;
        user_os: unknown;
        user_device: unknown;
        action_spec: unknown;
        action_spec_friend: unknown;
        action_spec_excluded: unknown;
        geo_locations: unknown;
        excluded_geo_locations: unknown;
        targeted_entities: unknown;
        conjunctive_user_adclusters: unknown;
        wireless_carrier: unknown;
        site_category: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        behaviors: unknown;
        travel_status: unknown;
        industries: unknown;
        politics: unknown;
        markets: unknown;
        income: unknown;
        net_worth: unknown;
        home_type: unknown;
        home_ownership: unknown;
        home_value: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        household_composition: unknown;
        moms: unknown;
        office_type: unknown;
        interest_clusters_expansion: unknown;
        dynamic_audience_ids: unknown;
        product_audience_specs: unknown;
        excluded_product_audience_specs: unknown;
        exclusions: unknown;
        flexible_spec: unknown;
        engagement_specs: unknown;
        excluded_engagement_specs: unknown;
    };
    /**
     * Timeline visibility information of the post
     */
    timeline_visibility: string;
    /**
     * A list of translations provided by the author of the post, represented in key-value pairs. The keys are locales and the values are translations in corresponding locales.
     */
    translations: { [key: string]: string };
    /**
     * A string indicating the object type of this post.
     */
    type: string;
    /**
     * The time the post was last updated, which occurs when a user comments on the post.
     */
    updated_time: string;
    /**
     * ID of the user or Page the post was shared from
     */
    via: User | Page;
    /**
     * Whether the post can be promoted with different video buying options. It returns an empty list when video is eligible.  Otherwise it returns a list of reasons why the post cannot be promoted.
     */
    video_buying_eligibility: string; // enum[]
    /**
     * An array of information about the attachment to the post
     */
    width: number;
}
export interface Profile {
    /**
     * The profile's ID
     */
    id: string;
    /**
     * Whether the current session user can post to this profile
     */
    can_post: boolean;
    /**
     * Link to this profile on Facebook
     */
    link: string;
    /**
     * The profile's name
     */
    name: string;
    /**
     * Link to the 100px wide profile's Picture
     */
    pic: string;
    /**
     * Link to the profile's Picture cropped to how it looks on the Facebook site
     */
    pic_crop: ProfilePictureSource;
    /**
     * Link to the 200px wide profile's Picture
     */
    pic_large: string;
    /**
     * Link to the 50px wide profile's Picture
     */
    pic_small: string;
    /**
     * Link to the 50px by 50px profile's Picture
     */
    pic_square: string;
    /**
     * String representing the profile's type
     */
    profile_type: 'user' | 'page' | 'event' | 'group' | 'application';
    /**
     * The profile's Alias
     */
    username: string;
}
export interface Photo {
    /**
     * The photo ID
     */
    id: string;
    /**
     * The album this photo is in
     */
    album: Album;
    /**
     * Accessible alternative description for an image
     */
    alt_text: string;
    /**
     * User provided accessible alternative description for an image
     */
    alt_text_custom: string;
    /**
     * A user-specified time for when this object was created
     */
    backdated_time: string;
    /**
     * How accurate the backdated time is
     */
    backdated_time_granularity: BackdatedTimeGranularityEnum;
    /**
     * Indicates whether the viewer can backdate the photo
     */
    can_backdate: boolean;
    /**
     * Indicates whether the viewer can delete the photo
     */
    can_delete: boolean;
    /**
     * Indicates whether the viewer can tag the photo
     */
    can_tag: boolean;
    /**
     * The time this photo was published
     */
    created_time: string;
    /**
     * If this object has a place, the event associated with the place
     */
    event: Event;
    /**
     * The profile (user or page) that uploaded this photo
     */
    from: User | Page;
    /**
     * The height of this photo in pixels
     */
    height: number;
    /**
     * The icon that Facebook displays when photos are published to News Feed
     */
    icon: string;
    /**
     * The different stored representations of the photo. Can vary in number based upon the size of the original photo.
     */
    images: PlatformImageSource[];
    /**
     * A link to the photo on Facebook
     */
    link: string;
    /**
     * The user-provided caption given to this photo. Corresponds to `caption` when creating photos
     */
    name: string;
    /**
     * An array containing an array of objects mentioned in the name field which contain the id, name, and type of each object as well as the offset and length which can be used to match it up with its corresponding string in the name field
     */
    name_tags: EntityAtTextRange[];
    /**
     * ID of the page story this corresponds to. May not be on all photos. Applies only to published photos
     */
    page_story_id: string;
    /**
     * Link to the 100px wide representation of this photo
     */
    picture: string;
    /**
     * Place info
     */
    place: Place;
    /**
     * The target this photo is published to
     */
    target: Profile;
    /**
     * The last time the photo was updated
     */
    updated_time: string;
    /**
     * The different stored representations of the photo in webp format. Can vary in number based upon the size of the original photo.
     */
    webp_images: PlatformImageSource[];
    /**
     * The width of this photo in pixels
     */
    width: number;
}

export interface ProfilePictureSource {
    bottom: number;
    cache_key: string;
    height: number;
    is_silhouette: boolean;
    left: number;
    right: number;
    top: number;
    url: string;
    width: number;
}

interface PlatformImageSource {
    /**
     * Height of the image
     */
    height: number;
    /**
     * URI of the image
     */
    source: string;
    /**
     * Width of the image
     */
    width: number;
}

export interface Page {
    /**
     * The ID representing a Facebook Page.
     */
    id: string;
    /**
     * Information about the Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access). Note that this value is mapped to the **Description** setting in the **Edit Page Info** user interface.
     */
    about: string;
    /**
     * The Page's access token. Only returned if the User making the request has a role (other than Live Contributor) on the Page. If your business requires two-factor authentication, the User must also be authenticated
     */
    access_token: string;
    /**
     * The Page's currently running promotion campaign
     */
    ad_campaign: AdSet;
    /**
     * Affiliation of this person. Applicable to Pages representing people. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    affiliation: string;
    /**
     * App ID for app-owned Pages and app Pages
     */
    app_id: string;
    /**
     * Artists the band likes. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    artists_we_like: string;
    /**
     * Dress code of the business. Applicable to Restaurants or Nightlife. Can be one of Casual, Dressy or Unspecified. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    attire: string;
    /**
     * The awards information of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    awards: string;
    /**
     * Band interests. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    band_interests: string;
    /**
     * Members of the band. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    band_members: string;
    /**
     * The best available Page on Facebook for the concept represented by this Page. The best available Page takes into account authenticity and the number of likes
     */
    best_page: Page;
    /**
     * Biography of the band. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    bio: string;
    /**
     * Birthday of this person. Applicable to Pages representing people. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    birthday: string;
    /**
     * Booking agent of the band. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    booking_agent: string;
    /**
     * Year vehicle was built. Applicable to Vehicles. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    built: string;
    /**
     * The Business associated with this Page. Requires business_management permissions, and a page or user access token. The person requesting the access token must be an admin of the page.
     */
    business: unknown;
    /**
     * Whether the Page has checkin functionality enabled. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    can_checkin: boolean;
    /**
     * Indicates whether the current app user can post on this Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    can_post: boolean;
    /**
     * The Page's category. e.g. Product/Service, Computers/Technology. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    category: string;
    /**
     * The Page's sub-categories
     */
    category_list: PageCategory[];
    /**
     * Number of checkins at a place represented by a Page
     */
    checkins: number;
    /**
     * The company overview. Applicable to Companies. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    company_overview: string;
    /**
     * Instagram account connected to page via page settings
     */
    connected_instagram_account: ShadowIGUser;
    /**
     * Linked page backed instagram account for this page
     */
    connected_page_backed_instagram_account: ShadowIGUser;
    /**
     * The mailing or contact address for this page. This field will be blank if the contact address is the same as the physical address
     */
    contact_address: MailingAddress;
    /**
     * Insight metrics that measures performance of copyright attribution. An example metric would be number of incremental followers from attribution
     */
    copyright_attribution_insights: CopyrightAttributionInsights;
    /**
     * Instagram usernames who will not be reported in copyright match systems
     */
    copyright_whitelisted_ig_partners: string[];
    /**
     * If this is a Page in a Global Pages hierarchy, the number of people who are being directed to this Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    country_page_likes: number;
    /**
     * Information about the page's cover photo
     */
    cover: CoverPhoto;
    /**
     * Culinary team of the business. Applicable to Restaurants or Nightlife. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    culinary_team: string;
    /**
     * Current location of the Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    current_location: string;
    /**
     * A Vector of url strings for delivery_and_pickup_option_info of the Page.
     */
    delivery_and_pickup_option_info: string[];
    /**
     * The description of the Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access). Note that this value is mapped to the **Additional Information** setting in the **Edit Page Info** user interface.
     */
    description: string;
    /**
     * The description of the Page in raw HTML. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    description_html: string;
    /**
     * To be used when `temporary_status` is set to `differently_open` to indicate how the business is operating differently than usual, such as a restaurant offering takeout. Enum keys can be one or more of the following: ONLINE_SERVICES, DELIVERY, PICKUP, OTHER with the value set to `true` or `false`. For example, a business offering food pick up but pausing delivery would be `differently_open_offerings:{"DELIVERY":"false", "PICKUP":"true"}`
     */
    differently_open_offerings: { [key in 'ONLINE_SERVICES' | 'DELIVERY' | 'PICKUP']: boolean };
    /**
     * The director of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    directed_by: string;
    /**
     * Subtext about the Page being viewed. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    display_subtext: string;
    /**
     * Page estimated message response time displayed to user. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    displayed_message_response_time: string;
    /**
     * The emails listed in the About section of a Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    emails: string[];
    /**
     * The social sentence and like count information for this Page. This is the same info used for the like button
     */
    engagement: Engagement;
    /**
     * The number of users who like the Page. For Global Pages this is the count for all Pages across the brand. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    fan_count: number;
    /**
     * Video featured by the Page
     */
    featured_video: Video;
    /**
     * Features of the vehicle. Applicable to Vehicles. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    features: string;
    /**
     * Number of page followers
     */
    followers_count: number;
    /**
     * The restaurant's food styles. Applicable to Restaurants
     */
    food_styles: string[];
    /**
     * When the company was founded. Applicable to Pages in the Company category. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    founded: string;
    /**
     * General information provided by the Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    general_info: string;
    /**
     * General manager of the business. Applicable to Restaurants or Nightlife. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    general_manager: string;
    /**
     * The genre of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    genre: string;
    /**
     * The name of the Page with country codes appended for Global Pages. Only visible to the Page admin. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    global_brand_page_name: string;
    /**
     * This brand's global Root ID
     */
    global_brand_root_id: string;
    /**
     * Indicates whether this Page has added the app making the query in a Page tab. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS).
     */
    has_added_app: boolean;
    /**
     * Indicates whether WhatsApp number connected to this page is a WhatsApp business number. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    has_whatsapp_business_number: boolean;
    /**
     * Indicates whether WhatsApp number connected to this page is a WhatsApp number. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    has_whatsapp_number: boolean;
    /**
     * Hometown of the band. Applicable to Bands
     */
    hometown: string;
    /**
     * Indicates a single range of opening hours for a day. Each day can have 2 different `hours` ranges. The keys in the map are in the form of `{day}_{number}_{status}`.  `{day}` should be the first 3 characters of the day of the week, `{number}` should be either 1 or 2 to allow for the two different hours ranges per day. `{status}` should be either `open` or `close` to delineate the start or end of a time range.
An example with:
`{
  "hours": {
    "mon_1_open": "09:00",     //open at 9am on Monday
    "mon_1_close": "12:00",    //close at 12pm
    "mon_2_open": "13:15",    //open at 1:15pm
    "mon_2_close": "18:00".    //close at 6pm
  }`
 If one specific day is open 24 hours, the range should be specified as `00:00` to `24:00`. If the place is open 24/7, use the `is_always_open` field instead.
**Note:** If a business is open during the night, the closing time can not pass 6:00am. For example, `"mon_2_open":"13:15"` and `"mon_2_close":"5:59"` will work however `"mon_close_close":"6:00"` will not.
     */
    hours: { [key: string]: string };
    /**
     * Legal information about the Page publishers. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    impressum: string;
    /**
     * Influences on the band. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    influences: string;
    /**
     * Instagram account linked to page during Instagram business conversion flow
     */
    instagram_business_account: ShadowIGUser;
    /**
     * Indicates the current Instant Articles review status for this page. Values can be `APPROVED`, `NOT_SUBMITTED`, `PENDING`, `REJECTED`, or `SUSPENDED`.
     */
    instant_articles_review_status:
        | 'APPROVED'
        | 'NOT_SUBMITTED'
        | 'PENDING'
        | 'REJECTED'
        | 'SUSPENDED';
    /**
     * Indicates whether this location is always open. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_always_open: boolean;
    /**
     * Indicates whether location is part of a chain. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_chain: boolean;
    /**
     * Indicates whether the Page is a community Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_community_page: boolean;
    /**
     * Indicates whether the page is eligible for the branded content tool
     */
    is_eligible_for_branded_content: boolean;
    /**
     * Indicates whether the page is a Messenger Platform Bot with Get Started button enabled
     */
    is_messenger_bot_get_started_enabled: boolean;
    /**
     * Indicates whether the page is a Messenger Platform Bot. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_messenger_platform_bot: boolean;
    /**
     * Indicates whether Page is owned. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_owned: boolean;
    /**
     * Whether the business corresponding to this Page is permanently closed. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    is_permanently_closed: boolean;
    /**
     * Indicates whether the Page is published and visible to non-admins
     */
    is_published: boolean;
    /**
     * Indicates whether the Page is unclaimed
     */
    is_unclaimed: boolean;
    /**
     * Indicates whether the application is subscribed for real time updates from this page
     */
    is_webhooks_subscribed: boolean;
    /**
     * Indicates the time when the TOS for running LeadGen Ads on the page was accepted
     */
    leadgen_tos_acceptance_time: string;
    /**
     * Indicates whether a user has accepted the TOS for running LeadGen Ads on the Page
     */
    leadgen_tos_accepted: boolean;
    /**
     * Indicates the user who accepted the TOS for running LeadGen Ads on the page
     */
    leadgen_tos_accepting_user: User;
    /**
     * The Page's Facebook URL
     */
    link: string;
    /**
     * The location of this place. Applicable to all Places
     */
    location: Location;
    /**
     * Members of this org. Applicable to Pages representing Team Orgs. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS).
     */
    members: string;
    /**
     * The instant workflow merchant ID associated with the Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    merchant_id: string;
    /**
     * Review status of the Page against FB commerce policies, this status decides whether the Page can use component flow
     */
    merchant_review_status: string; // enum
    /**
     * The default ice breakers for a certain page
     */
    messenger_ads_default_icebreakers: string[];
    /**
     * The default page welcome message for Click to Messenger Ads
     */
    messenger_ads_default_page_welcome_message: MessengerDestinationPageWelcomeMessage;
    /**
     * The default quick replies for a certain page
     */
    messenger_ads_default_quick_replies: string[];
    /**
     * Indicates what type this page is and we will generate different sets of quick replies based on it. Values include `UNKNOWN`, `PAGE_SHOP`, or `RETAIL`.
     */
    messenger_ads_quick_replies_type: 'UNKNOWN' | 'PAGE_SHOP' | 'RETAIL';
    /**
     * The company mission. Applicable to Companies
     */
    mission: string;
    /**
     * MPG of the vehicle. Applicable to Vehicles. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    mpg: string;
    /**
     * The name of the Page
     */
    name: string;
    /**
     * The name of the Page with its location and/or global brand descriptor. Only visible to a page admin. Non-page admins will get the same value as `name`.
     */
    name_with_location_descriptor: string;
    /**
     * The TV network for the TV show. Applicable to TV Shows. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    network: string;
    /**
     * The number of people who have liked the Page, since the last login. Only visible to a Page admin. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    new_like_count: number;
    /**
     * Offer eligibility status. Only visible to a page admin
     */
    offer_eligible: boolean;
    /**
     * Overall page rating based on rating survey from users on a scale of 1-5. This value is normalized and is not guaranteed to be a strict average of user ratings. If there are 0 or a small number of ratings, this field will not be returned.
     */
    overall_star_rating: number;
    /**
     * page token
     */
    page_token: string;
    /**
     * Parent Page of this Page. If the Page is part of a Global Root Structure and you have permission to the Global Root, the Global Root Parent Page is returned. If you do not have Global Root permission, the Market Page for your current region is returned as the Parent Page. If your Page is not part of a Global Root Structure, the Parent Page is returned.
     */
    parent_page: Page;
    /**
     * Parking information. Applicable to Businesses and Places
     */
    parking: PageParking;
    /**
     * Payment options accepted by the business. Applicable to Restaurants or Nightlife
     */
    payment_options: PagePaymentOptions;
    /**
     * Personal information. Applicable to Pages representing People. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS).
     */
    personal_info: string;
    /**
     * Personal interests. Applicable to Pages representing People. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    personal_interests: string;
    /**
     * Pharmacy safety information. Applicable to Pharmaceutical companies. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    pharma_safety_info: string;
    /**
     * Phone number provided by a Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS).
     */
    phone: string;
    /**
     * List of pickup options available at this Page's store location. Values can include `CURBSIDE`, `IN_STORE`, and `OTHER`.
     */
    pickup_options: ('CURBSIDE' | 'IN_STORE' | 'OTHER')[];
    /**
     * For places, the category of the place. Value can be `CITY`, `COUNTRY`, `EVENT`, `GEO_ENTITY`, `PLACE`, `RESIDENCE`, `STATE_PROVINCE`, or `TEXT`.
     */
    place_type:
        | 'CITY'
        | 'COUNTRY'
        | 'EVENT'
        | 'GEO_ENTITY'
        | 'PLACE'
        | 'RESIDENCE'
        | 'STATE_PROVINCE'
        | 'TEXT';
    /**
     * The plot outline of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    plot_outline: string;
    /**
     * Group of tags describing the preferred audienceof ads created for the Page
     */
    preferred_audience: Targeting;
    /**
     * Press contact information of the band. Applicable to Bands
     */
    press_contact: string;
    /**
     * Price range of the business, such as a restaurant or salon. Values can be one of `$`, `$$`, `$$$`, `$$$$`, `Not Applicable`, or `null` if no value is set.. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    price_range: string;
    /**
     * Privacy url in page info section
     */
    privacy_info_url: string;
    /**
     * The productor of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    produced_by: string;
    /**
     * The products of this company. Applicable to Companies
     */
    products: string;
    /**
     * Boosted posts eligibility status. Only visible to a page admin
     */
    promotion_eligible: boolean;
    /**
     * Reason for which boosted posts are not eligible. Only visible to a page admin
     */
    promotion_ineligible_reason: string;
    /**
     * Public transit to the business. Applicable to Restaurants or Nightlife. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    public_transit: string;
    /**
     * Number of ratings for the Page (limited to ratings that are publicly accessible). Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    rating_count: number;
    /**
     * Messenger page scope id associated with page and a user using account_linking_token
     */
    recipient: string;
    /**
     * Record label of the band. Applicable to Bands. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    record_label: string;
    /**
     * The film's release date. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    release_date: string;
    /**
     * Services the restaurant provides. Applicable to Restaurants
     */
    restaurant_services: PageRestaurantServices;
    /**
     * The restaurant's specialties. Applicable to Restaurants
     */
    restaurant_specialties: PageRestaurantSpecialties;
    /**
     * The air schedule of the TV show. Applicable to TV Shows. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    schedule: string;
    /**
     * The screenwriter of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    screenplay_by: string;
    /**
     * The season information of the TV Show. Applicable to TV Shows. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    season: string;
    /**
     * The Page address, if any, in a simple single line format. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    single_line_address: string;
    /**
     * The cast of the film. Applicable to Films. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    starring: string;
    /**
     * Information about when the entity represented by the Page was started
     */
    start_info: PageStartInfo;
    /**
     * Unique store code for this location Page. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    store_code: string;
    /**
     * Location Page's store location descriptor
     */
    store_location_descriptor: string;
    /**
     * Unique store number for this location Page
     */
    store_number: number;
    /**
     * The studio for the film production. Applicable to Films
     */
    studio: string;
    /**
     * Whether the user can add a Donate Button to their Live Videos.
     */
    supports_donate_button_in_live_video: boolean;
    /**
     * Indicates whether this Page supports Instant Articles
     */
    supports_instant_articles: boolean;
    /**
     * The number of people talking about this Page
     */
    talking_about_count: number;
    /**
     * Indicates how the business corresponding to this Page is operating differently than usual. Enum values {`differently_open`, `temporarily_closed`, `operating_as_usual`, `no_data`}  If set to `differently_open` use with `differently_open_offerings` to set status.
     */
    temporary_status: 'differently_open' | 'temporarily_closed' | 'operating_as_usual' | 'no_data';
    /**
     * Unread message count for the Page. Only visible to a page admin
     */
    unread_message_count: number;
    /**
     * Number of unread notifications. Only visible to a page admin
     */
    unread_notif_count: number;
    /**
     * Unseen message count for the Page. Only visible to a page admin
     */
    unseen_message_count: number;
    /**
     * The alias of the Page. For example, for www.facebook.com/platform the username is 'platform'
     */
    username: string;
    /**
     * Showing whether this [Page is verified](https://www.facebook.com/help/1288173394636262). Value can be `blue_verified` or `gray_verified`, which represents that Facebook has confirmed that a Page is the authentic presence of the public figure, celebrity, or global brand it represents, or `not_verified`. This field can be read with the Page Public Metadata Access feature.
     */
    verification_status: string;
    /**
     * Voip info
     */
    voip_info: VoipInfo;
    /**
     * The URL of the Page's website. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    website: string;
    /**
     * The number of visits to this Page's location. If the Page setting *Show map, check-ins and star ratings on the Page* (under *Page Settings* > *Page Info* > *Address*) is disabled, then this value will also be disabled. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    were_here_count: number;
    /**
     * The Page's WhatsApp number. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    whatsapp_number: string;
    /**
     * The writer of the TV show. Applicable to TV Shows. Can be read with [Page Public Content Access](https://developers.facebook.com/docs/apps/review/feature/#reference-PAGES_ACCESS) or [Page Public Metadata Access](https://developers.facebook.com/docs/apps/review/feature#page-public-metadata-access).
     */
    written_by: string;
}

interface CopyrightAttributionInsights {
    l7_attribution_page_view: number;
    l7_attribution_page_view_delta: number;
    l7_attribution_video_view: number;
    l7_attribution_video_view_delta: number;
    metrics_ending_date: string;
    id: string;
}

interface MessengerDestinationPageWelcomeMessage {
    id: string;
    page_welcome_message_body: string;
    page_welcome_message_type: string;
    template_name: string;
    time_created: string;
    time_last_used: string;
}

interface Targeting {
    adgroup_id: string;
    age_max: number;
    age_min: number;
    app_install_state: string;
    audience_network_positions: string[];
    behaviors: IDName[];
    brand_safety_content_filter_levels: string[];
    catalog_based_targeting: CatalogBasedTargeting;
    cities: IDName[];
    college_years: number[];
    connections: ConnectionsTargeting[];
    contextual_targeting_categories: IDName[];
    countries: string[];
    country: string[];
    country_groups: string[];
    custom_audiences: RawCustomAudience[];
    device_platforms: DevicePlatforms[];
    direct_install_devices: boolean;
    dynamic_audience_ids: string[];
    education_majors: IDName[];
    education_schools: IDName[];
    education_statuses: number[];
    effective_audience_network_positions: string[];
    effective_device_platforms: EffectiveDevicePlatforms[];
    effective_facebook_positions: string[];
    effective_instagram_positions: string[];
    effective_messenger_positions: string[];
    effective_publisher_platforms: string[];
    engagement_specs: TargetingDynamicRule[];
    ethnic_affinity: IDName[];
    exclude_reached_since: string[];
    excluded_brand_safety_content_types: string[];
    excluded_connections: ConnectionsTargeting[];
    excluded_custom_audiences: RawCustomAudience[];
    excluded_dynamic_audience_ids: string[];
    excluded_engagement_specs: TargetingDynamicRule[];
    excluded_geo_locations: TargetingGeoLocation;
    excluded_mobile_device_model: string[];
    excluded_product_audience_specs: TargetingProductAudienceSpec[];
    excluded_publisher_categories: string[];
    excluded_publisher_list_ids: string[];
    excluded_user_device: string[];
    exclusions: FlexibleTargeting;
    facebook_positions: string[];
    family_statuses: IDName[];
    fb_deal_id: string;
    flexible_spec: FlexibleTargeting[];
    friends_of_connections: ConnectionsTargeting[];
    genders: number[];
    generation: IDName[];
    geo_locations: TargetingGeoLocation;
    home_ownership: IDName[];
    home_type: IDName[];
    home_value: IDName[];
    household_composition: IDName[];
    income: IDName[];
    industries: IDName[];
    instagram_positions: string[];
    instream_video_skippable_excluded: boolean;
    interested_in: number[];
    interests: IDName[];
    is_whatsapp_destination_ad: boolean;
    keywords: string[];
    life_events: IDName[];
    locales: number[];
    messenger_positions: string[];
    moms: IDName[];
    net_worth: IDName[];
    office_type: IDName[];
    place_page_set_ids: string[];
    political_views: number[];
    politics: IDName[];
    product_audience_specs: TargetingProductAudienceSpec[];
    prospecting_audience: TargetingProspectingAudience;
    publisher_platforms: string[];
    radius: string;
    regions: IDName[];
    relationship_statuses: number[];
    site_category: string[];
    targeting_optimization: string;
    user_adclusters: IDName[];
    user_device: string[];
    user_event: number[];
    user_os: string[];
    wireless_carrier: string[];
    work_employers: IDName[];
    work_positions: IDName[];
    zips: string[];
}

interface IDName {
    id: string;
    name: string;
}

interface CatalogBasedTargeting {
    geo_targeting_type: string;
}

interface ConnectionsTargeting {
    id: string;
    name: string;
}

interface RawCustomAudience {
    id: string;
    name: string;
}

interface DevicePlatforms {
    desktop: unknown;
    mobile: unknown;
}

interface EffectiveDevicePlatforms {
    desktop: unknown;
    mobile: unknown;
}

interface TargetingDynamicRule {
    'action.type': string;
    ad_group_id: string;
    campaign_group_id: string;
    campaign_id: string;
    impression_count: string;
    page_id: string;
    post: string;
    retention_seconds: string;
}

interface TargetingProductAudienceSpec {
    exclusions: TargetingProductAudienceSubSpec[];
    inclusions: TargetingProductAudienceSubSpec[];
    product_set_id: string;
}

interface TargetingProductAudienceSubSpec {
    retention_seconds: string;
    rule: string;
}

interface FlexibleTargeting {
    behaviors: IDName[];
    college_years: number[];
    connections: IDName[];
    custom_audiences: IDName[];
    education_majors: IDName[];
    education_schools: IDName[];
    education_statuses: number[];
    ethnic_affinity: IDName[];
    family_statuses: IDName[];
    friends_of_connections: IDName[];
    generation: IDName[];
    home_ownership: IDName[];
    home_type: IDName[];
    home_value: IDName[];
    household_composition: IDName[];
    income: IDName[];
    industries: IDName[];
    interested_in: number[];
    interests: IDName[];
    life_events: IDName[];
    moms: IDName[];
    net_worth: IDName[];
    office_type: IDName[];
    politics: IDName[];
    relationship_statuses: number[];
    user_adclusters: IDName[];
    work_employers: IDName[];
    work_positions: IDName[];
}

interface TargetingProspectingAudience {
    source: unknown[];
}
export interface PageRestaurantServices {
    /**
     * Whether the restaurant has catering service
     */
    catering: boolean;
    /**
     * Whether the restaurant has delivery service
     */
    delivery: boolean;
    /**
     * Whether the restaurant is group-friendly
     */
    groups: boolean;
    /**
     * Whether the restaurant is kids-friendly
     */
    kids: boolean;
    /**
     * Whether the restaurant has outdoor seating
     */
    outdoor: boolean;
    /**
     * Whether the restaurant has pickup service
     */
    pickup: boolean;
    /**
     * Whether the restaurant takes reservations
     */
    reserve: boolean;
    /**
     * Whether the restaurant has takeout service
     */
    takeout: boolean;
    /**
     *     Whether the restaurant has waiters
     */
    waiter: boolean;
    /**
     *     Whether the restaurant welcomes walkins
     */
    walkins: boolean;
}

export interface PageRestaurantSpecialties {
    /**
     * Whether the restaurant serves breakfast
     */
    breakfast: number;
    /**
     * Whether the restaurant serves coffee
     */
    coffee: number;
    /**
     * Whether the restaurant serves dinner
     */
    dinner: number;
    /**
     * Whether the restaurant serves drinks
     */
    drinks: number;
    /**
     * Whether the restaurant serves lunch
     */
    lunch: number;
}

interface VoipInfo {
    /**
     * Does this user have a pushable mobile app install?
     */
    has_mobile_app: boolean;
    /**
     * Does the viewer have permission to call?
     */
    has_permission: boolean;
    /**
     * Is this user currently callable via mobile?
     */
    is_callable: boolean;
    /**
     * Is this user currently callable via dekstop?
     */
    is_callable_webrtc: boolean;
    /**
     * Does this user have an unmuted push token?
     */
    is_pushable: boolean;
    /**
     * Reason code if not callable
     */
    reason_code: number;
    /**
     * Reason description if not callable
     */
    reason_description: string;
}

export interface PageCategory {
    /**
     * The id of the category.
     */
    id: string;
    /**
     * The value to be used, in the API, for category_enum.
     */
    api_enum: string;
    /**
     * List of child categories.
     */
    fb_page_categories: PageCategory[];
    /**
     * The name of the category.
     */
    name: string;
}

export interface PageParking {
    /**
     * Whether lot parking is available
     */
    lot: number;
    /**
     * Whether street parking is available
     */
    street: number;
    /**
     * Whether valet parking is available
     */
    valet: number;
}

export interface PagePaymentOptions {
    /**
     * Whether the business accepts American Express as a payment option
     */
    amex: number;
    /**
     * Whether the business accepts cash only as a payment option
     */
    cash_only: number;
    /**
     * Whether the business accepts Discover as a payment option
     */
    discover: number;
    /**
     * Whether the business accepts MasterCard as a payment option
     */
    mastercard: number;
    /**
     * Whether the business accepts Visa as a payment option
     */
    visa: number;
}

export interface PageStartInfo {
    /**
     * The start date of the entity
     */
    date: PageStartDate;
    /**
     * The start type of the entity
     */
    type: string;
}

export interface PageStartDate {
    /**
     * The start day of the entity
     */
    day: number;
    /**
     * The start month of the entity
     */
    month: number;
    /**
     * The start year of the entity
     */
    year: number;
}

export interface Business {
    /**
     * The business ID.
     */
    id: string;
    /**
     * Specifies whether offline analytics for business is blocked.
     */
    block_offline_analytics: boolean;
    /**
     * Creator of this business.
     */
    created_by: BusinessUser | SystemUser;
    /**
     * Creation time of this business.
     */
    created_time: string;
    /**
     * Extended credits update time.
     */
    extended_updated_time: string;
    /**
     * Whether the business is hidden.
     */
    is_hidden: boolean;
    /**
     * Whether Instagram is enabled as event source in Facebook Analytics.
     */
    is_instagram_enabled_in_fb_analytics: boolean;
    /**
     * URI for business profile page.
     */
    link: string;
    /**
     * The business's name.
     */
    name: string;
    /**
     * ID for the payment account for this business.
     */
    payment_account_id: string;
    /**
     * The primary Facebook Page for this business.
     */
    primary_page: Page;
    /**
     * The profile picture URI of the business.
     */
    profile_picture_uri: string;
    /**
     * This business's timezone.
     */
    timezone_id: number;
    /**
     * Two factor type authentication used for this business
     */
    two_factor_type: 'none' | 'admin_required' | 'all_required';
    /**
     * Last time this business was updated.
     */
    updated_by: BusinessUser | SystemUser;
    /**
     * Last time this business was updated.
     */
    updated_time: string;
    /**
     * Verification status for this business.
     */
    verification_status: string; // enum
    /**
     * This business belongs to this vertical industry.
     */
    vertical: string;
    /**
     * ID for vertical industry.
     */
    vertical_id: number;
}
export interface Video {
    /**
     * Time offsets of ad breaks in milliseconds. Ad breaks are short ads that play within a video.
     */
    ad_breaks: number[];
    /**
     * A user-specified time for when this object was created
     */
    backdated_time: string;
    /**
     * How accurate the backdated time is
     */
    backdated_time_granularity: BackdatedTimeGranularityEnum;
    /**
     * The content category of this video.
     */
    content_category:
        | 'BEAUTY_FASHION'
        | 'BUSINESS'
        | 'CARS_TRUCKS'
        | 'COMEDY'
        | 'CUTE_ANIMALS'
        | 'ENTERTAINMENT'
        | 'FAMILY'
        | 'FOOD_HEALTH'
        | 'HOME'
        | 'LIFESTYLE'
        | 'MUSIC'
        | 'NEWS'
        | 'POLITICS'
        | 'SCIENCE'
        | 'SPORTS'
        | 'TECHNOLOGY'
        | 'VIDEO_GAMING'
        | 'OTHER';
    /**
     * Tags that describe the contents of the video.
     */
    content_tags: string[];
    /**
     * The time the video was initially published.
     */
    created_time: string;
    /**
     * Labels used to describe the video. Unlike content tags, custom labels are not published and only appear in insights data.
     */
    custom_labels: string[];
    /**
     * The description of the video.
     */
    description: string;
    /**
     * The HTML element that may be embedded in a Web page to play the video.
     */
    embed_html: string;
    /**
     * Whether the video is embeddable.
     */
    embeddable: boolean;
    /**
     * If this object has a place, the event associated with the place
     */
    event: Event;
    /**
     * The different formats of the video.
     */
    format: VideoFormat[];
    /**
     * The profile that created the video.
     */
    from: User | Page;
    /**
     * The icon that Facebook displays when videos are published to the feed.
     */
    icon: string;
    /**
     * The video ID.
     */
    id: string;
    /**
     * Whether the video is crossposted from other page.
     */
    is_crosspost_video: boolean;
    /**
     * Specifies if the video is eligible for crossposting. Page access-token is required to query this field.
     */
    is_crossposting_eligible: boolean;
    /**
     * Whether this video is episodie or not.
     */
    is_episode: boolean;
    /**
     * Whether the video is eligible to be promoted on Instagram
     */
    is_instagram_eligible: boolean;
    /**
     * Whether the video is exclusively used for copyright monitoring
     */
    is_reference_only: boolean;
    /**
     * Duration of this video in seconds.
     */
    length: number;
    /**
     * The live status of the video
     */
    live_status: 'LIVE' | 'LIVE_STOPPED' | 'VOD';
    /**
     * The music video copyright of this video. This field is only accessible for pages enrolled in Rights Manager for music and will throw a permission error for unenrolled pages.
     */
    music_video_copyright: MusicVideoCopyright;
    /**
     * URL to the permalink page of the video.
     */
    permalink_url: string;
    /**
     * The URL for the thumbnail picture of the video.
     */
    picture: string;
    /**
     * Place info
     */
    place: Place;
    /**
     * The status of the Premiere Watch Party, if any
     */
    premiere_living_room_status: string; // enum
    /**
     * Privacy setting for the video.
     */
    privacy: Privacy;
    /**
     * Whether a post about this video is published. The post is not <i>scheduled</i>, <i>draft</i>, or <i>ads_post</i>.
     */
    published: boolean;
    /**
     * The time that the video is scheduled to publish.
     */
    scheduled_publish_time: string;
    /**
     * A URL to the raw, playable video file.
     */
    source: string;
    /**
     * Object describing the status attributes of a video.
     */
    status: VideoStatus;
    /**
     * The video title or caption.
     */
    title: string;
    /**
     * The publishers asset management code for this video.
     */
    universal_video_id: string;
    /**
     * The last time the video or its caption was updated.
     */
    updated_time: string;
}

export interface VideoFormat {
    /**
     * HTML to embed the video in this format.
     */
    embed_html: string;
    /**
     * The filter applied to this video format.
     */
    filter: string;
    /**
     * The height of the video in this format.
     */
    height: number;
    /**
     * The thumbnail for the video in this format.
     */
    picture: string;
    /**
     * The width of the video in this format.
     */
    width: string;
}

export interface VideoStatus {
    /**
     * Video processing progress in percent [int 0 to 100].
     */
    processing_process: number;
    /**
     * Status of a video, either "ready" (uploaded, encoded, thumbnails extracted), "processing" (not ready yet) or "error" (processing failed).
     */

    video_status: 'ready' | 'processing' | 'error';
}

interface MusicVideoCopyright {
    /**
     * The ID of the music video copyright
     */
    id: string;
    /**
     * The time of creation for this music video copyright
     */
    creation_time: string;
    /**
     * The number of matches for this copyright that are displayed on the dashboard
     */
    displayed_matches_count: number;
    /**
     * Whether this copyright is in conflict with another reference file
     */
    in_conflict: boolean;
    /**
     * The ISRC of the copyrighted music video asset
     */
    isrc: string;
    /**
     * The match_rule applied to media that matches the copyrighted content
     */
    match_rule: VideoCopyrightRule;
    /**
     * The geo ownership for an music video asset, a list of countries
     */
    ownership_countries: string[];
    /**
     * The status of the reference file, used to determine if the match should be skipped
     */
    reference_file_status: string; // enum
    /**
     * The status of ridge ingestion for detection
     */
    ridge_monitoring_status: string; // enum
    /**
     * The tags/keywords associated with the copyright
     */
    tags: string[];
    /**
     * The time that this music video copyright was last updated
     */
    update_time: string;
    /**
     * The video asset that has been copyrighted
     */
    video_asset: CopyrightReferenceContainer;
    /**
     * A list of Facebook page IDs or user IDs, who are allowed to use the copyrighted content
     */
    whitelisted_fb_users: unknown[]; // CopyrightWhiteListedUser
    /**
     * A list of Instagram user IDs who are allowed to use the copyrighted content
     */
    whitelisted_ig_users: string[];
}

export interface VideoCopyrightRule {
    /**
     * The id of video copyright rules object
     */
    id: string;
    /**
     * Groups of conditions on the rules object
     */
    condition_groups: VideoCopyrightConditionGroup[];
    /**
     * Copyrights associated with this copyright rules object
     */
    copyrights: string[];
    /**
     * The date on which the rule was created
     */
    created_date: string;
    /**
     * The person who created the match rule
     */
    creator: User;
    /**
     * Whether or not the rule is in migration
     */
    is_in_migration: boolean;
    /**
     * Name of the video copyright rules object
     */
    name: string;
}

interface CopyrightReferenceContainer {
    content_type: string;
    copyright_creation_time: string;
    download_hd_url: string;
    duration_in_sec: number;
    fingerprint_validity: string;
    id: string;
    iswc: string;
    metadata: unknown;
    published_time: string;
    thumbnail_url: string;
    title: string;
    universal_content_id: string;
    writer_names: string[];
}

export interface VideoCopyrightConditionGroup {
    action: string;
    conditions: unknown[];
    validity_status: string;
}

export interface BusinessUser {
    /**
     * The business user's ID.
     */
    id: string;
    /**
     * Business user is associated with this business.
     */
    business: Business;
    /**
     * User's email as provided in Business Manager.
     */
    email: string;
    /**
     * Financial permission role of the user in Business Manager, such as `EDITOR`, `ANALYST`, and so on.
     */
    finance_permission: string;
    /**
     * User's first name as provided in Business Manager.
     */
    first_name: string;
    /**
     * This user's ads right permission role in Business Manager, such as Reviewer and so on.
     */
    ip_permission: string;
    /**
     * User's last name as provided in Business Manager.
     */
    last_name: string;
    /**
     * Name of user as provided in Business Manager.
     */
    name: string;
    /**
     * Email for the business user that is still pending verification.
     */
    pending_email: string;
    /**
     * Role of the user in Business Manager, such as Admin, Employee, and so on.
     */
    role: string;
    /**
     * The title of the user in this business.
     */
    title: string;
    /**
     * Two-factor authentication status of the business-scoped user.
     */
    two_fac_status: string;
}
interface SystemUser {
    /**
     * System user ID.
     */
    id: string;
    /**
     * The creator of this system user.
     */
    created_by: User;
    /**
     * The creation time of this system user.
     */
    created_time: string;
    /**
     * Financial permission role of the user in business manager, such as Editor, Analyst, and so on.
     */
    finance_permission: string;
    /**
     * Ads right permission role of the user in business manager, such as Reviewer, and so on.
     */
    ip_permission: string;
    /**
     * Name used to identify this system user.
     */
    name: string;
}
export interface VideoCopyright {
    /**
     * The video copyright ID
     */
    id: string;
    /**
     * The content category of the reference file.
     */
    content_category: 'episode' | 'movie' | 'web';
    /**
     * The copyright content ID
     */
    copyright_content_id: string;
    /**
     * The account that created the copyright
     */
    creator: User;
    /**
     * The list of audio and video segments excluded from copyright monitoring. This includes both self-defined excluded segments as well as system generated excluded segments.
     */
    excluded_ownership_segments: VideoCopyrightSegment[];
    /**
     * Whether the video copyright is in active conflict with another rights owner's video copyright.
     */
    in_conflict: boolean;
    /**
     * Whether the video is monitored successfully for copyright. The status could be NOT_EXAMINED, COPYRIGHTED, and ERROR.
     */
    monitoring_status: 'NOT_EXAMINED' | 'COPYRIGHTED' | 'ERROR';
    /**
     * Whether the video is monitored for VIDEO, AUDIO, or VIDEO_AND_AUDIO
     */
    monitoring_type: 'VIDEO' | 'AUDIO' | 'VIDEO_AND_AUDIO';
    /**
     * Two string arrays of [ISO 3166 format country codes](http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm). `included_countries` are where the owner owns the rights to the content. `excluded_countries` are where the owner does not own the rights to the content. When both lists are empty, rights ownership is worldwide.
     */
    ownership_countries: VideoCopyrightGeoGate;
    /**
     * The reference file
     */
    reference_file: CopyrightReferenceContainer;
    /**
     * Whether the reference file is disabled.
     */
    reference_file_disabled: boolean;
    /**
     * Whether the reference file has been disabled by ops.
     */
    reference_file_disabled_by_ops: boolean;
    /**
     * The ID of the reference video owner
     */
    reference_owner_id: string;
    /**
     * A list of matching rules applied to the copyrighted content
     */
    rule_ids: VideoCopyrightRule[];
    /**
     * The tags/keywords associated with the copyright
     */
    tags: string[];
    /**
     * A list of page IDs or user IDs, who are allowed to use the copyrighted content.
     */
    whitelisted_ids: string[];
}

export interface VideoCopyrightSegment {
    duration_in_sec: number;
    media_type: string;
    start_time_in_sec: number;
}

interface ShadowIGUser {
    /**
     * The id of the object
     */
    id: string;
    /**
     * Biography of the user
     */
    biography: string;
    /**
     * Loads business discovery information
     */
    business_discovery: ShadowIGUser;
    /**
     * Active follower count of the user
     */
    followers_count: number;
    /**
     * Active follows count of the user
     */
    follows_count: number;
    /**
     * Ig Id of the user
     */
    ig_id: number;
    /**
     * Filtered media count of the user
     */
    media_count: number;
    /**
     * Loads the comment if the user is mentioned in it
     */
    mentioned_comment: ShadowIGComment;
    /**
     * Loads the media if the user is mentioned in the caption
     */
    mentioned_media: ShadowIGMedia;
    /**
     * Name of the user
     */
    name: string;
    /**
     * The cdn url to query the raw profile picture of the user
     */
    profile_picture_url: string;
    /**
     * Status of the Shopping Merchant Review process for this account
     */
    shopping_review_status: string; // enum
    /**
     * Username handle of the user
     */
    username: string;
    /**
     * Url in the profile
     */
    website: string;
}

interface ShadowIGComment {
    /**
     * The id of the object
     */
    id: string;
    /**
     * Whether the comment is hidden
     */
    hidden: boolean;
    /**
     * Number of likes on the comment
     */
    like_count: number;
    /**
     * Media on which the comment is made
     */
    media: ShadowIGMedia;
    /**
     * Text of the comment
     */
    text: string;
    /**
     * Timestamp of comment
     */
    timestamp: string;
    /**
     * User who made the comment
     */
    user: ShadowIGUser;
    /**
     * username of the commenter
     */
    username: string;
}
interface ShadowIGMedia {
    /**
     * Id
     */
    id: string;
    /**
     * Caption
     */
    caption: string;
    /**
     * Comments Count
     */
    comments_count: number;
    /**
     * IgId
     */
    ig_id: string;
    /**
     * IsCommentEnabled
     */
    is_comment_enabled: boolean;
    /**
     * Likes Count
     */
    like_count: number;
    /**
     * MediaType
     */
    media_type: string;
    /**
     * MediaUrl
     */
    media_url: string;
    /**
     * Owner
     */
    owner: ShadowIGUser;
    /**
     * Permalink
     */
    permalink: string;
    /**
     * Shortcode
     */
    shortcode: string;
    /**
     * ThumbnailUrl
     */
    thumbnail_url: string;
    /**
     * Timestamp
     */
    timestamp: string;
    /**
     * Username of the media owner
     */
    username: string;
}

export interface ConversationParticipant {
    name: string;
    email: string;
    id: string;
}

export interface Conversation {
    /**
     * The ID of a conversation, in a format similar to `t_000000000000000`
     */
    id: string;
    /**
     * The url to the thread
     */
    link: string;
    /**
     * The snippet of the most recent message in a conversation
     */
    snippet: string;
    /**
     * Last update time
     */
    updated_time: string;
    /**
     * An estimate of the number of messages
     */
    message_count: number;
    /**
     * An estimate of the number of unread messages
     */
    unread_count: number;
    /**
     * List of participants who are currently subscribed to the thread
     */
    participants: ConversationParticipant[];
    /**
     * List of participants who are currently subscribed to the thread
     */
    senders: ConversationParticipant[];
    /**
     * Whether the Page is able to reply
     */
    can_reply: boolean;
    /**
     * Whether the Page is subscribed to the conversation
     */
    is_subscribed: boolean;
}

interface AdSet {
    /**
`    * ID for the Ad Set
     */
    id: string;
    /**
     * ID for the Ad Account associated with this Ad Set
     */
    account_id: string;
    /**
     * Ad Labels associated with this ad set
     */
    adlabels: AdLabel[];
    /**
     * Ad set schedule, representing a delivery schedule for a single day
     */
    adset_schedule: DayPart[];
    /**
     * The ID of the asset feed that constains a content to create ads
     */
    asset_feed_id: string;
    /**
     * Conversion attribution spec used for attributing conversions for optimization. Supported window lengths differ by optimization goal and campaign objective. See [Validation, Attribution Spec](https://developers.facebook.com/docs/marketing-api/validation#attribution_spec).
     */
    attribution_spec: AttributionSpec[];
    /**
     * Map of bid adjustment types to values
     */
    bid_adjustments: AdBidAdjustments;
    /**
     * Bid cap or target cost for this ad set. The bid cap used in a *lowest cost bid strategy* is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a *target cost bid strategy* lets Facebook bid on your behalf to meet your target on average and keep costs stable as you raise budget.
     *
     * The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount for ads with `IMPRESSION` or `REACH` as `billing_event` is per 1,000 occurrences of that event, and the bid amount for ads with other `billing_event`s is for each occurrence.
     */
    bid_amount: number;
    /**
     * Choose bid constraints for ad set to suit your specific business goals. It usually works together with `bid_strategy` field.
     */
    bid_constraints: AdCampaignBidConstraint;
    /**
     * Map of bid objective to bid value.
     */
    bid_info: { [key: string]: number };
    /**
     * Bid strategy for this ad set when you use `AUCTION` as your buying type:
     *
     * `LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on
     * your ad set `optimization_goal` without limiting your bid amount. This is the best strategy
     * if you care most about cost efficiency. However with this strategy it may be harder to get
     * stable average costs as you spend. This strategy is also known as *automatic bidding*.
     * Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).
     *
     * `LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on
     * your ad set `optimization_goal` while limiting actual bid to your specified
     * amount. With a bid cap you have more control over your
     * cost per actual optimization event. However if you set a limit which is too low you may
     * get less ads delivery. Get your bid cap with the field `bid_amount`.
     * This strategy is also known as *manual maximum-cost bidding*.
     * Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).
     *
     * Notes:
     *
     * - If you enable campaign budget optimization, you should get `bid_strategy` at the parent campaign level.
     * - TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).
     */
    bid_strategy: 'LOWEST_COST_WITHOUT_CAP' | 'LOWEST_COST_WITH_BID_CAP' | 'COST_CAP';
    /**
     * The billing event for this ad set:
     *
     *`APP_INSTALLS`: Pay when people install your app.
     *
     *`CLICKS`: Pay when people click anywhere in the ad.
     *
     *`IMPRESSIONS`: Pay when the ads are shown to people.
     *
     *`LINK_CLICKS`: Pay when people click on the link of the ad.
     *
     *`OFFER_CLAIMS`: Pay when people claim the offer.
     *
     *`PAGE_LIKES`: Pay when people like your page.
     *
     *`POST_ENGAGEMENT`: Pay when people engage with your post.
     *
     *`VIDEO_VIEWS`: Pay when people watch your video ads for at least 10 seconds.
     *
     *`THRUPLAY`: Pay for ads that are played to completion, or played for at least 15 seconds.
     */
    billing_event:
        | 'APP_INSTALLS'
        | 'CLICKS'
        | 'IMPRESSIONS'
        | 'LINK_CLICKS'
        | 'NONE'
        | 'OFFER_CLAIMS'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'THRUPLAY';
    /**
     * Remaining budget of this Ad Set
     */
    budget_remaining: string;
    /**
     * The campaign that contains this ad set
     */
    campaign: Campaign;
    /**
     * The ID of the campaign that contains this ad set
     */
    campaign_id: string;
    /**
     * The status set at the ad set level. It can be different from the
     * effective status due to its parent campaign. Prefer using 'status'
     * instead of this.
     */
    configured_status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    /**
     * specs of contextual bundling Ad Set setup, including signal of opt-in/out the feature
     */
    contextual_bundling_spec: unknown; // ContextualBundlingSpec
    /**
     * Time when this Ad Set was created
     */
    created_time: string;
    /**
     * Order of the adgroup sequence to be shown to users
     */
    creative_sequence: string[];
    /**
     * The daily budget of the set defined in your [account currency](https://developers.facebook.com/docs/marketing-api/adset/budget-limits).
     */
    daily_budget: string;
    /**
     * Daily minimum spend target of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign. This target is not a guarantee but our best effort.
     */
    daily_min_spend_target: string;
    /**
     * Daily spend cap of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign.
     */
    daily_spend_cap: string;
    /**
     * Destination of ads in this Ad Set. For example: Website, App and Messenger.
     */
    destination_type: string;
    /**
     * The effective status of the adset. The status could be effective either
     * because of its own status, or the status of its parent campaign. `WITH_ISSUES` is available for version 3.2 or higher. `IN_PROCESS` is available for version 4.0 or higher.
     */
    effective_status:
        | 'ACTIVE'
        | 'PAUSED'
        | 'DELETED'
        | 'CAMPAIGN_PAUSED'
        | 'ARCHIVED'
        | 'IN_PROCESS'
        | 'WITH_ISSUES';
    /**
     * End time, in UTC UNIX timestamp
     */
    end_time: string;
    /**
     * An array of frequency control specs for this ad set. As there is only one event type currently supported, this array has no more than one element. Writes to this field are only available in ad sets where `REACH` is the objective.
     */
    frequency_control_specs: AdCampaignFrequencyControlSpecs[];
    /**
     * Represents your Instagram account id, used for ads, including dynamic creative ads on Instagram.
     */
    instagram_actor_id: string;
    /**
     * Whether this ad set is a dynamic creative ad set. dynamic creative ad can be created only under ad set with this field set to be true.
     */
    is_dynamic_creative: boolean;
    /**
     * Issues for this ad set that prevented it from deliverying
     */
    issues_info: AdCampaignIssuesInfo[];
    /**
     * Info about whether the ranking or delivery system is still learning for this ad set. While the ad set is still in learning , we might unstablized delivery performances.
     */
    learning_stage_info: AdCampaignLearningStageInfo;
    /**
     * The lifetime budget of the set defined in your [account currency](https://developers.facebook.com/docs/marketing-api/adset/budget-limits).
     */
    lifetime_budget: string;
    /**
     * Lifetime impressions. Available only for campaigns with `buying_type=FIXED_CPM`
     */
    lifetime_imps: number;
    /**
     * Lifetime minimum spend target of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign. This target is not a guarantee but our best effort.
     */
    lifetime_min_spend_target: string;
    /**
     * Lifetime spend cap of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign.
     */
    lifetime_spend_cap: string;
    /**
     * multi_optimization_goal_weight
     */
    multi_optimization_goal_weight: string;
    /**
     * Name of the ad set
     */
    name: string;
    /**
     * Which optimization goal this ad set is using:
     *
     * `NONE`: Only available in read mode for campaigns created pre v2.4.
     *
     * `APP_INSTALLS`: Optimize for people more likely to install your app.
     *
     * `AD_RECALL_LIFT`: Optimize for people more likely to remember seeing your ads.
     *
     * `CLICKS`: Deprecated. Only available in read mode.
     *
     * `ENGAGED_USERS`: Optimize for people more likely to take a particular action in your app.
     *
     * `EVENT_RESPONSES`: Optimize for people more likely to attend your event.
     *
     * `IMPRESSIONS`: Show the ads as many times as possible.
     *
     * `LEAD_GENERATION`: Optimize for people more likely to fill out a lead generation form.
     *
     * `LINK_CLICKS`: Optimize for people more likely to click in the link of the ad.
     *
     * `OFFER_CLAIMS`: Optimize for people more likely to claim the offer.
     *
     * `OFFSITE_CONVERSIONS`: Optimize for people more likely to make a conversion in the site
     *
     * `PAGE_ENGAGEMENT`: Optimize for people more likely to engage with your page.
     *
     * `PAGE_LIKES`: Optimize for people more likely to like your page.
     *
     * `POST_ENGAGEMENT`: Optimize for people more likely to engage with your post.
     *
     * `REACH`: Optimize to reach the most unique users of each day or interval specified in `frequency_control_specs`.
     *
     * `SOCIAL_IMPRESSIONS`: Increase the number of impressions with social context. I.e. with the names of one or more of the user's friends attached to the ad who have already liked the page or installed the app.
     *
     * `VALUE`: Optimize for maximum total purchase value within the specified attribution window.
     *
     * `THRUPLAY`: Optimize delivery of your ads to people who are more likely to play your ad to completion, or play it for at least 15 seconds.
     *
     * `REPLIES`: Directs ads to people more likely to have a conversation with the business.
     *
     * `DERIVED_EVENTS`: Optimize for retention, which reaches people who are most likely to return to the app and open it again during a given time frame after installing. You can choose either two days, meaning the app is likely to be reopened between 24 and 48 hours after installation; or seven days, meaning the app is likely to be reopened between 144 and 168 hours after installation.
     */
    optimization_goal:
        | 'NONE'
        | 'APP_INSTALLS'
        | 'BRAND_AWARENESS'
        | 'AD_RECALL_LIFT'
        | 'CLICKS'
        | 'ENGAGED_USERS'
        | 'EVENT_RESPONSES'
        | 'IMPRESSIONS'
        | 'LEAD_GENERATION'
        | 'QUALITY_LEAD'
        | 'LINK_CLICKS'
        | 'OFFER_CLAIMS'
        | 'OFFSITE_CONVERSIONS'
        | 'PAGE_ENGAGEMENT'
        | 'PAGE_LIKES'
        | 'POST_ENGAGEMENT'
        | 'QUALITY_CALL'
        | 'REACH'
        | 'SOCIAL_IMPRESSIONS'
        | 'APP_DOWNLOADS'
        | 'TWO_SECOND_CONTINUOUS_VIDEO_VIEWS'
        | 'LANDING_PAGE_VIEWS'
        | 'VISIT_INSTAGRAM_PROFILE'
        | 'VALUE'
        | 'THRUPLAY'
        | 'REPLIES'
        | 'DERIVED_EVENTS';
    /**
     * Optimization sub event for a specific optimization goal. For example: Sound-On event for Video-View-2s optimization goal.
     */
    optimization_sub_event: string;
    /**
     * Defines the pacing type, standard or using ad scheduling
     */
    pacing_type: string[];
    /**
     * The object this ad set is promoting across all its ads.
     */
    promoted_object: AdPromotedObject;
    /**
     * If there are recommendations for this ad set, this field includes them. Otherwise, will not be included in the response. This field is not included in redownload mode.
     */
    recommendations: AdRecommendation[];
    /**
     * If this field is `true`, your daily spend may be more than your daily budget while your weekly spend will not exceed 7 times your daily budget. More details explained in the [Ad Set Budget](https://developers.facebook.com/docs/marketing-api/adset/budget-limits) document. If this is `false`, your amount spent daily will not exceed the daily budget. This field is not applicable for lifetime budgets.
     */
    recurring_budget_semantics: boolean;
    /**
     * Reviews for dynamic creative ad
     */
    review_feedback: string;
    /**
     * Reach and frequency prediction ID
     */
    rf_prediction_id: string;
    /**
     * The source ad set that this ad set was copied from
     */
    source_adset: AdSet;
    /**
     * The source ad set id that this ad set was copied from
     */
    source_adset_id: string;
    /**
     * Start time, in UTC UNIX timestamp
     */
    start_time: string;
    /**
     * The status set at the ad set level. It can be different from the
        effective status due to its parent campaign. The field returns the same
        value as `configured_status`, and is the suggested one to use.
     */
    status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    /**
     * Targeting
     */
    targeting: Targeting;
    /**
     * Specify ad creative that displays at custom date ranges in a campaign
     * as an array. A list of Adgroup IDs. The list of ads to display for each
     * time range in a given schedule. For example display first ad in Adgroup
     * for first date range, second ad for second date range, and so on. You
     * can display more than one ad per date range by providing more than
     * one ad ID per array. For example set
     * `time_based_ad_rotation_id_blocks` to [[1], [2, 3], [1, 4]]. On the
     * first date range show ad 1, on the second date range show ad 2 and ad 3
     * and on the last date range show ad 1 and ad 4. Use with
     * time_based_ad_rotation_intervals` to specify date ranges.
     */
    time_based_ad_rotation_id_blocks: number[][];
    /**
     * Date range when specific ad creative displays during a campaign.
     * Provide date ranges in an array of UNIX timestamps where each
     * timestamp represents the start time for each date range. For example a
     * 3-day campaign from May 9 12am to  May 11 11:59PM PST can have three
     * date ranges, the first date range starts from May 9 12:00AM to
     * May 9 11:59PM, second date range starts from May 10 12:00AM to
     * May 10 11:59PM and last starts from  May 11 12:00AM to  May 11 11:59PM.
     * The first timestamp should match the campaign start time. The last
     * timestamp should be at least 1 hour before the campaign end time. You
     * must provide at least two date ranges. All date ranges must cover the
     * whole campaign length, so any date range cannot exceed campaign length.
     * Use with `time_based_ad_rotation_id_blocks` to specify ad creative for
     * each date range.
     */
    time_based_ad_rotation_intervals: number[];
    /**
     * Time when the Ad Set was updated
     */
    updated_time: string;
    /**
     * If set, allows Mobile App Engagement ads to optimize for LINK_CLICKS
     */
    use_new_app_click: boolean;
}

interface AdBidAdjustments {
    age_range: { [key: string]: number };
    page_types: unknown;
    user_groups: string;
}

interface AdCampaignBidConstraint {
    roas_average_flow: number;
}

interface AdCampaignIssuesInfo {
    /**
     * Error code for the issue
     */
    error_code: string;
    /**
     * Error message for this ad set with issue
     */
    error_message: string;
    /**
     * Error summary for this ad set with issue
     */
    error_summary: string;
    /**
     * error_type
     */
    error_type: string;
    /**
     * Indicate level of issue, could be ad set or campaign
     */
    level: string;
}

interface AdCampaignFrequencyControlSpecs {
    /**
     * Event name, only `IMPRESSIONS` currently.
     */
    event: 'IMPRESSIONS';
    /**
     * Interval period in days, between 1 and 90 (inclusive)
     */
    interval_days: number;
    /**
     * The maximum frequency, between 1 and 90 (inclusive)
     */
    max_frequency: number;
}

interface AdCampaignLearningStageInfo {
    /**
     * Number of days between when a person viewed or clicked your ad and subsequently took action. By default, the attribution window is set to 1-day view and 28-day click.
     */
    attribution_windows: string[];
    /**
     * Number of conversions ad set generated since the time of its last significant edit during the learning phase. Significant edits cause ad sets to reenter the learning phase.
     *
     * If ad set has exited the learning phase successfully, this number will return zero.
     */
    conversions: number;
    /**
     * Timestamp of the last significant edit that caused ad set to reenter the learning phase.
     */
    last_sig_edit_ts: number;
    /**
     * Learning Phase progress for ad set. Possible values include:
     *
     * LEARNING: Ad set is still learning. SUCCESS: Ad set exited learning phase. FAIL: Ad set isn’t generating enough results to exit learning phase.
     */
    status: 'LEARNING' | 'SUCCESS' | 'FAIL';
}

interface AdPromotedObject {
    /**
     * The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement
     */
    application_id: string;
    /**
     * The ID of a Custom Conversion.
     */
    custom_conversion_id: string;
    /**
     * custom_event_str
     */
    custom_event_str: string;
    /**
     * The event from an App Event of a mobile app, (Purchase, Lead or CompleteRegistration) event from Offline Conversion data, or `tag` of an [conversion pixel](https://developers.facebook.com/docs/marketing-api/offsite-pixels).
     */
    custom_event_type:
        | 'RATE'
        | 'TUTORIAL_COMPLETION'
        | 'CONTACT'
        | 'CUSTOMIZE_PRODUCT'
        | 'DONATE'
        | 'FIND_LOCATION'
        | 'SCHEDULE'
        | 'START_TRIAL'
        | 'SUBMIT_APPLICATION'
        | 'SUBSCRIBE'
        | 'ADD_TO_CART'
        | 'ADD_TO_WISHLIST'
        | 'INITIATED_CHECKOUT'
        | 'ADD_PAYMENT_INFO'
        | 'PURCHASE'
        | 'LEAD'
        | 'COMPLETE_REGISTRATION'
        | 'CONTENT_VIEW'
        | 'SEARCH'
        | 'SERVICE_BOOKING_REQUEST'
        | 'MESSAGING_CONVERSATION_STARTED_7D'
        | 'LEVEL_ACHIEVED'
        | 'ACHIEVEMENT_UNLOCKED'
        | 'SPENT_CREDITS'
        | 'LISTING_INTERACTION'
        | 'D2_RETENTION'
        | 'D7_RETENTION'
        | 'OTHER';
    /**
     * The ID of a Facebook Event
     */
    event_id: string;
    /**
     * The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.
     */
    object_store_url: string;
    /**
     * The ID of an Offer from a Facebook Page.
     */
    offer_id: string;
    /**
     * The ID of the offline dataset.
     */
    offline_conversion_data_set_id: string;
    /**
     * The ID of a Facebook Page
     */
    page_id: string;
    /**
     * A JSON rule that will decide whether an action from a pixel matches this promoted object spec based on aggregated results from previous pixel fires.
     */
    pixel_aggregation_rule: string;
    /**
     * The ID of a Facebook conversion pixel. Used with offsite conversion campaigns.
     */
    pixel_id: string;
    /**
     * A JSON rule that will decide whether an action from a pixel matches this promoted object spec
     */
    pixel_rule: string;
    /**
     * The ID of a Place Page Set for Dynamic Local Ads.
     */
    place_page_set_id: string;
    /**
     * The ID of a Product Catalog. Used with [Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).
     */
    product_catalog_id: string;
    /**
     * The ID of a Product Set within an Ad Set level Product Catalog. Used with [Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).
     */
    product_set_id: string;
    /**
     * Value for retention period for aggregation based rule for the promoted object.
     */
    retention_days: string;
}

interface DayPart {
    /**
     * Days schedule active. Valid values: 0-6 where 0 is Sunday, 1 is Monday, and 6 is Saturday.
     */
    days: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
    /**
     * 0 based minute of day. When schedule ends
     */
    end_minute: number;
    /**
     * 0 based minute of day. When schedule starts
     */
    start_minute: number;
    /**
     * Default value: USER
     */
    timezone_type: 'USER' | 'ADVERTISER';
}

interface AdRecommendation {
    /**
     * Field to associate the recommendation with (optional)
     */
    blame_field: string;
    /**
     * Unique recommendation code
     */
    code: number;
    /**
     * Indicator of how reliable recommendation is. Allowed values are: `HIGH`, `MEDIUM`, `LOW`
     */
    confidence: 'HIGH' | 'MEDIUM' | 'LOW';
    /**
     * Indicator of how important recommendation is. Allowed values are: `HIGH`, `MEDIUM`, `LOW`
     */
    importantance: 'HIGH' | 'MEDIUM' | 'LOW';
    /**
     * Content of the recommendation message
     */
    message: string;
    /**
     * Additional data associated with the recommendation. Returned fields can vary depending on the recommendation code.
     */
    recommendation_data: AdRecommendationData;
    /**
     * Recommendation title
     */
    title: string;
}

interface AdRecommendationData {
    limk: string;
}

interface AttributionSpec {
    event_type: 'CLICK_THROUGH' | 'VIEW_THROUGH';
    window_days: number;
}

interface AdLabel {
    /**
     * Ad Label ID
     */
    id: string;
    /**
     * Ad Account
     */
    account: AdAccount;
    /**
     * Created time
     */
    created_time: string;
    /**
     * Ad Label name
     */
    name: string;
    /**
     * Updated time
     */
    updated_time: string;
}

export interface AdAccount {
    /**
     * The ID of the Ad Account.
     */
    account_id: string;
    /**
     * Status of the account:
     *
     *`1 = ACTIVE`
     *
     *`2 = DISABLED`
     *
     *`3 = UNSETTLED`
     *
     *`7 = PENDING_RISK_REVIEW`
     *
     *`8 = PENDING_SETTLEMENT`
     *
     *`9 = IN_GRACE_PERIOD`
     *
     *`100 = PENDING_CLOSURE`
     *
     *`101 = CLOSED`
     *
     *`201 = ANY_ACTIVE`
     *
     *`202 = ANY_CLOSED`
     */
    account_status: number;
    /**
     * Ad Account creation request purchase order fields associated with this Ad Account.
     */
    ad_account_promotable_objects: AdAccountPromotableObjects;
    /**
     * The string `act_{ad_account_id}`.
     */
    id: string;
    /**
     * Amount of time the ad account has been open, in days.
     */
    age: number;
    /**
     * Details of the agency advertising on behalf of this client account, if applicable. Note that you need to be a business admin to access this information.
     */
    agency_client_declaration: AgencyClientDeclaration;
    /**
     * Current total amount spent by the account. This can be reset.
     */
    amount_spent: string;
    /**
     * **Deprecated due to iOS 14 changes.** Please visit the [changelog](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/jan-19-2021) for more information.
     */
    attribution_spec: AttributionSpec[];
    /**
     * Bill amount due for this Ad Account.
     */
    balance: string;
    /**
     * The [Business Manager](https://developers.facebook.com/docs/marketing-api/businessmanager), if this ad account is owned by one
     */
    business: Business;
    /**
     * City for business address
     */
    business_city: string;
    /**
     * Country code for the business address
     */
    business_country_code: string;
    /**
     * The business name for the account
     */
    business_name: string;
    /**
     * State abbreviation for business address
     */
    business_state: string;
    /**
     * First line of the business street address for the account
     */
    business_street: string;
    /**
     * Second line of the business street address for the account
     */
    business_street2: string;
    /**
     * Zip code for business address
     */
    business_zip: string;
    /**
     * If we can create a new automated brand lift study under the Ad Account.
     */
    can_create_brand_lift_study: boolean;
    /**
     * List of capabilities an Ad Account can have. See [capabilities](https://developers.facebook.com/docs/marketing-api/reference/ad-account/capabilities)
     */
    capabilities: string[];
    /**
     * The time the account was created in ISO 8601 format.
     */
    created_time: string;
    /**
     * The currency used for the account, based on the corresponding value in the account settings. See [supported currencies](https://developers.facebook.com/docs/marketing-api/currencies)
     */
    currency: string;
    /**
     * Whether DirectDeals ToS are accepted.
     */
    direct_deals_tos_accepted: boolean;
    /**
     * The reason why the account was disabled. Possible reasons are:
     *
     * `0 = NONE`
     *
     * `1 = ADS_INTEGRITY_POLICY`
     *
     * `2 = ADS_IP_REVIEW`
     *
     * `3 = RISK_PAYMENT`
     *
     * `4 = GRAY_ACCOUNT_SHUT_DOWN`
     *
     * `5 = ADS_AFC_REVIEW`
     *
     * `6 = BUSINESS_INTEGRITY_RAR`
     *
     * `7 = PERMANENT_CLOSE`
     *
     * `8 = UNUSED_RESELLER_ACCOUNT`
     *
     * `9 = UNUSED_ACCOUNT `
     */
    disable_reason: number;
    /**
     * The entity the ads will target. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID.
     */
    end_advertiser: string;
    /**
     * The name of the entity the ads will target.
     */
    end_advertiser_name: string;
    /**
     * The extended credit invoice group that the ad account belongs to
     */
    extended_credit_invoice_group: ExtendedCreditInvoiceGroup;
    /**
     * Failed delivery checks
     */
    failed_delivery_checks: DeliveryCheck[];
    /**
     * fb_entity
     */
    fb_entity: number;
    /**
     * ID of the payment method. If the account does not have a payment method it will still be possible to create ads but these ads will get no delivery. Not available if the account is disabled
     */
    funding_source: string;
    /**
     * `ID` = ID of the payment method
     *
     * `COUPON` = Details of the Facebook Ads Coupon from the payment method
     *
     * `AMOUNT` = Amount of Facebook Ads Coupon
     *
     * `CURRENCY` = Currency of the Facebook Ads Coupon
     *
     * `DISPLAY_AMOUNT` = How the amount of Facebook Ads Coupon is displayed
     *
     * `EXPIRATION` = When the coupon will expire
     *
     * `DISPLAY_STRING` = How the payment method is shown
     *
     * `TYPE` = Type of the funding source
     *
     * `0 = UNSET`
     *
     * `1 = CREDIT_CARD`
     *
     * `2 = FACEBOOK_WALLET`
     *
     * `3 = FACEBOOK_PAID_CREDIT`
     *
     * `4 = FACEBOOK_EXTENDED_CREDIT`
     *
     * `5 = ORDER`
     *
     * `6 = INVOICE`
     *
     * `7 = FACEBOOK_TOKEN`
     *
     * `8 = EXTERNAL_FUNDING`
     *
     * `9 = FEE`
     *
     * `10 = FX`
     *
     * `11 = DISCOUNT`
     *
     * `12 = PAYPAL_TOKEN`
     *
     * `13 = PAYPAL_BILLING_AGREEMENT`
     *
     * `14 = FS_NULL`
     *
     * `15 = EXTERNAL_DEPOSIT`
     *
     * `16 = TAX`
     *
     * `17 = DIRECT_DEBIT`
     *
     * `18 = DUMMY`
     *
     * `19 = ALTPAY`
     *
     * `20 = STORED_BALANCE`
     *
     * To access this field, the user making the API call must have a `MANAGE` task permission for that specific ad account. See [Ad Account, Assigned Users](https://developers.facebook.com/docs/marketing-api/reference/ad-account/assigned_users/) for more information.
     */
    funding_source_details: FundingSourceDetails;
    /**
     * Whether this account has migrated permissions
     */
    has_migrated_permissions: boolean;
    /**
     * Indicates whether a Facebook page has authorized this ad account to place ads with political content. If you try to place an ad with political content using this ad account for this page, and this page has not authorized this ad account for ads with political content, your ad will be disapproved. See [Breaking Changes, Marketing API, Ads with Political Content](https://developers.facebook.com/docs/graph-api/changelog/breaking-changes#4-23-2018) and [Facebook Advertising Policies](https://www.facebook.com/policies/ads)
     */
    has_page_authorized_adaccount: boolean;
    /**
     * The Insertion Order (IO) number.
     */
    io_number: string;
    /**
     * If the attribution specification of ad account is generated from system default values
     */
    is_attribution_spec_system_default: boolean;
    /**
     * Whether the account is enabled to run Direct Deals
     */
    is_direct_deals_enabled: boolean;
    /**
     * If the account is in a market requiring to go through payment process going through 3DS authorization
     */
    is_in_3ds_authorization_enabled_market: boolean;
    /**
     * If the account is in the peroid localization project rolling out
     */
    is_in_middle_of_local_entity_migration: boolean;
    /**
     * Get the notifications status of the user for this ad account. This will return true or false depending if notifications are enabled or not
     */
    is_notifications_enabled: boolean;
    /**
     * Indicates if this ad account is being used for private, non-business purposes. This affects how value added tax (VAT) is assessed. NOTE: This does is not related to whether an Ad Account is attached to a business.
     */
    is_personal: number;
    /**
     * If this ad account is a prepay. Other option would be a postpay account.
     */
    is_prepay_account: boolean;
    /**
     * If tax id for this ad account is required or not
     */
    is_tax_id_required: boolean;
    /**
     * The line numbers
     */
    line_numbers: number[];
    /**
     * The agency, this could be your own business. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`.
     */
    media_agency: string;
    /**
     * The minimum required spend cap of Ad Campaign.
     */
    min_campaign_group_spend_cap: string;
    /**
     * The minimum daily budget for this Ad Account
     */
    min_daily_budget: number;
    /**
     * Name of the account. If not set, the name of the first admin visible to the user will be returned.
     */
    name: string;
    /**
     * Indicates whether the offsite pixel Terms Of Service contract was signed. This feature can be accessible before v2.9
     */
    offsite_pixels_tos_accepted: boolean;
    /**
     * The ID of the account owner
     */
    owner: string;
    /**
     * This could be Facebook Marketing Partner, if there is one. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`.
     */
    partner: string;
    /**
     * Reach and Frequency limits configuration. [See Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency)
     */
    rf_spec: ReachFrequencySpec;
    /**
     * Whether or not to show the pre-paid checkout experience to an advertiser. If `true`, the advertiser is eligible for checkout, or they are already locked in to checkout and haven't graduated to postpay.
     */
    show_checkout_experience: boolean;
    /**
     * The maximum amount that can be spent by this Ad Account. When the amount is reached, related Ad Campaigns are paused. A value of `0` means no spending-cap. Setting a new spend cap only applies to spend **AFTER** the time at which you set it. Value specified in basic unit of the currency, for example 'cents' for `USD`.
     */
    spend_cap: string;
    /**
     * Tax ID
     */
    tax_id: string;
    /**
     * VAT status code for the account.
     *
     *`0`: Unknown
     *
     *`1`: VAT not required- US/CA
     *
     *`2`: VAT information required
     *
     *`3`: VAT information submitted
     *
     *`4`: Offline VAT validation failed
     *
     *`5`: Account is a personal account
     */
    tax_id_status: number;
    /**
     * Type of Tax ID
     */
    tax_id_type: string;
    /**
     * The [timezone ID](https://developers.facebook.com/docs/marketing-api/reference/ad-account/timezone-ids) of this ad account
     */
    timezone_id: number;
    /**
     * Name for the time zone
     */
    timezone_name: string;
    /**
     * Time zone difference from UTC (Coordinated Universal Time).
     */
    timezone_offset_hours_utc: number;
    /**
     * Checks if this specific ad account has signed the Terms of Service contracts. Returns `1`, if terms were accepted.
     */
    tos_accepted: { [key: string]: number };
    /**
     * user_tasks
     */
    user_tasks: string[];
    /**
     * Checks if a user has signed the Terms of Service contracts related to the Business that contains a specific ad account. Must include user's access token to get information. This verification is not valid for [system users](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser).
     */
    user_tos_accepted: { [key: string]: number };
}

export interface AdAccountPromotableObjects {
    promotable_app_ids: string[];
    promotable_page_ids: string[];
    promotable_urls: string[];
}

interface FundingSourceDetails {
    /**
     * Details of the Facebook Ads Coupon from the payment method
     */
    coupon: FundingSourceDetailsCoupon;
    /**
     * How the payment method is shown
     */
    display_string: string;
    /**
     * ID of the payment method
     */
    id: string;
    /**
     * Type of the funding source
     *
     * `0 = UNSET`
     *
     * `1 = CREDIT_CARD`
     *
     * `2 = FACEBOOK_WALLET`
     *
     * `3 = FACEBOOK_PAID_CREDIT`
     *
     * `4 = FACEBOOK_EXTENDED_CREDIT`
     *
     * `5 = ORDER`
     *
     * `6 = INVOICE`
     *
     * `7 = FACEBOOK_TOKEN`
     *
     * `8 = EXTERNAL_FUNDING`
     *
     * `9 = FEE`
     *
     * `10 = FX`
     *
     * `11 = DISCOUNT`
     *
     * `12 = PAYPAL_TOKEN`
     *
     * `13 = PAYPAL_BILLING_AGREEMENT`
     *
     * `14 = FS_NULL`
     *
     * `15 = EXTERNAL_DEPOSIT`
     *
     * `16 = TAX`
     *
     * `17 = DIRECT_DEBIT`
     *
     * `18 = DUMMY`
     *
     * `19 = ALTPAY`
     *
     * `20 = STORED_BALANCE`
     */
    type:
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20;
}

interface FundingSourceDetailsCoupon {
    /**
     * Amount of Facebook Ads Coupon
     */
    amount: number;
    /**
     * Currency of the Facebook Ads Coupon
     */
    currency: string;
    /**
     * How the amount of Facebook Ads Coupon is displayed
     */
    display_amount: string;
    /**
     * When the coupon will expire
     */
    expiration: string;
}

interface ReachFrequencySpec {
    /**
     * ID
     */
    id: string;
    /**
     * Shows if the adaccount using the current credit will be enrolled into the invoice group automatically
     */
    auto_enroll: boolean;
    /**
     * The customer PO number of this invoice group assigned by the customer creating or editing the group
     */
    customer_po_number: string;
    /**
     * The invoice email object associated with this invoice group and only allow one email address associated with one group
     */
    email: unknown; // ExtendedCreditEmail
    /**
     * The invoice emails attached to the invoice group
     */
    emails: string[];
    /**
     * Extended credit invoice group name assigned
     */
    name: string;
}

interface DeliveryCheck {
    /**
     * The name of the failed check (See [Delivery Check types](https://developers.facebook.com/docs/marketing-api/adgroup/deliverychecks/v9.0#types))
     */
    check_name:
        | 'page_status'
        | 'mobile_eligible'
        | 'blocked_url'
        | 'invalid_custom_audiences'
        | 'logged_out_ads';
    /**
     * One line description of the error
     */
    summary: string;
    /**
     * More detailed explanation of the error
     */
    description: string;
}

interface AgencyClientDeclaration {
    /**
     * Whether this account is for an agency representing a client
     */
    agency_representing_client: number;
    /**
     * Whether the client is based in France */
    client_based_in_france: number;
    /**
     * Client's city
     */
    client_city: string;
    /**
     * Client's country code
     */
    client_country_code: string;
    /**
     * Client's email address
     */
    client_email_address: string;
    /**
     * Name of the client
     */
    client_name: string;
    /**
     * Client's postal code
     */
    client_postal_code: string;
    /**
     * Client's province
     */
    client_province: string;
    /**
     * First line of client's street address
     */
    client_street: string;
    /**
     * Second line of client's street address
     */
    client_street2: string;
    /**
     * Whether the agency has a written mandate to advertise on behalf of this client
     */
    has_written_mandate_from_advertiser: number;
    /**
     * Whether the client is paying via invoice
     */
    is_client_paying_invoices: number;
}

type CountryCode =
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AN'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

interface Campaign {
    /**
     * Campaign's ID
     */
    id: string;
    /**
     * ID of the ad account that owns this campaign
     */
    account_id: string;
    /**
     * Ad Strategy ID
     */
    ad_strategy_id: string;
    /**
     * Ad Labels associated with this campaign
     */
    adlabels: AdLabel[];
    /**
     * Bid strategy for this campaign when you enable campaign budget optimization and
     * when you use `AUCTION` as your buying type:
     *
     * `LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on
     * your ad set `optimization_goal` without limiting your bid amount. This is the best strategy to select
     * if you care most about cost efficiency. However, note that it may be harder to get
     * stable average costs as you spend. Note: this strategy is also known as
     * *automatic bidding*.
     * Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).
     *
     * `LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on
     * your ad set `optimization_goal` while limiting actual bid to a specified amount.
     * Get specified bid cap in the `bid_amount` field for each ad set in this ad campaign.
     * This strategy is known as *manual maximum-cost bidding*.
     * Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).
     *
     * COST_CAP`: Designed to get the most results for your budget based on
     * your ad set `optimization_goal` while limiting actual average cost per optimization event to a specified amount.
     * Get specified cost cap in the `bid_amount` field for each ad set in this ad campaign.
     * Learn more in [Ads Help Center, About bid strategies: Cost Cap](https://www.facebook.com/business/help/272336376749096?id=2196356200683573).
     *
     * Notes:
     * - If you do not enable campaign budget optimization, you should get `bid_strategy` at the ad set level.
     * - `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).
     */
    bid_strategy: 'LOWEST_COST_WITHOUT_CAP' | 'LOWEST_COST_WITH_BID_CAP' | 'COST_CAP';
    /**
     * The Boosted Object this campaign has associated, if any
     */
    boosted_object_id: string;
    /**
     * Automated Brand Lift V2 studies for this ad set.
     */
    brand_lift_studies: AdStudy[];
    /**
     * Remaining budget
     */
    budget_remaining: string;
    /**
     * Buying type, possible values are:
     *
     * `AUCTION`: default
     *
     * `RESERVED`: for [reach and frequency ads](https://developers.facebook.com/docs/marketing-api/reachandfrequency)<gk project="devsite_docs_internal">.</gk>
     *
     * [Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency) is disabled for [housing, employment and credit ads](https://developers.facebook.com/docs/marketing-api/special-ad-category).
     */
    buying_type: 'AUCTION' | 'RESERVED';
    /**
     * If we can create a new automated brand lift study for the ad set.
     */
    can_create_brand_lift_study: boolean;
    /**
     * Whether the campaign can set the spend cap
     */
    can_use_spend_cap: boolean;
    /**
     * If this status is `PAUSED`, all its active ad sets and ads will
        be paused and have an effective status `CAMPAIGN_PAUSED`. Prefer
        using 'status' instead of this.
     */
    configured_status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    /**
     * Created Time
     */
    created_time: string;
    /**
     * The daily budget of the campaign
     */
    daily_budget: string;
    /**
     * IN_PROCESS is available for version 4.0 or higher
     */
    effective_status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED' | 'IN_PROCESS' | 'WITH_ISSUES';
    /**
     * When set to `true` Indicates that the campaign will include SKAdNetwork, iOS 14+.
     */
    is_skadnetwork_attribution: boolean;
    /**
     * Issues for this campaign that prevented it from deliverying
     */
    issues_info: AdCampaignIssuesInfo[];
    /**
     * Last budget toggling time
     */
    last_budget_toggling_time: string;
    /**
     * The lifetime budget of the campaign
     */
    lifetime_budget: string;
    /**
     * Campaign's name
     */
    name: string;
    /**
     * Campaign's objective
     */
    objective: string;
    /**
     * Defines pacing type of the campaign. The value is an array of options:  "standard".
     */
    pacing_type: string[];
    /**
     * The object this campaign is promoting across all its ads
     */
    promoted_object: AdPromotedObject;
    /**
     * If there are recommendations for this campaign, this field includes them. Otherwise, will not be included in the response. (This field is not included in redownload mode.)
     */
    recommendations: AdRecommendation[];
    /**
     * The source campaign that this campaign is copied from
     */
    source_campaign: Campaign;
    /**
     * The source campaign id that this campaign is copied from
     */
    source_campaign_id: string;
    /**
     * special ad categories
     */
    special_ad_categories:
        | 'HOUSING'
        | 'CREDIT'
        | 'EMPLOYMENT'
        | 'ISSUES_ELECTIONS_POLITICS'
        | 'NONE';
    /**
     * The campaign's Special Ad Category. One of `HOUSING`, `EMPLOYMENT`, `CREDIT`, or `NONE`.
     */
    special_ad_category: 'HOUSING' | 'EMPLOYMENT' | 'CREDIT' | 'NONE';
    /**
     * Country field for Special Ad Category.
     */
    special_ad_category_country: CountryCode;
    /**
     * A spend cap for the campaign, such that it will not spend more than this cap. Expressed as integer value of the subunit in your currency.
     */
    spend_cap: string;
    /**
     * Merging of `start_time`s for the ad sets belonging to this campaign. At the campaign level, `start_time` is a read only field. You can setup `start_time` at the ad set level.
     */
    start_time: string;
    /**
     * If this status is `PAUSED`, all its active ad sets and ads will
     * be paused and have an effective status `CAMPAIGN_PAUSED`. The field
     * returns the same value as 'configured_status', and is the suggested
     * one to use.
     */
    status: 'ACTIVE' | 'PAUSED' | 'DELETED' | 'ARCHIVED';
    /**
     * Merging of `stop_time`s for the ad sets belonging to this campaign, if available. At the campaign level, `stop_time` is a read only field. You can setup `stop_time` at the ad set level.
     */
    stop_time: string;
    /**
     * Topline ID
     */
    topline_id: string;
    /**
     * Updated Time. If you update `spend_cap`, this will not automatically
     * update this field.
     */
    updated_time: string;
}
interface ExtendedCreditInvoiceGroup {
    /**
     * ID
     */
    id: string;
    /**
     * Shows if the adaccount using the current credit will be enrolled into the invoice group automatically
     */
    auto_enroll: boolean;
    /**
     * The customer PO number of this invoice group assigned by the customer creating or editing the group
     */
    customer_po_number: string;
    /**
     * The invoice email object associated with this invoice group and only allow one email address associated with one group
     */
    email: unknown; // ExtendedCreditEmail
    /**
     * The invoice emails attached to the invoice group
     */
    emails: string[];
    /**
     * Extended credit invoice group name assigned
     */
    name: string;
}
export interface AdStudy {
    /**
     * The business that owns this study if it exists.
     */
    business: Business;
    /**
     * Time stamp when study was canceled
     */
    canceled_time: string;
    /**
     * Cooldown start time
     */
    cooldown_start_time: string;
    /**
     * Who Lift study was created by
     */
    created_by: User;
    /**
     * When was the Lift study created
     */
    created_time: string;
    /**
     * Description
     */
    description: string;
    /**
     * End time
     */
    end_time: string;
    /**
     * ID of the Lift study
     */
    id: string;
    /**
     * Name of the Lift study
     */
    name: string;
    /**
     * Observation end time
     */
    observation_end_time: string;
    /**
     * When results for at least one objective of the study are available
     */
    results_first_available_date: string;
    /**
     * Start time
     */
    start_time: string;
    /**
     * The type of study, either audience segmentation or lift.
     */
    type: string;
    /**
     * Updated by
     */
    updated_by: User;
    /**
     * Updated time
     */
    updated_time: string;
}
export interface NativeOfferView {
    /**
     * The id of the native offer view.
     */
    id: string;
    /**
     * The id of the native offer this view is linked to.
     */
    offer: NativeOffer;
    /**
     * Number of users who have saved this view of the native offer.
     */
    save_count: number;
}
export interface CustomAudience {
    /**
     * Ad Account ID
     */
    account_id: string;
    /**
     * Source of customer information in the uploaded file
     */
    customer_file_source: string;
    /**
     * JSON dictionary of `type`, `sub_type` to indicate by which method the custom audience was created.
     *
     * Note: Subtypes `IG_BUSINESS_EVENTS`, `FB_EVENT_SIGNALS` and `MULTI_DATA_EVENTS` can only be created through Ads Manager, Audience Manager, and not through the API.
     */
    data_source: CustomAudienceDataSource;
    /**
     * JSON dictionary of `code` and `description`. It indicates whether or not an audience can be used in ads. Possible values include:
     * - `200`: Returned if the audience is active and ready to be used.
     * - `300`: Returned if the audience is smaller than it should be. This audience is currently inactive and cannot be used.
     * - `400` and above: Returned if the audience is not usable for a variety of reasons, including policy violation.
     */
    delivery_status: CustomAudienceStatus;
    /**
     * Custom audience description
     */
    description: string;
    /**
     * Read-only JSON dictionary with key `id` containing the pixel id whose traffic generated this custom audience
     */
    external_event_source: AdsPixel;
    /**
     * Custom audience ID
     */
    id: string;
    /**
     * Approximate number of people in this audience. A call for this field returns `-1` for [inactive lookalikes](https://developers.facebook.com/docs/marketing-api/lookalike-audience-targeting#inactive).
     */
    approximate_count: number;
    /**
     * Whether the audience is used to seed value based lookalike
     */
    is_value_based: boolean;
    /**
     * The IDs of the lookalike audiences generated from this audience
     */
    lookalike_audience_ids: string[];
    /**
     * Generated only when the subtype is `LOOKALIKE`. More info at [Lookalike Audience](https://developers.facebook.com/docs/marketing-api/lookalike-audience-targeting/)
                                      
     */
    lookalike_spec: LookalikeSpec;
    /**
     * Custom audience name
     */
    name: string;
    /**
     * JSON dictionary of `code` to int value and `description` to a description string. The operation status represents the status of the last operation performed on an audience. In general, it will have following states:
     * - `0`: Status not available
     * - `200`: Normal. There is no updating or issues found
     * - `400`: Warning. There is some message we would like advertisers to know
     * - `410`: No upload. No file has been uploaded
     * - `411`: Low match rate. Low rate of matched people
     * - `412`: High rate of invalid entries in the last upload session. Customer file has unusable data
     * - `421`: No pixel. Your Facebook pixel hasn't been installed on your website yet
     * - `422`: Pixel not firing. Your Facebook pixel isn't firing
     * - `423`: Invalid pixel. Your Facebook pixel is invalid
     * - `431`: Lookalike Audience refresh failed
     * - `432`: Lookalike Audience build failed
     * - `433`: Lookalike Audience build failed
     * - `434`: Lookalike Audience build retrying
     * - `441`: We're finding people who fit your audience criteria. You can start running ads with this audience right away, but be aware that your audience size will increase as the audience is populated
     * - `442`: Your Custom Audience could not be prefilled
     * - `450`: This audience either hasn't been used in an ad for at least 30 days or was created over 90 days ago and has never been used. For this reason, your audience is out of date.
     * - `470`: The account that created this audience is no longer active
     * - `500`: Error: there is some error and advertisers need to take action items to fix the error
     */
    operation_status: CustomAudienceStatus;
    /**
     * Your opt-out URL so people can choose not to be targeted
     */
    opt_out_link: string;
    /**
     * JSON dictionary of permissions (string) to boolean value if the custom audience has that permission
     */
    permission_for_actions: AudiencePermissionForActions;
    /**
     * ID of the pixel which is collecting events for this Website Custom audience
     */
    pixel_id: string;
    /**
     * Number of days to keep the user in this cluster. You can use any value between 1 and 180 days. Defaults to forever, if not specified. Only available for Customer File Custom Audience, including Custom Audiences created from CRM data.
     */
    retention_days: number;
    /**
     * Audience rules to be applied on the referrer URL
     */
    rule: string;
    /**
     * Aggregation on top of the rule, examples of aggregations include: count, sum etc
     */
    rule_aggregation: string;
    /**
     * Sharing status of this custom audience for the ad account
     */
    sharing_status: CustomAudienceSharingStatus;
    /**
     * Type of custom audience, derived from original data source.
     *
     * Note: Subtypes `IG_BUSINESS`, `FB_EVENT`, `EXPERIMENTAL` and `MULTI_DATA` can only be created through Ads Manager, Audience Manager, and not through the API.
     */
    subtype: string;
    /**
     * Last update of people in this custom audience, this field is only supported for Customer List Custom Audiences.
     */
    time_content_updated: number;
    /**
     * Creation time
     */
    time_created: number;
    /**
     * Last time this audience metadata was updated
     */
    time_updated: number;
}

export interface CustomAudienceDataSource {
    /**
     * Additional information on creation source
     */
    creation_params: string;
    /**
     * Custom Audience subtype
     */
    sub_type:
        | 'ANYTHING'
        | 'NOTHING'
        | 'HASHES'
        | 'USER_IDS'
        | 'HASHES_OR_USER_IDS'
        | 'MOBILE_ADVERTISER_IDS'
        | 'EXTERNAL_IDS'
        | 'MULTI_HASHES'
        | 'TOKENS'
        | 'EXTERNAL_IDS_MIX'
        | 'HOUSEHOLD_EXPANSION'
        | 'WEB_PIXEL_HITS'
        | 'MOBILE_APP_EVENTS'
        | 'MOBILE_APP_COMBINATION_EVENTS'
        | 'VIDEO_EVENTS'
        | 'WEB_PIXEL_COMBINATION_EVENTS'
        | 'PLATFORM'
        | 'MULTI_DATA_EVENTS'
        | 'IG_BUSINESS_EVENTS'
        | 'STORE_VISIT_EVENTS'
        | 'INSTANT_ARTICLE_EVENTS'
        | 'FB_EVENT_SIGNALS'
        | 'ENGAGEMENT_EVENT_USERS'
        | 'CUSTOM_AUDIENCE_USERS'
        | 'PAGE_FANS'
        | 'CONVERSION_PIXEL_HITS'
        | 'APP_USERS'
        | 'S_EXPR'
        | 'DYNAMIC_RULE'
        | 'CAMPAIGN_CONVERSIONS'
        | 'WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS'
        | 'MOBILE_APP_CUSTOM_AUDIENCE_USERS'
        | 'COMBINATION_CUSTOM_AUDIENCE_USERS'
        | 'VIDEO_EVENT_USERS'
        | 'FB_PIXEL_HITS'
        | 'IG_PROMOTED_POST'
        | 'PLACE_VISITS'
        | 'OFFLINE_EVENT_USERS'
        | 'EXPANDED_AUDIENCE'
        | 'SEED_LIST'
        | 'PARTNER_CATEGORY_USERS'
        | 'PAGE_SMART_AUDIENCE'
        | 'MULTICOUNTRY_COMBINATION'
        | 'PLATFORM_USERS'
        | 'MULTI_EVENT_SOURCE'
        | 'SMART_AUDIENCE'
        | 'LOOKALIKE_PLATFORM'
        | 'SIGNAL_SOURCE'
        | 'MAIL_CHIMP_EMAIL_HASHES'
        | 'CONSTANT_CONTACTS_EMAIL_HASHES'
        | 'COPY_PASTE_EMAIL_HASHES'
        | 'CONTACT_IMPORTER'
        | 'DATA_FILE';
    /**
     * Custom Audience type
     */
    type:
        | 'UNKNOWN'
        | 'FILE_IMPORTED'
        | 'EVENT_BASED'
        | 'SEED_BASED'
        | 'THIRD_PARTY_IMPORTED'
        | 'COPY_PASTE'
        | 'CONTACT_IMPORTER'
        | 'HOUSEHOLD_AUDIENCE';
}

export interface CustomAudienceStatus {
    /**
     * 	Delivery status code of that audience. Possible values include:
     * - `200`: Returned if the audience is active and ready to be used
     * - `300`: Returned if the audience is smaller than it should be. This audience is currently inactive and cannot be used.
     * - `400` and above: Returned if the audience is not usable for a variety of reasons, including policy violation.
     */
    code: 200 | 300 | 400 | number;
    /**
     * Status description
     */
    description: string;
}

interface LookalikeSpec {
    /**
     * Two letter country code. The country to find the lookalikes in.
     */
    country: string;
    /**
     * Is this lookalike used in financial service
     */
    is_financial_service: boolean;
    /**
     * The ID of origin Custom Audience. The origin audience you create must have a minimum size of 100.
     */
    origin: unknown[]; // IDNameType
    /**
     * The name of the origin event for value based LAL
     */
    origin_event_name: string;
    /**
     * The name of the origin event source. For example, for a product catalog based lookalike, this field will be the product catalog's name.
     */
    origin_event_source_name: string;
    /**
     * The type of the origin event sources for value based LAL
     */
    origin_event_source_type: string;
    /**
     * The name of the product set that is used to create the lookalike. This field only exists for a product catalog based lookalike.
     */
    product_set_name: string;
    /**
     * Range 0.01-0.20. Indicates the top x% of original audience in the selected country. The default value is 0.01 which is 1%.
     */
    ratio: number;
    /**
     * Used for tiered lookalikes
     */
    starting_ratio: number;
    /**
     * Two letter country codes. The countries to find the lookalikes in.
     */
    target_countries: string[];
    /**
     * Country names of corresponding two letter country code for each country used to find the lookalikes in
     */
    target_country_names: unknown[];
    /**
     * Type of the lookalike audience: similarity or reach
     */
    type: string;
}

interface AudiencePermissionForActions {
    can_edit: boolean;
    can_see_insight: boolean;
    can_share: boolean;
    subtype_supports_lookalike: boolean;
    supports_recipient_lookalike: boolean;
}

export interface CustomAudienceSharingStatus {
    sharing_relationship_id: number;
    status: string;
}

interface AdsPixel {
    /**
     * ID of the pixel
     */
    id: string;
    /**
     * Advanced matching fields which are enabled for automatic advanced matching
     */
    automatic_matching_fields: (
        | 'em'
        | 'fn'
        | 'ln'
        | 'ph'
        | 'ge'
        | 'zp'
        | 'ct'
        | 'st'
        | 'country'
        | 'db'
        | 'external_id'
    )[];
    /**
     * can_proxy
     */
    can_proxy: boolean;
    /**
     * Pixel code to be placed on the website
     */
    code: string;
    /**
     * Time at which the pixel was created
     */
    creation_time: string;
    /**
     * The user who created this pixel
     */
    creator: User;
    /**
     * Setting to capture how pixel data should be used
     */
    data_use_setting: 'EMPTY' | 'ADVERTISING_AND_ANALYTICS' | 'ANALYTICS_ONLY';
    /**
     * Represents whether automatic advanced matching is enabled for the pixel for identity matching purposes
     */
    enable_automatic_matching: boolean;
    /**
     * First party cookie status to indicate whether first party cookies can be set for this pixel
     */
    first_party_cookie_status:
        | 'EMPTY'
        | 'FIRST_PARTY_COOKIE_ENABLED'
        | 'FIRST_PARTY_COOKIE_DISABLED';
    /**
     * Flag stands for if a pixel is created by busines
     */
    is_created_by_business: boolean;
    /**
     * Whether this pixel is unavailable
     */
    is_unavailable: boolean;
    /**
     * Time at which the pixel was last fired
     */
    last_fired_time: string;
    /**
     * Name of the pixel
     */
    name: string;
    /**
     * Ad Account that owns this pixel
     */
    owner_ad_account: AdAccount;
    /**
     * ID of the business that owns this pixel or null if the pixel has not been claimed by any business yet.
     */
    owner_business: Business;
}
export interface AdNetworkAnalyticsAsyncQueryResult {
    /**
     * Data returned from the query
     */
    data: unknown; // AdNetworkAnalyticsData
    /**
     * The error if the query execution failed
     */
    error: unknown; // PacuQueryResultError
    /**
     * The query id
     */
    query_id: string;
    /**
     * Query results rows
     */
    results: unknown[]; // AdNetworkAnalyticsData[]
    /**
     * The state of the query's execution
     */
    status: string; // enum
}
export interface ApplicationAppEventTypes {
    /**
     * Localized description for predefined events
     */
    description: string;
    /**
     * Localized name for predefined events
     */
    display_name: string;
    /**
     * String used to represent the event
     */
    event_name: string;
    /**
     * Parameters that have been logged with this event
     */
    parameters: ApplicationAppEventTypeParameters[];
}

export interface ApplicationAppEventTypeParameters {
    /**
     * Localized description for predefined parameters
     */
    description: string;
    /**
     * Localized name for predefined parameters
     */
    display_name: string;
    /**
     * Localized description of predefiend parameter values
     */
    known_parameter_values: ApplicationAppEventTypeParameterValues[];
    /**
     * String used to represent parameter across the wire
     */
    parameter_name: string;
}

export interface ApplicationAppEventTypeParameterValues {
    /**
     * Localized description of predefined parameter value
     */
    description: string;
    /**
     * Localized version of the predefiend value
     */
    display_name: string;
    /**
     * Predefined value of a parameter
     */
    parameter_value: string;
}

export interface ApplicationPermission {
    /**
     * Name of the permission
     */
    permission: string;
    /**
     * Permission status
     */
    status: ApplicationPermissionStatus;
}

export type ApplicationPermissionStatus = 'live' | 'unapproved';

export interface ButtonAutoDetectionDeviceSelection {
    /**
     * Whether this device is selected as a candidate device for auto button sampling.
     */
    is_selected: boolean;
}

export interface FriendList {
    /**
     * The friend list ID
     */
    id: string;
    /**
     * The type of the friend list
     */
    list_type: string; // enum
    /**
     * The name of the friend list
     */
    name: string;
    /**
     * The owner of the friend list
     */
    owner: string;
}

export interface SDKMLModel {
    /**
     * asset_uri
     */
    asset_uri: string;
    /**
     * rules_uri
     */
    rules_uri: string;
    /**
     * thresholds
     */
    thresholds: number[];
    /**
     * use_case
     */
    use_case: unknown; // enum
    /**
     * version_id
     */
    version_id: number;
}
export interface Role {
    /**
     * The ID of the app being requested.
     */
    app_id: string;
    /**
     * The ID of the user who has a role in the app.
     */
    user: string;
    /**
     * The name of the role that this person has.
     */
    role: 'administrators' | 'developers' | 'testers' | 'insights users';
}
export interface CanvasAppAsset {
    /**
     * Id of the canvas app asset
     */
    id: string;
    /**
     * The unique-per-application symbolic name for this asset
     */
    name: string;
}
export interface ConversionConfig {
    /**
     * List of conversion value rules
     */
    conversion_value_rules: SKAConversionBitsRule[];
    /**
     * API updateConversionValue: won't be called if cutoff time is hit
     */
    cutoff_time: number;
    /**
     * Default currency
     */
    default_currency: string;
    /**
     * Timer buckets used to extend timer window
     */
    timer_buckets: number;
    /**
     * Timer interval for using each timer bucket
     */
    timer_interval: number;
}

interface SKAConversionBitsRule {
    /**
     * Conversion value of this rule
     */
    conversion_value: number;
    /**
     * List of events for SKAdNetwork
     */
    events: SKAConversionEvent[];
}

interface SKAConversionEvent {
    /**
     * Event name
     */
    event_name: string;
    /**
     * The list of event values
     */
    values: SKAConversionEventValue[];
}

interface SKAConversionEventValue {
    /**
     * The amount of the value
     */
    amount: number;
    /**
     * The currency of the value
     */
    currency: string;
}

export interface DACheck {
    /**
     * URI to a page that provides steps to resolve the issue this check detects
     */
    action_uri: string;
    /**
     * Description of this check
     */
    description: string;
    /**
     * Unique identifier of this check
     */
    key: string; // enum
    /**
     * The result of running this check
     */
    result: string; // enum
    /**
     * Title of this check
     */
    title: string;
    /**
     * The explanation of the result after running this check
     */
    user_message: string;
}
export interface GamesIAPProduct {
    /**
     * The id of the object
     */
    id: string;
    /**
     * Description of the product (e.g. "Used as in-app currency")
     */
    description: string;
    /**
     * The associated image of the product for the Facebook Pay dialog
     */
    image_uri: string;
    /**
     * Human-readable price of the product (e.g. "$1.23")
     */
    price: string;
    /**
     * Price of the product in 1/100ths of the major unit of currency (e.g. 1 JPY -> 100, 1.23 USD -> 123)
     */
    price_amount_cents: number;
    /**
     * Currency code of price (e.g. "JPY", "USD")
     */
    price_currency_code: string;
    /**
     * Identifier for the product (e.g. "gold_bar")
     */
    product_id: string;
    /**
     * Type of the product (e.g. managed)
     */
    product_type: string; // enum
    /**
     * Title of the product displayed to the user (e.g. "Gold Bar")
     */
    title: string;
}
export interface InsightsQueryResult {
    /**
     * The bucket the value belongs to
     */
    breakdowns: { [key: string]: string };
    /**
     * The start of the period, or the end time of lifetime period
     */
    time: string;
    /**
     * The metric's count, ratio or percentage in the period
     */
    value: string;
}

export type InsightBreakdown =
    | 'none'
    | 'age'
    | 'acquisition_source'
    | 'acquisition_source_l1'
    | 'acquisition_source_l2'
    | 'acquisition_source_l3'
    | 'days_since_acquisition'
    | 'api_method'
    | 'app_version'
    | 'auth_state'
    | 'avg_spend_per_user'
    | 'city'
    | 'label_cohort'
    | 'country'
    | 'error_code'
    | 'error_msg'
    | 'gender'
    | 'identity_source'
    | 'locale'
    | 'media_type'
    | 'destination'
    | 'ref'
    | 'ads_account'
    | 'ads_method'
    | 'ads_account_method'
    | 'ads_errorcode'
    | 'ads_account_errorcode'
    | 'ads_method_errorcode'
    | 'ads_account_method_errorcode'
    | 'url'
    | 'sponsored'
    | 'placement'
    | 'purchase_events'
    | 'reach'
    | 'realized_revenue'
    | 'roas'
    | 'device_model'
    | 'device_os'
    | 'user_agent'
    | 'error_value'
    | 'attributor'
    | 'app'
    // | '$platform'
    // | '$event_count'
    // | '$event_source'
    | 'fb_journey_start_channel'
    | 'fb_journey_end_channel'
    | 'fb_journey_is_converted'
    | 'fb_journey_channel_list'
    | 'fb_journey_start_event_source'
    | 'fb_journey_end_event_source'
    | 'fb_journey_event_source_list'
    // | '$page_id'
    | 'has_push_token'
    | 'app_name'
    | 'carrier'
    | 'core_count'
    | 'city_code'
    | 'region_code'
    | 'remaining_disk_gb'
    | 'screen_dimensions'
    | 'short_version_code'
    | 'timezone'
    | 'total_disk_gb'
    | 'ui_element'
    | 'action_type'
    | 'object_type'
    | 'client'
    | 'publishing_actor_type'
    | 'score'
    | 'display_format'
    | 'content_type'
    | 'data_source'
    | 'sdk_version'
    | 'app_event_parameter1'
    | 'app_event_parameter2'
    | 'app_event_parameter3'
    | 'app_event_parameter4'
    | 'app_event_parameter5'
    | 'app_event_parameter6'
    | 'app_event_parameter7'
    | 'app_event_parameter8'
    | 'app_event_parameter9'
    | 'app_event_parameter10';

export interface ProductCatalog {
    /**
     * ID of a catalog
     */
    id: string;
    /**
     * Business that owns a catalog
     */
    business: Business;
    /**
     * Merchant settings for the items sold in a catalog
     */
    commerce_merchant_settings: CommerceMerchantSettings;
    /**
     * Image display  settings such as background cropping and padding of items in the  catalog for different Dynamic Ad formats
     */
    da_display_settings: ProductCatalogImageSettings;
    /**
     * The URL for the default image, which is used for products without images, or when the product image is temporarily unavailable. If a product image matches the default image,  this should be treated as if the image was not loaded
     */
    default_image_url: string;
    /**
     * The URL for the fallback image. This is used as   the image for auto-generated dynamic items
     */
    fallback_image_url: string[];
    /**
     * The total number of feeds used by a catalog
     */
    feed_count: number;
    /**
     * Verify that you will create ads based on a catalog or catalog segment before you try to create Dynamic Ads. Call this field and determine value otherwise you may get and error when you try to create Dynamic Ads from catalog segments.
     */
    is_catalog_segment: boolean;
    /**
     * The name of a catalog given by the creator
     */
    name: string;
    /**
     * The total number of products in a catalog
     */
    product_count: number;
    /**
     * Catalog settings for a store catalog that promotes physical in-store items
     */
    store_catalog_settings: StoreCatalogSettings;
    /**
     * The type of catalog (for example: hotels, commerce, etc)
     */
    vertical:
        | 'adoptable_pets'
        | 'bookable'
        | 'commerce'
        | 'destinations'
        | 'flights'
        | 'home_listings'
        | 'hotels'
        | 'jobs'
        | 'local_delivery_shipping_profiles'
        | 'local_service_businesses'
        | 'offer_items'
        | 'offline_commerce'
        | 'ticketed_experiences'
        | 'transactable_items'
        | 'vehicles';
}

export interface ProductCatalogImageSettings {
    /**
     * Dynamic Ad display settings that would be applied to carousel ads.
     */
    carousel_ad: ProductCatalogImageSettingsOperation;
    /**
     * Dynamic Ad display settings that would be applied to single item ads.
     */
    single_ad: ProductCatalogImageSettingsOperation;
}

export interface ProductCatalogImageSettingsOperation {
    /**
     * The type of image transformation that would be applied to the image in a dynamic ad.
     */
    transformation_type: string; // enum
}

interface StoreCatalogSettings {
    /**
     * The id of the object
     */
    id: string;
    /**
     * The main page associated with the store product catalog
     */
    page: Page;
}

export interface CommerceReturn {
    /**
     * The ID that identifies this particular return request
     */
    id: string;
    /**
     * Quantities returned for each order item id included in the return
     */
    item_return_quantities: { [key: string]: number };
    /**
     * Reason why each order item id is being returned
     */
    item_return_reasons: {
        [key: string]:
            | 'BUYERS_REMORSE'
            | 'DAMAGED_GOODS'
            | 'NOT_AS_DESCRIBED'
            | 'QUALITY_ISSUE'
            | 'REFUND_COMPROMISED'
            | 'REFUND_FOR_RETURN'
            | 'REFUND_REASON_OTHER'
            | 'REFUND_SFI_FAKE'
            | 'REFUND_SFI_REAL'
            | 'WRONG_ITEM';
    };
    /**
     * The merchant return ID you provided when approving or disapproving this return
     */
    merchant_return_id: string;
    /**
     * The order this return is tied to
     */
    order: CommerceOrder;
    /**
     * Any images uploaded by the buyer when requesting the return
     */
    return_buyer_images: string[];
    /**
     * Message provided by the buyer when requesting a return
     */
    return_message: string;
    /**
     * Current Stats of the return
     */
    return_status:
        | 'APPROVED'
        | 'DISAPPROVED'
        | 'MERCHANT_MARKED_COMPLETED'
        | 'REFUNDED'
        | 'REQUESTED';
}

export interface Reaction {
    /**
     * The reaction type
     */
    type:
        | 'NONE'
        | 'LIKE'
        | 'LOVE'
        | 'WOW'
        | 'HAHA'
        | 'SAD'
        | 'ANGRY'
        | 'THANKFUL'
        | 'PRIDE'
        | 'CARE';
    /**
     * The profile's ID
     */
    id: string;
    /**
     * Whether the current session user can post to this profile
     */
    can_post: boolean;
    /**
     * Link to this profile on Facebook
     */
    link: string;
    /**
     * The profile's name
     */
    name: string;
    /**
     * Link to the 100px wide profile's Picture
     */
    pic: string;
    /**
     * Link to the profile's Picture cropped to how it looks on the Facebook site
     */
    pic_crop: ProfilePictureSource;
    /**
     * Link to the 200px wide profile's Picture
     */
    pic_large: string;
    /**
     * Link to the 50px wide profile's Picture
     */
    pic_small: string;
    /**
     * Link to the 50px by 50px profile's Picture
     */
    pic_square: string;
    /**
     * String representing the profile's type
     */
    profile_type: 'user' | 'page' | 'event' | 'group' | 'application';
    /**
     * The profile's Alias
     */
    username: string;
}
export interface CustomConversion {
    /**
     * ID of the custom conversion
     */
    id: string;
    /**
     * Ad Account ID assoicated to this custom conversion
     */
    account_id: string;
    /**
     * Advanced aggregation custom conversion rule
     */
    aggregation_rule: string;
    /**
     * Business that owns the custom conversion
     */
    business: Business;
    /**
     * Time at which the conversion was created
     */
    creation_time: string;
    /**
     * The type of the conversion event, e.g. PURCHASE
     */
    custom_event_type:
        | 'ADD_PAYMENT_INFO'
        | 'ADD_TO_CART'
        | 'ADD_TO_WISHLIST'
        | 'COMPLETE_REGISTRATION'
        | 'CONTENT_VIEW'
        | 'INITIATED_CHECKOUT'
        | 'LEAD'
        | 'PURCHASE'
        | 'SEARCH'
        | 'CONTACT'
        | 'CUSTOMIZE_PRODUCT'
        | 'DONATE'
        | 'FIND_LOCATION'
        | 'SCHEDULE'
        | 'START_TRIAL'
        | 'SUBMIT_APPLICATION'
        | 'SUBSCRIBE'
        | 'LISTING_INTERACTION'
        | 'FACEBOOK_SELECTED'
        | 'OTHER';
    /**
     * Event sources of the custom conversion
     */
    data_sources: ExternalEventSource[];
    /**
     * When conversion is URL based, the default conversion value associated to each conversion
     */
    default_conversion_value: number;
    /**
     * Description of the custom conversion
     */
    description: string;
    /**
     * Event source type of the custom conversion, e.g. pixel, app, etc.
     */
    event_source_type: string; // enum
    /**
     * Time at which the pixel was first fired
     */
    first_fired_time: string;
    /**
     * Whether this conversion is archived. Archived conversions are no longer tracked in the system
     */
    is_archived: boolean;
    /**
     * Whether this conversion is unavailable
     */
    is_unavailable: boolean;
    /**
     * Time at which the pixel was last fired
     */
    last_fired_time: string;
    /**
     * Name of the custom conversion
     */
    name: string;
    /**
     * The offline event set that contains events
     */
    offline_conversion_data_set: OfflineConversionDataSet;
    /**
     * The pixel that will send events
     */
    pixel: AdsPixel;
    /**
     * Retention period for advanced rule
     */
    retention_days: number;
    /**
     * Rule of the custom conversion
     */
    rule: string;
}
export interface MobileSDKGK {
    /**
     * GateKeepers for mobile SDK
     */
    gatekeepers: { [key: string]: boolean };
}

interface ExternalEventSource {
    id: string;
    name: string;
    source_type: string;
}

export interface UserLeadGenInfo {
    /**
     * Ad ID for the Lead Ad
     */
    ad_id: string;
    /**
     * Ad name for the Lead Ad
     */
    ad_name: string;
    /**
     * Ad Set ID for the Lead Ad
     */
    adset_id: string;
    /**
     * Ad Set name for the Lead Ad
     */
    adset_name: string;
    /**
     * Campaign ID for the Lead Ad
     */
    campaign_id: string;
    /**
     * Campaign name for the Lead Ad
     */
    campaign_name: string;
    /**
     * Time this object was created
     */
    created_time: string;
    /**
     * User responses to custom disclaimers
     */
    custom_disclaimer_responses: UserLeadGenDisclaimerResponse[];
    /**
     * Data submitted by the user
     */
    field_data: UserLeadGenFieldData[];
    /**
     * Form ID used for the Lead Ads
     */
    form_id: string;
    /**
     * ID of the LeadGenInfo object
     */
    id: string;
    /**
     * The home listing in Real Estate catalog that user selects
     */
    home_listing: HomeListing;
    /**
     * Indicates whether the lead is organic
     */
    is_organic: boolean;
    /**
     * Partner owning the dynamic item
     */
    partner_name: string;
    /**
     * The platform attributed to the Lead
     */
    platform: string;
    /**
     * User selected retailer item id
     */
    retailer_item_id: string;
    /**
     * The vehicle in automotive catalog that user selects
     */
    vehicle: Vehicle;
}

export interface UserLeadGenDisclaimerResponse {
    checkbox_key: string;
    is_checked: string;
    id: string;
}

export interface UserLeadGenFieldData {
    name: string;
    values: string[];
    id: string;
}

interface HomeListing {
    id: string;
    ac_type: string;
    additonal_fees_description: string;
    address: unknown;
    agent_company: string;
    agent_email: string;
    agent_fb_page_id: Page;
    agent_name: string;
    agent_phone: string;
    applinks: CatalogItemAppLinks;
    area_size: number;
    area_unit: string;
    availability: string;
    co_2_emission_rating_eu: unknown;
    currency: string;
    days_on_market: number;
    description: string;
    energy_rating_eu: unknown;
    furnish_type: string;
    heating_type: string;
    home_listing_id: string;
    images: string[];
    laundry_type: string;
    listing_type: string;
    max_currency: string;
    max_price: string;
    min_currency: string;
    min_price: string;
    name: string;
    num_baths: number;
    num_beds: number;
    num_rooms: number;
    num_units: number;
    parking_type: string;
    partner_verification: string;
    pet_policy: string;
    price: string;
    property_type: string;
    sanitized_images: string[];
    url: string;
    year_built: number;
}

interface Vehicle {
    /**
     * Id
     */
    id: string;
    /**
     * Address
     */
    address: unknown; // VehicleLocationAddressData
    /**
     * App links for native platforms, e.g. Android, iOS and Windows Phone
     */
    applinks: CatalogItemAppLinks;
    /**
     * Availability
     */
    availability: 'AVAILABLE' | 'NOT_AVAILABLE' | 'PENDING';
    /**
     * BodyStyle
     */
    body_style:
        | 'CONVERTIBLE'
        | 'COUPE'
        | 'CROSSOVER'
        | 'HATCHBACK'
        | 'MINIVAN'
        | 'SMALL_CAR'
        | 'TRUCK'
        | 'SUV'
        | 'SEDAN'
        | 'VAN'
        | 'WAGON'
        | 'OTHER'
        | 'NONE';
    /**
     * Condition
     */
    condition: 'EXCELLENT' | 'VERY_GOOD' | 'GOOD' | 'FAIR' | 'POOR' | 'OTHER' | 'NONE';
    /**
     * Currency
     */
    currency: string;
    /**
     * CustomLabel0
     */
    custom_label_0: string;

    date_first_on_lot: string;
    /**
     * DealerCommunicationChannel
     */
    dealer_communication_channel: string; // enum
    /**
     * DealerEmail
     */
    dealer_email: string;
    /**
     * DealerId
     */
    dealer_id: string;
    /**
     * DealerName
     */
    dealer_name: string;
    /**
     * DealerPhone
     */
    dealer_phone: string;
    /**
     * DealerPrivacyPolicyUrl
     */
    dealer_privacy_policy_url: string;
    /**
     * Description
     */
    description: string;
    /**
     * Drivetrain
     */
    drivetrain: 'TWO_WD' | 'FOUR_WD' | 'AWD' | 'FWD' | 'RWD' | 'OTHER' | 'NONE';
    /**
     * ExteriorColor
     */
    exterior_color: string;
    /**
     * FbPageID
     */
    fb_page_id: Page;
    /**
     * Features
     */
    features: unknown[]; // VehicleTMarketplaceVehicleFeature[]
    /**
     * FuelType
     */
    fuel_type:
        | 'DIESEL'
        | 'ELECTRIC'
        | 'GASOLINE'
        | 'FLEX'
        | 'HYBRID'
        | 'OTHER'
        | 'PETROL'
        | 'PLUGIN_HYBRID'
        | 'NONE';
    /**
     * Images
     */
    images: string[];
    /**
     * InteriorColor
     */
    interior_color: string;
    /**
     * LegalDisclosureImpressumUrl
     */
    legal_disclosure_impressum_url: string;
    /**
     * Make
     */
    make: string;
    /**
     * Mileage
     */
    mileage: unknown; // VehicleCatalogItemMileageData
    /**
     * Model
     */
    model: string;
    /**
     * PreviousCurrency
     */
    previous_currency: string;
    /**
     * PreviousPrice
     */
    previous_price: string;
    /**
     * Price
     */
    price: string;
    /**
     * SaleCurrency
     */
    sale_currency: string;
    /**
     * SalePrice
     */
    sale_price: string;
    /**
     * SanitizedImages
     */
    sanitized_images: string[];
    /**
     * StateOfVehicle
     */
    state_of_vehicle: 'NEW' | 'USED' | 'CPO';
    /**
     * Title
     */
    title: string;
    /**
     * Transmission
     */
    transmission: 'AUTOMATIC' | 'MANUAL' | 'OTHER' | 'NONE';
    /**
     * Trim
     */
    trim: string;
    /**
     * Url
     */
    url: string;
    /**
     * VehicleId
     */
    vehicle_id: string;
    /**
     * VehicleRegistrationPlate
     */
    vehicle_registration_plate: string;

    /**
     * VehicleSpecifications
     */
    vehicle_specifications: unknown[]; // VehicleVehicleSpecification
    /**
     * VehicleType
     */
    vehicle_type:
        | 'BOAT'
        | 'CAR_TRUCK'
        | 'COMMERCIAL'
        | 'MOTORCYCLE'
        | 'OTHER'
        | 'POWERSPORT'
        | 'RV_CAMPER'
        | 'TRAILER';
    /**
     * Vin
     */
    vin: string;
    /**
     * Year
     */
    year: number;
}

export interface GroupFile {
    /**
     * Id
     */
    id: string;
    /**
     * Download link of latest revision of this file
     */
    download_link: string;
    /**
     * The owner of this file
     */
    from: Profile;
    /**
     * The group where this file was uploaded to
     */
    group: Group;
    /**
     * Message of the post that this file is attached to
     */
    message: string;
    /**
     * Latest updated time
     */
    updated_time: string;
}
export interface TestAccount {
    /**
     * An access token that can be used to make API calls on behalf of this user
     */
    access_token: string;
    /**
     * User ID
     */
    id: string;
    /**
     * A link to log in to Facebook as this test user
     */
    login_url: string;
}
export interface GroupDoc {
    /**
     * The document ID
     */
    id: string;
    /**
     * Boolean, can document be deleted by viewer
     */
    can_delete: boolean;
    /**
     * Boolean, can document be edited by viewer
     */
    can_edit: boolean;
    /**
     * Url link for cover photo of group doc
     */
    cover_photo_url: string;
    /**
     * Timestamp of when the document was created
     */
    created_time: string;
    /**
     * A list of urls that were embedded into the note
     */
    embedded_urls: string[];
    /**
     * Author of the document
     */
    from: User;
    /**
     * Image file for document icon
     */
    icon: string;
    /**
     * URL for the document
     */
    link: string;
    /**
     * Content of the document
     */
    message: string;
    /**
     * Current revision ID
     */
    revision: string;
    /**
     * Title of the document
     */
    subject: string;
    /**
     * Last updated timestamp
     */
    updated_time: string;
}
export interface OfflineConversionDataSetStats {
    /**
     * Number of events that are attributed in the day
     */
    attributed_count: number;
    /**
     * Sum of USD(in cents) of events that are attributed in the day
     */
    attributed_usd_amount: number;
    /**
     * Number of events in the time period
     */
    count: number;
    /**
     * Number of events marked as duplicates in the day
     */
    duplicate_count: number;
    /**
     * Event name
     */
    event: string; // enum
    /**
     * Approximate match rate percentage for events in the time period
     */
    match_rate_approx: number;
    /**
     * Number of events that are matched in the day
     */
    matched_count: number;
    /**
     * Sum of USD(in cents) of all the matched events in the day
     */
    matched_usd_amount: number;
    /**
     * Time of the start of the day
     */
    time: number;
    /**
     * Sum of USD(in cents) of all the events in the day
     */
    usd_amount: number;
}

export interface Message {
    /**
     * The unique ID for this message.
     */
    id: string;
    /**
     * A timestamp of when this message was created
     */
    created_time: string;
    /**
     * The sender of this message.
     */
    from: {
        name: string;
        email: string;
        id: string;
    };
    /**
     * The text of the message.
     */
    message: string;
    /**
     * Sticker contained in the message.
     */
    sticker: string;
    /**
     * A set of tags indicating the message folder and source of the message.
     */
    tags: {
        data: MessageTag[];
    };
    /**
     * A list of recipients of the message.
     */
    to: {
        data: Message['from'][];
    };
}

export interface MessageTag {
    name: string;
}

export interface VideoPoll {
    /**
     * The poll ID
     */
    id: string;
    /**
     * The poll question text
     */
    question: string;
    /**
     * True if this is a Live poll and voting is open and the results show after voting
     */
    show_results: boolean;
    /**
     * Live poll status
     */
    status: 'closed' | 'voting_open' | 'results_open';
}

export interface LiveVideoError {
    /**
     * The creation time for this error.
     */
    creation_time: string;
    /**
     * An error code
     */
    error_code: number;
    /**
     * Description for this error.
     */
    error_message: string;
    /**
     * A broad classification of the type of error.
     */
    error_type: string;
}

export interface CommerceMerchantTaxSettings {
    /**
     * The ID of the tax settings.
     */
    id: string;
}

export interface SignalsUploadProgress {
    /**
     * End of an upload range (exclusive).
     */
    end_exclusive: number;
    /**
     * Start of an upload range (inclusive).
     */
    start_inclusive: number;
}

export interface GamesIAPOrder {
    /**
     * id
     */
    id: string;
    /**
     * The app in which this purchase was made
     */
    app_id: string;
    /**
     * Whether or not this purchase has been consumed
     */
    consumed: boolean;
    /**
     * Optional string, specified by the developer when the user initiates the purchase
     */
    developer_payload: string;
    /**
     * Payment action type of purchase. E.g. charge, refund, chargeback, chargeback_reversal, decline
     */
    payment_action_type: string;
    /**
     * Identifier of the payment
     */
    payment_id: string;
    /**
     * Developer specified identifier of the product purchased
     */
    product_id: string;
    /**
     * Unix timestamp of purchase
     */
    purchase_time: number;
    /**
     * The unique identifier of this purchase. Used to consume the purchase
     */
    purchase_token: string;
    /**
     * A payload of other fields in this node signed with the app secret
     */
    signed_request: string;
}

export interface PagePost {
    /**
     * The post ID
     */
    id: string;
    /**
     * Action links
     */
    actions: unknown[];
    /**
     * The admin creator of a Page Post. Only available if there exists more than one admin for the page.
     */
    admin_creator: BusinessUser | User | Application;
    /**
     * Objectives under which this post can be advertised
     */
    allowed_advertising_objectives: string[];
    /**
     * Information about the app this post was published by.
     */
    application: Application;
    /**
     * The backdated time for backdate post. For regular post, this field will be set to null.
     */
    backdated_time: string;
    /**
     * The call to action type used in any Page posts for mobile app engagement ads.
     */
    call_to_action: {
        type: unknown;
        value: unknown;
    };
    /**
     * Whether the page viewer can send a private reply to this post
     */
    can_reply_privately: boolean;
    /**
     * Sub-shares of a multi-link share post
     */
    child_attachments: unknown[];
    /**
     * If comments are being mirrored to an external site, this function returns the domain of that external site.
     */
    comments_mirroring_domain: string;
    /**
     * An array of information about the attachment to the post
     */
    coordinates: {
        checkin_string: unknown;
        author_uid: unknown;
        page_string: unknown;
        target_string: unknown;
        target_href: unknown;
        coords: unknown;
        tagged_uids: unknown;
        timestamp: unknown;
        message: unknown;
        target_type: unknown;
    };
    /**
     * The time the post was published, expressed as UNIX timestamp
     */
    created_time: string;
    /**
     * If this Post has a place, the event associated with the place
     */
    event: Event;
    /**
     * An array of information about the attachment to the post
     */
    expanded_height: number;
    /**
     * An array of information about the attachment to the post
     */
    expanded_width: number;
    /**
     * Object that controls news feed targeting for this post. Anyone in these groups will be more likely to see this post, others will be less likely, but may still see it anyway. Any of the targeting fields shown here can be used, none are required (applies to Pages only).
     */
    feed_targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        genders: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        interested_in: unknown;
        user_adclusters: unknown;
        locales: unknown;
        countries: unknown;
        geo_locations: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        industries: unknown;
        politics: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        fan_of: unknown;
        relevant_until_ts: unknown;
    };
    /**
     * Information about the formatting for the message
     */
    formatting: string; // enum
    /**
     * The ID of the user, page, group, or event that published the post
     */
    from: User | Page;
    /**
     * Full size picture from attachment
     */
    full_picture: string;
    /**
     * An array of information about the attachment to the post
     */
    height: number;
    /**
     * A link to an icon representing the type of this post.
     */
    icon: string;
    /**
     * Whether the post can be promoted on Instagram. It returns the enum "eligible" if it can be promoted.  Otherwise it returns an enum for why it cannot be promoted
     */
    instagram_eligibility: 'eligible' | string; // enum
    /**
     * Whether or not the post references an app
     */
    is_app_share: boolean;
    /**
     * Whether the post is eligible for promotion.
     */
    is_eligible_for_promotion: boolean;
    /**
     * Whether the post has expiration time that has passed
     */
    is_expired: boolean;
    /**
     * Whether a post has been set to hidden
     */
    is_hidden: boolean;
    /**
     * Returns True if the post was created inline when creating ads.
     */
    is_inline_created: boolean;
    /**
     * Whether this post can be promoted in Instagram
     */
    is_instagram_eligible: boolean;
    /**
     * Whether the post is currently popular. Based on whether the total actions as a percentage of reach exceeds a certain threshold
     */
    is_popular: boolean;
    /**
     * Indicates whether a scheduled post was published (applies to scheduled Page Post only, for users post and instanlty published posts this value is always true)
     */
    is_published: boolean;
    /**
     * Whether the post is a spherical video post
     */
    is_spherical: boolean;
    /**
     * The message written in the post
     */
    message: string;
    /**
     * Profiles tagged in message. This is an object with a unique key for each tag in the message
     */
    message_tags: unknown[];
    /**
     * Whether display the end card for a multi-link share post
     */
    multi_share_end_card: boolean;
    /**
     * Whether automatically select the order of the links in multi-link share post when used in an ad
     */
    multi_share_optimized: boolean;
    /**
     * The ID of a parent post for this post, if it exists. For example, if this story is a 'Your Page was mentioned in a post' story, the parent_id will be the original post where the mention happened
     */
    parent_id: string;
    /**
     * The permanent static URL to the post on www.facebook.com. Example: https://www.facebook.com/FacebookforDevelopers/posts/10153449196353553
     */
    permalink_url: string;
    /**
     * The picture scraped from any link included with the post.
     */
    picture: string;
    /**
     * ID of the place associated with the post
     */
    place: Place;
    /**
     * The privacy settings for a post
     */
    privacy: Privacy;
    /**
     * ID of post to use for promotion for stories that cannot be promoted directly
     */
    promotable_id: string;
    /**
     * Status of the promotion, if the post was promoted
     */
    promotion_status: string;
    /**
     * A list of properties for any attached video, for example, the length of the video.
     */
    properties: unknown[];
    /**
     * Total number of comments plus number of reactions of a post
     */
    publishing_stats: number;
    /**
     * UNIX timestamp of the scheduled publish time for the post
     */
    scheduled_publish_time: number;
    /**
     * Number of times the post has been shared
     */
    shares: {
        count: unknown;
    };
    /**
     * Description of the type of a status update.
     */
    status_type: string;
    /**
     * Text of stories not intentionally generated by users, such as those generated when two users become friends. You must have the "Include recent activity stories" migration enabled in your app to retrieve this field
     */
    story: string;
    /**
     * The list of tags in the post description
     */
    story_tags: unknown[];
    /**
     * Whether user is subscribed to the post
     */
    subscribed: boolean;
    /**
     * The profile this was posted on if different from the author
     */
    target: Profile;
    /**
     * Object that limited the audience for this content. Anyone not in these demographics will not be able to view this content. This will not override any Page-level demographic restrictions that may be in place.
     */
    targeting: {
        country: unknown;
        cities: unknown;
        regions: unknown;
        zips: unknown;
        genders: unknown;
        college_networks: unknown;
        work_networks: unknown;
        age_min: unknown;
        age_max: unknown;
        education_statuses: unknown;
        college_years: unknown;
        college_majors: unknown;
        political_views: unknown;
        relationship_statuses: unknown;
        interests: unknown;
        keywords: unknown;
        interested_in: unknown;
        user_clusters: unknown;
        user_clusters2: unknown;
        user_clusters3: unknown;
        user_adclusters: unknown;
        excluded_user_adclusters: unknown;
        custom_audiences: unknown;
        excluded_custom_audiences: unknown;
        locales: unknown;
        radius: unknown;
        connections: unknown;
        excluded_connections: unknown;
        friends_of_connections: unknown;
        countries: unknown;
        excluded_user_clusters: unknown;
        adgroup_string: unknown;
        user_event: unknown;
        qrt_versions: unknown;
        page_types: unknown;
        user_os: unknown;
        user_device: unknown;
        action_spec: unknown;
        action_spec_friend: unknown;
        action_spec_excluded: unknown;
        geo_locations: unknown;
        excluded_geo_locations: unknown;
        targeted_entities: unknown;
        conjunctive_user_adclusters: unknown;
        wireless_carrier: unknown;
        site_category: unknown;
        work_positions: unknown;
        work_employers: unknown;
        education_majors: unknown;
        education_schools: unknown;
        family_statuses: unknown;
        life_events: unknown;
        behaviors: unknown;
        travel_status: unknown;
        industries: unknown;
        politics: unknown;
        markets: unknown;
        income: unknown;
        net_worth: unknown;
        home_type: unknown;
        home_ownership: unknown;
        home_value: unknown;
        ethnic_affinity: unknown;
        generation: unknown;
        household_composition: unknown;
        moms: unknown;
        office_type: unknown;
        interest_clusters_expansion: unknown;
        dynamic_audience_ids: unknown;
        product_audience_specs: unknown;
        excluded_product_audience_specs: unknown;
        exclusions: unknown;
        flexible_spec: unknown;
        engagement_specs: unknown;
        excluded_engagement_specs: unknown;
    };
    /**
     * Timeline visibility information of the post
     */
    timeline_visibility: string;
    /**
     * A list of translations provided by the author of the post, represented in key-value pairs. The keys are locales and the values are translations in corresponding locales.
     */
    translations: { [key: string]: string };
    /**
     * The time the post was last updated, which occurs when a user comments on the post.
     */
    updated_time: string;
    /**
     * ID of the user or Page the post was shared from
     */
    via: User | Page;
    /**
     * Whether the post can be promoted with different video buying options. It returns an empty list when video is eligible.  Otherwise it returns a list of reasons why thepost cannot be promoted.
     */
    video_buying_eligibility: string[]; // enum[]
    /**
     * An array of information about the attachment to the post
     */
    width: number;
}

export interface AssignedUser {
    /**
     * Tasks that are assignable on this object
     */
    permitted_tasks: string[];
    /**
     * All unpacked roles/tasks of this particular user on this object
     */
    tasks: string[];
    /**
     * id
     */
    id: string;
    /**
     * Business that the user belongs to
     */
    business: Business;
    /**
     * name
     */
    name: string;
    /**
     * Type of assigned user
     */
    user_type: string; // enum
}
export interface AudioCopyright {
    /**
     * The ID of the audio copyright
     */
    id: string;
    /**
     * The time of creation for this audio copyright
     */
    creation_time: string;
    /**
     * The number of matches for this copyright that are displayed on the dashboard
     */
    displayed_matches_count: number;
    /**
     * Whether this copyright is in conflict with another reference file
     */
    in_conflict: boolean;
    /**
     * The ISRC of the copyrighted audio asset
     */
    isrc: string;
    /**
     * The match_rule applied to media that matches the copyrighted content
     */
    match_rule: VideoCopyrightRule;
    /**
     * The geo ownership for an audio asset, a list of countries
     */
    ownership_countries: string[];
    /**
     * The status of the audio reference file, used to determine if the match should be skipped
     */
    reference_file_status: string; // enum
    /**
     * The status of ridge ingestion for detection
     */
    ridge_monitoring_status: string; // enum
    /**
     * The tags/keywords associated with the copyright
     */
    tags: string[];
    /**
     * The time that this audio copyright was last updated
     */
    update_time: string;
    /**
     * A list of Facebook page IDs or user IDs, who are allowed to use the copyrighted content
     */
    whitelisted_fb_users: unknown[]; // CopyrightWhiteListedUser[]
    /**
     * A list of Instagram user's usernames who are allowed to use the copyrighted content
     */
    whitelisted_ig_users: string[];
}
export interface PageCallToAction {
    /**
     * App that stores the destination info on Android
     */
    android_app: Application;
    /**
     * Destination deeplink for the call-to-action on Android
     */
    android_deeplink: string;
    /**
     * Destination type for the call-to-action on Android
     */
    android_destination_type:
        | 'WEBSITE'
        | 'APP_DEEPLINK'
        | 'FACEBOOK_APP'
        | 'PHONE_CALL'
        | 'MESSENGER'
        | 'EMAIL'
        | 'SHOP_ON_FACEBOOK'
        | 'NONE'
        | 'BECOME_A_VOLUNTEER'
        | 'FOLLOW'
        | 'MINI_SHOP'
        | 'MARKETPLACE_INVENTORY_PAGE'
        | 'MOBILE_CENTER';
    /**
     * Destination app for the call-to-action on Android
     */
    android_package_name: string;
    /**
     * Destination url for the call-to-action on Android
     */
    android_url: string;
    /**
     * Time when the call-to-action was created
     */
    created_time: string;
    /**
     * Email address that can be contacted by a user
     */
    email_address: string;
    /**
     * ID of the call-to-action
     */
    id: string;
    /**
     * Page that owns the call-to-action
     */
    from: Page;
    /**
     * International phone number with plus that can be called by a phone
     */
    intl_number_with_plus: string;
    /**
     * App that stores the destination info on iPhone
     */
    iphone_app: Application;
    /**
     * Destination deeplink for the call-to-action on iPhone
     */
    iphone_deeplink: string;
    /**
     * Destination type for the call-to-action on iPhone
     */
    iphone_destination_type:
        | 'WEBSITE'
        | 'APP_DEEPLINK'
        | 'FACEBOOK_APP'
        | 'PHONE_CALL'
        | 'MESSENGER'
        | 'EMAIL'
        | 'SHOP_ON_FACEBOOK'
        | 'NONE'
        | 'BECOME_A_VOLUNTEER'
        | 'FOLLOW'
        | 'MINI_SHOP'
        | 'MARKETPLACE_INVENTORY_PAGE';
    /**
     * Destination url for the call-to-action on iPhone
     */
    iphone_url: string;
    /**
     * Current running status of this action
     */
    status: string; // enum
    /**
     * The type of action
     */
    type:
        | 'BOOK_NOW'
        | 'REQUEST_QUOTE'
        | 'CALL_NOW'
        | 'CHARITY_DONATE'
        | 'CONTACT_US'
        | 'DONATE_NOW'
        | 'MESSAGE'
        | 'OPEN_APP'
        | 'PLAY_NOW'
        | 'SHOP_NOW'
        | 'SIGN_UP'
        | 'WATCH_NOW'
        | 'GET_OFFER'
        | 'GET_OFFER_VIEW'
        | 'BOOK_APPOINTMENT'
        | 'LISTEN'
        | 'EMAIL'
        | 'LEARN_MORE'
        | 'REQUEST_APPOINTMENT'
        | 'GET_DIRECTIONS'
        | 'BUY_TICKETS'
        | 'PLAY_MUSIC'
        | 'VISIT_GROUP'
        | 'SHOP_ON_FACEBOOK'
        | 'LOCAL_DEV_PLATFORM'
        | 'INTERESTED'
        | 'WOODHENGE_SUPPORT'
        | 'BECOME_A_VOLUNTEER'
        | 'VIEW_SHOP'
        | 'PURCHASE_GIFT_CARDS'
        | 'FOLLOW_PAGE'
        | 'ORDER_FOOD'
        | 'VIEW_INVENTORY'
        | 'MOBILE_CENTER';
    /**
     * Time when the call-to-action was last updated
     */
    updated_time: string;
    /**
     * Destination type for the call-to-action on desktop
     */
    web_destination_type:
        | 'EMAIL'
        | 'MESSENGER'
        | 'NONE'
        | 'WEBSITE'
        | 'SHOP_ON_FACEBOOK'
        | 'BECOME_SUPPORTER'
        | 'BECOME_A_VOLUNTEER'
        | 'FOLLOW'
        | 'MOBILE_CENTER';
    /**
     * Destination url for the call-to-action on desktop
     */
    web_url: string;
}
export interface CommerceOrder {
    /**
     * Unique ID representing the order. **Although numerical, treat Order IDs as strings, as Order ID length and structure is subject to change.**
     */
    id: string;
    /**
     * Buyer details for the order
     */
    buyer_details: unknown; // CommerceOrderBuyerDetails
    /**
     * Channel through which the order was placed. Possible values are `Facebook` or `Instagram`.
     */
    channel: string;
    /**
     * Order's creation datetime in ISO 8601 format.
     */
    created: string;
    /**
     * Estimated payment details when order was placed. Actual captured payment is determined when order is fulfilled. See `payment_details`.
     */
    estimated_payment_details: unknown; // CommerceOrderPaymentDetails
    /**
     * If this order is a Group Purchase Promotion
     */
    is_group_buy: boolean;
    /**
     * If this order is a test order placed in a [test commerce account](https://developers.facebook.com/docs/commerce-platform/setup/getting-started#how-it-works)
     */
    is_test_order: boolean;
    /**
     * Order's latest update datetime in ISO 8601 format.
     */
    last_updated: string;
    /**
     * Unique ID representing the order in merchant's Order Management System. This is set when the order is acknowledged.
     */
    merchant_order_id: string;
    /**
     * Status of the order
     */
    order_status: unknown; // CommerceOrderStatus
    /**
     * This field is available for backward compatibility. You should read the `selected_shipping_option` on each item in the order
     */
    selected_shipping_option: unknown; // CommerceOrderShippingOption
    /**
     * The expected date the order is to be shipped by. Date format is 'Y-m-d'
     */
    ship_by_date: string;
    /**
     * Shipping address for the order
     */
    shipping_address: unknown; // CommerceOrderShippingAddress
}
export interface CommercePayout {
    /**
     * Amount that was paid out
     */
    amount: unknown; // CommerceOrderCurrencyAmount
    /**
     * The date on which this payout occurred
     */
    payout_date: string;
    /**
     * The bank reference ID associated with this payout
     */
    payout_reference_id: string;
    /**
     * The status of the payout. Values can either be COMPLETED or FAILED.
     */
    status: string;
    /**
     * The payout transfer ID associated with this payout
     */
    transfer_id: string;
}
export interface CommerceOrderTransactionDetail {
    /**
     * The net amount paid to the seller from this transaction
     */
    net_payment_amount: unknown; // CommerceOrderCurrencyAmount
    /**
     * Fetch order details that this transaction corresponds to
     */
    order_details: CommerceOrder;
    /**
     * The bank reference ID associated with the payout in which this transaction is included
     */
    payout_reference_id: string;
    /**
     * The processing fee charged for this transaction
     */
    processing_fee: unknown; // CommerceOrderCurrencyAmount
    /**
     * Percentage tax rate applied to this transaction
     */
    tax_rate: string;
    /**
     * The datetime on which this transaction took place, in ISO 8601 format.
     */
    transaction_date: string;
    /**
     * Type of the transaction. See the [complete list](https://www.facebook.com/business/help/622689828234730?id=540542143143969) of possible values and their meanings.
     */
    transaction_type: string;
    /**
     * The payout transfer ID of the payout in which this transaction was paid out
     */
    transfer_id: string;
}
export interface PageUserMessageThreadLabel {
    /**
     * Id
     */
    id: string;
    /**
     * Name
     */
    name: string;
}

export interface InsightsResult {
    /**
     * ID of the query
     */
    id: string;
    /**
     * Long description of the metric
     */
    description: string;
    /**
     * The description of the metric, retrieved from the [API doc](https://developers.facebook.com/docs/graph-api/reference/insights)
     */
    description_from_api_doc: string;
    /**
     * The Insights metric requested
     */
    name: string;
    /**
     * The period of time used for the aggregation
     */
    period: string; // enum
    /**
     * Short description of the metric
     */
    title: string;
    /**
     * The different values for this metric
     */
    values: InsightsValue[];
}

interface InsightsValue {
    /**
     * The time from which the data are aggregated
     */
    end_time: string;
    /**
     * The time from which the data are aggregated
     */
    value: number | { [key: string]: unknown };
}

export interface InstagramUser {
    /**
     * ID of the Instagram user
     */
    id: string;
    /**
     * Number of Instagram users that this Instagram user follows
     */
    follow_count: number;
    /**
     * Number of Instagram users that follow this Instagram user
     */
    followed_by_count: number;
    /**
     * Indicates whether Instagram Account has a profile picture
     */
    has_profile_picture: boolean;
    /**
     * Whether the Instagram user is private
     */
    is_private: boolean;
    /**
     * Whether the Instagram user is published
     */
    is_published: boolean;
    /**
     * Number of active media posted by this Instagram user
     */
    media_count: number;
    /**
     * URI to user's Instagram profile picture
     */
    profile_pic: string;
    /**
     * Instagram username
     */
    username: string;
}
export interface InstantArticle {
    /**
     * The ID of the instant article
     */
    id: string;
    /**
     * The canonical URL uniquely identifying this article
     */
    canonical_url: string;
    /**
     * The development status of the article
     */
    development_mode: boolean;
    /**
     * Current HTML source code
     */
    html_source: string;
    /**
     * The latest import status for this article
     */
    most_recent_import_status: InstantArticleImportStatus;
    /**
     * Photos inside this article
     */
    photos: unknown[]; // InstantArticlePhoto[]
    /**
     * A flag indicating whether the article is published
     */
    published: boolean;
    /**
     * Videos inside this article
     */
    videos: unknown[]; // InstantArticleVideo[]
}

interface InstantArticleImportStatus {
    /**
     * The ID of the import status node
     */
    id: string;
    /**
     * The errors generated while parsing
     */
    errors: unknown; // InstantArticleError[]
    /**
     * The markup that has been parsed
     */
    html_source: string;
    /**
     * The associated Instant Article node
     */
    instant_article: InstantArticle;
    /**
     * The overall import status for this article
     */
    status: string; // enum
}

export interface InstantArticleInsightsQueryResult {
    /**
     * The bucket the value belongs to
     */
    breakdowns: { [key: string]: string };
    /**
     * Name of the metric
     */
    name: string;
    /**
     * The start of the period, or the end time of lifetime period
     */
    time: string;
    /**
     * The metric's count, ratio or percentage in the period
     */
    value: string;
}
export interface MessagingFeatureReview {
    /**
     * Feature name
     */
    feature: string;
    /**
     * Feature status
     */
    status: string; // enum
}

export interface InstagramUser {
    /**
     * ID of the Instagram user
     */
    id: string;
    /**
     * Number of Instagram users that this Instagram user follows
     */
    follow_count: number;
    /**
     * Number of Instagram users that follow this Instagram user
     */
    followed_by_count: number;
    /**
     * Indicates whether Instagram Account has a profile picture
     */
    has_profile_picture: boolean;
    /**
     * Whether the Instagram user is private
     */
    is_private: boolean;
    /**
     * Whether the Instagram user is published
     */
    is_published: boolean;
    /**
     * Number of active media posted by this Instagram user
     */
    media_count: number;
    /**
     * URI to user's Instagram profile picture
     */
    profile_pic: string;
    /**
     * Instagram username
     */
    username: string;
}
export interface Persona {
    /**
     * ID of Persona
     */
    id: string;
    /**
     * Name of Persona
     */
    name: string;
    /**
     * Profile Picture of Persona
     */
    profile_picture_url: string;
}
export interface Recommendation {
    /**
     * When the reviewer rated this object
     */
    created_time: string;
    /**
     * Was a rating included? (1-5 stars)
     */
    has_rating: boolean;
    /**
     * Was there text in the rating?
     */
    has_review: boolean;
    /**
     * Story generated by the rating/recommendation action
     */
    open_graph_story: SingleRecommendationStory;
    /**
     * Rating (1-5 stars)
     */
    rating: number;
    /**
     * Whether or not this recommendation was "positive" or "negative"
     */
    recommendation_type: string;
    /**
     * Review text included in the review
     */
    review_text: string;
    /**
     * Information about the author of a recommendation/review
     */
    reviewer: User;
}

export interface RTBDynamicPost {
    /**
     * List of child cards for carousel posts
     */
    child_attachments: DynamicPostChildAttachment[];
    /**
     * The time this post was made
     */
    created: string;
    /**
     * The link description
     */
    description: string;
    /**
     * The dynamic post ID
     */
    id: string;
    /**
     * The dynamic post image
     */
    image_url: string;
    /**
     * The dynamic post link
     */
    link: string;
    /**
     * The post text
     */
    message: string;
    /**
     * The ID of the owner of this post
     */
    owner_id: string;
    /**
     * The place page ID of the dynamic post
     */
    place_id: string;
    /**
     * The product ID
     */
    product_id: string;
    /**
     * The title of the dynamic post
     */
    title: string;
}

interface DynamicPostChildAttachment {
    description: string;
    image_url: string;
    link: string;
    place_id: string;
    product_id: string;
    title: string;
}

export interface PageSettings {
    /**
     * Name of the setting
     */
    setting: string; // enum
    /**
     * Current state of the setting
     */
    value:
        | boolean
        | string
        | {
              restriction_type: unknown;
              countries: unknown;
          };
}
export interface CommerceMerchantSettingsSetupStatus {
    /**
     * Merchant deals setup status
     */
    deals_setup: string; // enum
    /**
     * Merchant marketplace approval status
     */
    marketplace_approval_status: string; // enum
    /**
     * Merchant marketplace approval status details
     */
    marketplace_approval_status_details: unknown; // CommerceMarketplaceApprovalStatusDetails
    /**
     * Merchant payments setup status
     */
    payment_setup: string; // enum
    /**
     * Shop review status
     */
    review_status: unknown; // CommerceShopReviewStatus
    /**
     * Merchant shop setup status
     */
    shop_setup: string; // enum
}
export interface Tab {
    /**
     * A concatenation of the Page ID, /tabs/ and the tab app ID prefixed with app_: {page-id}/tabs/app_{app-id}
     */
    id: string;
    /**
     * The app that is in the tab
     */
    application: Application;
    /**
     * URL for an image to be used as a custom icon
     */
    custom_image_url: string;
    /**
     * Name to be used for the tab
     */
    custom_name: string;
    /**
     * The location of the tab thumbnail image
     */
    image_url: string;
    /**
     * A flag to identify whether the tab is a custom landing tab for users who are not connected to this Page
     */
    is_non_connection_landing_tab: boolean;
    /**
     * A flag to identify whether the tab can be removed from the Page
     */
    is_permanent: boolean;
    /**
     * A link directly to this Page tab
     */
    link: string;
    /**
     * The tab name, which can be different from the name of the app it links to
     */
    name: string;
    /**
     * Where this tab is located in the list of tabs
     */
    position: number;
}
export interface PageThreadOwner {
    /**
     * App which owns a thread for Handover Protocol
     */
    thread_owner: unknown; // PageThreadOwnerDetails
}

export interface VideoList {
    /**
     * Video playlist ID
     */
    id: string;
    /**
     * The time when the playlist was created
     */
    creation_time: string;
    /**
     * Description of the playlist
     */
    description: string;
    /**
     * The time when the contents of the playlist was last changed
     */
    last_modified: string;
    /**
     * Owner of the playlist
     */
    owner: User | Page;
    /**
     * Number of Season which this episode belongs to
     */
    season_number: number;
    /**
     * Thumbnail of the playlist
     */
    thumbnail: string;
    /**
     * Title of the playlist
     */
    title: string;
    /**
     * Number of Videos in the playlist
     */
    videos_count: number;
}

export interface SingleRecommendationStory {
    /**
     * The object's ID
     */
    id: string;
    /**
     * The application used to create this content
     */
    application: Application;
    /**
     * Information about the attached star rating/recommendation
     */
    data: unknown; // RecommendationData
    /**
     * The actor of the Open Graph Action
     */
    from: User;
    /**
     * Review text included in the review
     */
    message: string;
    /**
     * The time when the Action was published
     */
    publish_time: string;
    /**
     * When the reviewer rated this object
     */
    start_time: string;
    /**
     * The type of rating
     */
    type: string;
}

export interface EventTour {
    description: string;
    dominant_color: string;
    end_time: string;
    id: string;
    is_past: boolean;
    last_event_timestamp: number;
    name: string;
    num_events: number;
    photo: Photo;
    publishing_state: string;
    scheduled_publish_timestamp: number;
    start_time: string;
    ticketing_uri: string;
    video: AdVideo;
}

export interface BusinessAssetGroup {
    /**
     * ID of the business asset group
     */
    id: string;
    /**
     * Name of the business asset group
     */
    name: string;
}
export interface Permission {
    /**
     * Name of the permission
     */
    permission: string;
    /**
     * Permission status
     */
    status: string; // enum
}
export interface UserIDForApp {
    /**
     * ID
     */
    id: string;
    /**
     * app
     */
    app: Application;
}

export interface AdVideo extends Video {}
export interface UserIDForPage {
    /**
     * The ID this user has for the page
     */
    id: string;
    /**
     * The page
     */
    page: Page;
}
export interface PaymentSubscription {
    /**
     * id
     */
    id: string;
    /**
     * amount
     */
    amount: string;
    /**
     * app_param_data
     */
    app_param_data: string;
    /**
     * application
     */
    application: Application;
    /**
     * billing_period
     */
    billing_period: string;
    /**
     * canceled_reason
     */
    canceled_reason: string;
    /**
     * created_time
     */
    created_time: string;
    /**
     * currency
     */
    currency: string;
    /**
     * last_payment
     */
    last_payment: PaymentEnginePayment;
    /**
     * next_bill_time
     */
    next_bill_time: string;
    /**
     * next_period_amount
     */
    next_period_amount: string;
    /**
     * next_period_currency
     */
    next_period_currency: string;
    /**
     * next_period_product
     */
    next_period_product: string;
    /**
     * payment_status
     */
    payment_status: string;
    /**
     * pending_cancel
     */
    pending_cancel: boolean;
    /**
     * period_start_time
     */
    period_start_time: string;
    /**
     * product
     */
    product: string;
    /**
     * status
     */
    status: string;
    /**
     * test
     */
    test: number;
    /**
     * trial_amount
     */
    trial_amount: string;
    /**
     * trial_currency
     */
    trial_currency: string;
    /**
     * trial_expiry_time
     */
    trial_expiry_time: string;
    /**
     * updated_time
     */
    updated_time: string;
    /**
     * user
     */
    user: User;
}
export interface PaymentEnginePayment {
    /**
     * id
     */
    id: string;
    /**
     * actions
     */
    actions: unknown[]; // PaymentActionLegacy[]
    /**
     * application
     */
    application: Application;
    /**
     * country
     */
    country: string;
    /**
     * created_time
     */
    created_time: string;
    /**
     * disputes
     */
    disputes: unknown[]; // PaymentDispute[]
    /**
     * fraud_status
     */
    fraud_status: string;
    /**
     * fulfillment_status
     */
    fulfillment_status: string;
    /**
     * is_from_ad
     */
    is_from_ad: boolean;
    /**
     * is_from_page_post
     */
    is_from_page_post: boolean;
    /**
     * items
     */
    items: unknown[]; // PaymentItem[]
    /**
     * payout_foreign_exchange_rate
     */
    payout_foreign_exchange_rate: number;
    /**
     * phone_support_eligible
     */
    phone_support_eligible: boolean;
    /**
     * refundable_amount
     */
    refundable_amount: CurrencyAmount;
    /**
     * request_id
     */
    request_id: string;
    /**
     * tax
     */
    tax: string;
    /**
     * tax_country
     */
    tax_country: string;
    /**
     * test
     */
    test: number;
    /**
     * user
     */
    user: User;
}

interface CurrencyAmount {
    amount: string;
    amount_in_hundredths: string;
    currency: string;
    offsetted_amount: string;
}

export interface AppRequestFormerRecipient {
    /**
     * Viewer ID
     */
    id: string;
    /**
     * Recipient ID
     */
    recipient_id: string;
}

export interface URL {
    /**
     * The URL being queried
     */
    id: string;
    /**
     * Instant Article object for the URL, in development mode
     */
    development_instant_article: InstantArticle;
    /**
     * The engagement counts associated with the URL
     */
    engagement: URLEngagementData;
    /**
     * Instant Article object for the URL
     */
    instant_article: InstantArticle;
    /**
     * Open Graph Object for the URL
     */
    og_object: OpenGraphObject__generic;
    /**
     * Permissions based on ownership of the URL
     */
}

interface URLEngagementData {
    /**
     * Number of comments on the URL.
     */
    comment_count: number;

    /**
     * Number of comments on the plugin gathered using the [Comments Plugin](https://developers.facebook.com/docs/plugins/comments/) on your site.
     */
    comment_plugin_count: number;

    /**
     * Number of reactions to the URL.
     */
    reaction_count: number;

    /**
     * Number of times the URL was shared.
     */
    share_count: number;
}