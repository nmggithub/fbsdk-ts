import axios, { AxiosError, AxiosInstance } from 'axios';
import { APISpec, APISpecNodeCollection, APIv9 } from './api-spec';
import Node, { Edge } from './api-spec/node';
import crypto from 'crypto';

interface FacebookAppConfig {
    readonly appId: string;
    readonly appSecret: string;
}

interface FacebookGraphAPIError {
    message: string;
    type: string;
    code: number;
    fbtrace_id: string;
}

const handleFacebookError = (e: AxiosError) => {
    const { status, data } = e.response;
    if (status.toString()[0] === '4') {
        const _fbError = (<{ error: FacebookGraphAPIError }>data).error;
        const fbError = new Error();
        fbError.message = _fbError.message;
        fbError.name = _fbError.type;
        throw fbError;
    } else throw new Error('Unexpected error');
};

export abstract class FacebookAppBase<API extends APISpec> {
    protected graphAPIAxiosInstance: AxiosInstance;

    constructor(private config: FacebookAppConfig) {}

    private makeAppSecretProof = (accessToken: string) =>
        crypto
            .createHmac('sha256', this.config.appSecret)
            .update(accessToken)
            .digest('hex')
            .toString();

    protected GraphAPI = {
        get: async <ReturnType, ParamsType = any>(
            endpoint: string,
            _params?: ParamsType & { access_token: string }
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    (await this.graphAPIAxiosInstance.get(endpoint, { params })).data
                );
                return response;
            } catch (e) {
                handleFacebookError(e);
            }
        },
        post: async <ReturnType, DataType = any, ParamsType = any>(
            endpoint: string,
            data: DataType,
            _params?: ParamsType & { access_token: string }
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    (await this.graphAPIAxiosInstance.post(endpoint, data, { params })).data
                );
                return response;
            } catch (e) {
                handleFacebookError(e);
            }
        },
        delete: async <ReturnType, ParamsType = any>(
            endpoint: string,
            _params?: ParamsType & { access_token: string }
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    (await this.graphAPIAxiosInstance.delete(endpoint, { params })).data
                );
                return response;
            } catch (e) {
                handleFacebookError(e);
            }
        },
    };

    protected abstract _Nodes: APISpecNodeCollection<API>;
}

export abstract class FacebookAppNoExposedNodes extends FacebookAppBase<APIv9> {
    constructor(config: FacebookAppConfig) {
        super(config);
        this.graphAPIAxiosInstance = axios.create({ baseURL: `https://graph.facebook.com/v9.0` });
    }
    protected _Nodes: APISpecNodeCollection<APIv9> = {
        Album: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Comments: new Edge('comments', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                    Photos: new Edge('photos', this.GraphAPI, id),
                    Picture: new Edge('picture', this.GraphAPI, id),
                },
                id
            ),
        AppRequest: (id: string) => new Node(this.GraphAPI, {}, id),
        Application: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Accounts: new Edge('accounts', this.GraphAPI, id),
                    AdNetworkAnalyticsResults: new Edge(
                        'adnetworkanalytics_results',
                        this.GraphAPI,
                        id
                    ),
                    Agencies: new Edge('agencies', this.GraphAPI, id),
                    AppEventTypes: new Edge('app_events_types', this.GraphAPI, id),
                    AppInsights: new Edge('app_insights', this.GraphAPI, id),
                    AppInstalledGroups: new Edge('app_installed_groups', this.GraphAPI, id),
                    AppAssets: new Edge('appassets', this.GraphAPI, id),
                    AuthorizedAdAccounts: new Edge('authorized_adaccounts', this.GraphAPI, id),
                    ButtonAutoDetectionDeviceSelection: new Edge(
                        'button_auto_detection_device_selection',
                        this.GraphAPI,
                        id
                    ),
                    DAChecks: new Edge('da_checks', this.GraphAPI, id),
                    Events: new Edge('events', this.GraphAPI, id),
                    iOSSKAdNetworkConversionConfig: new Edge(
                        'ios_skadnetwork_conversion_config',
                        this.GraphAPI,
                        id
                    ),
                    MobileSDKGK: new Edge('mobile_sdk_gk', this.GraphAPI, id),
                    ModelAsset: new Edge('model_asset', this.GraphAPI, id),
                    Permissions: new Edge('permissions', this.GraphAPI, id),
                    Products: new Edge('products', this.GraphAPI, id),
                    Purchases: new Edge('purchases', this.GraphAPI, id),
                    Roles: new Edge('roles', this.GraphAPI, id),
                    SubscribedDomains: new Edge('subscribed_domains', this.GraphAPI, id),
                    SubscribedDomainsPhishing: new Edge(
                        'subscribed_domains_phishing',
                        this.GraphAPI,
                        id
                    ),
                },
                id
            ),
        AsyncSession: (id: string) => new Node(this.GraphAPI, {}, id),
        CPASAdvertiserPartnershipRecommendation: (id: string) => new Node(this.GraphAPI, {}, id),
        CPASCollaborationRequest: (id: string) => new Node(this.GraphAPI, {}, id),
        CTCertDomain: (id: string) => new Node(this.GraphAPI, {}, id),
        Comment: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Comments: new Edge('comments', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                    PrivateReplies: new Edge('private_replies', this.GraphAPI, id),
                    Reactions: new Edge('reactions', this.GraphAPI, id),
                },
                id
            ),
        CommerceMerchantSettings: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    OrderManagementsApps: new Edge('order_management_apps', this.GraphAPI, id),
                    ProductCatalogs: new Edge('product_catalogs', this.GraphAPI, id),
                    Returns: new Edge('returns', this.GraphAPI, id),
                    SetupStatus: new Edge('setup_status', this.GraphAPI, id),
                    TaxSettings: new Edge('tax_settings', this.GraphAPI, id),
                },
                id
            ),
        Conversation: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Messages: new Edge('messages', this.GraphAPI, id),
                },
                id
            ),
        Destination: (id: string) => new Node(this.GraphAPI, {}, id),
        Doc: (id: string) => new Node(this.GraphAPI, {}, id),
        Domain: (id: string) => new Node(this.GraphAPI, {}, id),
        Event: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Roles: new Edge('roles', this.GraphAPI, id),
                },
                id
            ),
        Flight: (id: string) => new Node(this.GraphAPI, {}, id),
        FriendList: (id: string) => new Node(this.GraphAPI, {}, id),
        Group: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Albums: new Edge('albums', this.GraphAPI, id),
                    Docs: new Edge('docs', this.GraphAPI, id),
                    Events: new Edge('events', this.GraphAPI, id),
                    Feed: new Edge('feed', this.GraphAPI, id),
                    Files: new Edge('files', this.GraphAPI, id),
                    LiveVideos: new Edge('live_videos', this.GraphAPI, id),
                    Photos: new Edge('photos', this.GraphAPI, id),
                    Videos: new Edge('videos', this.GraphAPI, id),
                },
                id
            ),
        GroupDoc: (id: string) => new Node(this.GraphAPI, {}, id),
        GroupMessage: (id: string) => new Node(this.GraphAPI, {}, id),
        ImageCopyright: (id: string) => new Node(this.GraphAPI, {}, id),
        LeadGenData: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Leads: new Edge('leads', this.GraphAPI, id),
                    TestLeads: new Edge('test_leads', this.GraphAPI, id),
                },
                id
            ),
        Link: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Comments: new Edge('comments', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                },
                id
            ),
        LiveEncoder: (id: string) => new Node(this.GraphAPI, {}, id),
        LiveVideo: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    BlockedUsers: new Edge('blocked_users', this.GraphAPI, id),
                    Comments: new Edge('comments', this.GraphAPI, id),
                    CrosspostSharedPages: new Edge('crosspost_shared_pages', this.GraphAPI, id),
                    CrosspostedBroadcasrs: new Edge('crossposted_broadcasts', this.GraphAPI, id),
                    Errors: new Edge('errors', this.GraphAPI, id),
                    Polls: new Edge('polls', this.GraphAPI, id),
                    Reactions: new Edge('reactions', this.GraphAPI, id),
                },
                id
            ),
        LiveVideoInputStream: (id: string) => new Node(this.GraphAPI, {}, id),
        MailingAddress: (id: string) => new Node(this.GraphAPI, {}, id),
        MediaFingerprint: (id: string) => new Node(this.GraphAPI, {}, id),
        NativeOffer: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Views: new Edge('views', this.GraphAPI, id),
                },
                id
            ),
        OfflineConversionDataSet: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    AdAccounts: new Edge('adaccounts', this.GraphAPI, id),
                    Agencies: new Edge('agencies', this.GraphAPI, id),
                    Audiences: new Edge('audiences', this.GraphAPI, id),
                    CustomConversations: new Edge('customconversations', this.GraphAPI, id),
                    Stats: new Edge('stats', this.GraphAPI, id),
                    Uploads: new Edge('uploads', this.GraphAPI, id),
                },
                id
            ),
        OfflineConversionDataSetUpload: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Progress: new Edge('progress', this.GraphAPI, id),
                },
                id
            ),
        Page: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    AdsPosts: new Edge('ads_posts', this.GraphAPI, id),
                    Agencies: new Edge('agencies', this.GraphAPI, id),
                    Albums: new Edge('albums', this.GraphAPI, id),
                    AssignedUsers: new Edge('assigned_users', this.GraphAPI, id),
                    AudioMediaCopyrights: new Edge('audio_media_copyrights', this.GraphAPI, id),
                    Blocked: new Edge('blocked', this.GraphAPI, id),
                    CallToActions: new Edge('call_to_actions', this.GraphAPI, id),
                    ClaimedURLs: new Edge('claimed_urls', this.GraphAPI, id),
                    CommerceMerchantSettings: new Edge(
                        'commerce_merchant_settings',
                        this.GraphAPI,
                        id
                    ),
                    CommerceOrders: new Edge('commerce_orders', this.GraphAPI, id),
                    CommercePayouts: new Edge('commerce_payouts', this.GraphAPI, id),
                    CommerceTransactions: new Edge('commerce_transactions', this.GraphAPI, id),
                    Conversations: new Edge('conversations', this.GraphAPI, id),
                    CopyrightWhitelistedPartners: new Edge(
                        'copyright_whitelisted_partners',
                        this.GraphAPI,
                        id
                    ),
                    CrosspostWhitelistedPages: new Edge(
                        'crosspost_whitelisted_pages',
                        this.GraphAPI,
                        id
                    ),
                    CustomLabels: new Edge('custom_labels', this.GraphAPI, id),
                    CustomUserSettings: new Edge('custom_user_settings', this.GraphAPI, id),
                    Events: new Edge('events', this.GraphAPI, id),
                    Feed: new Edge('feed', this.GraphAPI, id),
                    GlobalBrandChildren: new Edge('global_brand_children', this.GraphAPI, id),
                    ImageCopyrights: new Edge('image_copyrights', this.GraphAPI, id),
                    IndexedVideos: new Edge('indexed_videos', this.GraphAPI, id),
                    Insights: new Edge('insights', this.GraphAPI, id),
                    InstagramAccounts: new Edge('instagram_accounts', this.GraphAPI, id),
                    InstantArticles: new Edge('instant_articles', this.GraphAPI, id),
                    InstantArticlesInsights: new Edge(
                        'instant_articles_insights',
                        this.GraphAPI,
                        id
                    ),
                    LeadgenForms: new Edge('leadgen_forms', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                    LiveEncoders: new Edge('live_encoders', this.GraphAPI, id),
                    LiveVideos: new Edge('live_videos', this.GraphAPI, id),
                    Locations: new Edge('locations', this.GraphAPI, id),
                    Messages: new Edge('messages', this.GraphAPI, id),
                    MediaFingerprints: new Edge('media_fingerprints', this.GraphAPI, id),
                    MessagingFeatureReview: new Edge('messaging_feature_review', this.GraphAPI, id),
                    MessengerProfile: new Edge('messenger_profile', this.GraphAPI, id),
                    Nativeoffers: new Edge('nativeoffers', this.GraphAPI, id),
                    PageBackedInstagramAccounts: new Edge(
                        'page_backed_instagram_accounts',
                        this.GraphAPI,
                        id
                    ),
                    Personas: new Edge('personas', this.GraphAPI, id),
                    Photos: new Edge('photos', this.GraphAPI, id),
                    Picture: new Edge('picture', this.GraphAPI, id),
                    Posts: new Edge('posts', this.GraphAPI, id),
                    ProductCatalogs: new Edge('product_catalogs', this.GraphAPI, id),
                    PublishedPosts: new Edge('published_posts', this.GraphAPI, id),
                    Ratings: new Edge('ratings', this.GraphAPI, id),
                    Roles: new Edge('roles', this.GraphAPI, id),
                    RtbDynamicPosts: new Edge('rtb_dynamic_posts', this.GraphAPI, id),
                    ScheduledPosts: new Edge('scheduled_posts', this.GraphAPI, id),
                    SecondaryReceivers: new Edge('secondary_receivers', this.GraphAPI, id),
                    Settings: new Edge('settings', this.GraphAPI, id),
                    ShopSetupStatus: new Edge('shop_setup_status', this.GraphAPI, id),
                    SubscribedApps: new Edge('subscribed_apps', this.GraphAPI, id),
                    Tabs: new Edge('tabs', this.GraphAPI, id),
                    Tagged: new Edge('tagged', this.GraphAPI, id),
                    ThreadOwner: new Edge('thread_owner', this.GraphAPI, id),
                    Tours: new Edge('tours', this.GraphAPI, id),
                    VideoCopyrightRules: new Edge('video_copyright_rules', this.GraphAPI, id),
                    VideoCopyrights: new Edge('video_copyrights', this.GraphAPI, id),
                    VideoLists: new Edge('video_lists', this.GraphAPI, id),
                    VideoMediaCopyrights: new Edge('video_media_copyrights', this.GraphAPI, id),
                    Videos: new Edge('videos', this.GraphAPI, id),
                    VisitorPosts: new Edge('visitor_posts', this.GraphAPI, id),
                },
                id
            ),
        PageCallToAction: (id: string) => new Node(this.GraphAPI, {}, id),
        PagePost: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Comments: new Edge('comments', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                    Reactions: new Edge('reactions', this.GraphAPI, id),
                },
                id
            ),
        Photo: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    Likes: new Edge('likes', this.GraphAPI, id),
                },
                id
            ),
        User: (id: string) =>
            new Node(
                this.GraphAPI,
                {
                    'Payment.subscriptions': new Edge('payment.subscriptions', this.GraphAPI, id),
                    Accounts: new Edge('accounts', this.GraphAPI, id),
                    AdStudies: new Edge('ad_studies', this.GraphAPI, id),
                    Adaccounts: new Edge('adaccounts', this.GraphAPI, id),
                    Albums: new Edge('albums', this.GraphAPI, id),
                    AppRequestFormerRecipients: new Edge(
                        'apprequestformerrecipients',
                        this.GraphAPI,
                        id
                    ),
                    AppRequests: new Edge('apprequests', this.GraphAPI, id),
                    AssignedAdAccounts: new Edge('assigned_ad_accounts', this.GraphAPI, id),
                    AssignedBusinessAssetGroups: new Edge(
                        'assigned_business_asset_groups',
                        this.GraphAPI,
                        id
                    ),
                    AssignedPages: new Edge('assigned_pages', this.GraphAPI, id),
                    AssignedProductCatalogs: new Edge(
                        'assigned_product_catalogs',
                        this.GraphAPI,
                        id
                    ),
                    BusinessUsers: new Edge('business_users', this.GraphAPI, id),
                    Businesses: new Edge('businesses', this.GraphAPI, id),
                    Events: new Edge('events', this.GraphAPI, id),
                    Feed: new Edge('feed', this.GraphAPI, id),
                    Friends: new Edge('friends', this.GraphAPI, id),
                    Groups: new Edge('groups', this.GraphAPI, id),
                    IdsForApps: new Edge('ids_for_apps', this.GraphAPI, id),
                    IdsForBusiness: new Edge('ids_for_business', this.GraphAPI, id),
                    IdsForPages: new Edge('ids_for_pages', this.GraphAPI, id),
                    Likes: new Edge('likes', this.GraphAPI, id),
                    LiveEncoders: new Edge('live_encoders', this.GraphAPI, id),
                    LiveVideos: new Edge('live_videos', this.GraphAPI, id),
                    Music: new Edge('music', this.GraphAPI, id),
                    PaymentTransactions: new Edge('payment_transactions', this.GraphAPI, id),
                    Permissions: new Edge('permissions', this.GraphAPI, id),
                    PersonalAdAccounts: new Edge('personal_ad_accounts', this.GraphAPI, id),
                    Photos: new Edge('photos', this.GraphAPI, id),
                    Picture: new Edge('picture', this.GraphAPI, id),
                    Posts: new Edge('posts', this.GraphAPI, id),
                    Videos: new Edge('videos', this.GraphAPI, id),
                },
                id
            ),
        Video: (id: string) => new Node(this.GraphAPI, {}, id),
        VideoList: (id: string) => new Node(this.GraphAPI, {}, id),
        VideoPoll: (id: string) => new Node(this.GraphAPI, {}, id),
    };
}

export class FacebookApp extends FacebookAppNoExposedNodes {
    public Nodes = this._Nodes;
}

export { APISpec };
