import Node, { CRUDNodeInfo, CRUDEdgeInfoSet } from './node';
import { AdAccount, AdNetworkAnalyticsAsyncQueryResult, Album, Application, ApplicationAppEventTypes, ApplicationPermission, ApplicationPermissionStatus, AppRequest, AsyncSession, Business, ButtonAutoDetectionDeviceSelection, CanvasAppAsset, Comment, CommerceMerchantSettings, ConversionConfig, CPASAdvertiserPartnershipRecommendation, CPASCollaborationRequest, CTCertDomain, DACheck, GamesIAPProduct, InsightsQueryResult, MobileSDKGK, Photo, ProductCatalog, Profile, ProfilePictureSource, Reaction, CommerceReturn, Role, SDKMLModel, TestAccount, Conversation, Message, Destination, Doc, Flight, FriendList, GroupDoc, GroupMessage, ImageCopyright, LeadGenData, UserLeadGenInfo, Link, LiveVideo, LiveVideoInputStream, LiveEncoder, User, Page, LiveVideoError, VideoPoll, MailingAddress, GroupFile, MediaFingerprint, NativeOffer, NativeOfferView, OfflineConversionDataSet, OfflineConversionDataSetUpload, CustomAudience, CustomConversion, OfflineConversionDataSetStats, CommerceMerchantTaxSettings, Video, Post, SignalsUploadProgress, GamesIAPOrder, PagePost, AssignedUser, AudioCopyright, CommerceMerchantSettingsSetupStatus, CommerceOrder, CommerceOrderTransactionDetail, CommercePayout, CustomUserSettings, InsightsResult, InstagramUser, InstantArticle, InstantArticleInsightsQueryResult, MessagingFeatureReview, MessengerProfile, PageCallToAction, PageSettings, PageThreadOwner, PageUserMessageThreadLabel, Persona, Recommendation, RTBDynamicPost, Tab, VideoCopyright, VideoCopyrightRule, VideoList, EventTour, Group, InsightBreakdown, BusinessUser, BusinessAssetGroup, Permission, UserIDForApp, AdStudy, PaymentEnginePayment, PaymentSubscription, UserIDForPage, AppRequestFormerRecipient } from '../graph-api/types';
interface NodeGetterTypeParams {
    node: CRUDNodeInfo;
    edges: CRUDEdgeInfoSet;
}
export declare type APISpec = {
    [key: string]: NodeGetterTypeParams;
};
export interface APIv9 extends APISpec {
    Album: {
        node: NodeSpec<Album>;
        edges: Pick<CommonEdges, 'Likes' | 'Comments'> & {
            Photos: EdgeSpec<Photo, 'photos'>;
            Picture: EdgeSpec<ProfilePictureSource, 'picture'> & {
                /**
                 * Default value: `true`
                 *
                 * By default the picture edge will return a picture instead of a JSON response. If you want the picture edge to return JSON that describes the image set redirect=0 when you make the request.
                 */
                redirect: boolean;
                /**
                 * Default value: `album`
                 *
                 * The size of this picture. It can be one of the following values: thumbnail, small, album.
                 */
                type: 'thumbnail' | 'small' | 'album';
            };
        };
    };
    AppRequest: EdgelessNodeSpec<AppRequest>;
    Application: {
        node: NodeSpec<Application>;
        edges: {
            Accounts: EdgeSpec<TestAccount & {
                access_token: string;
            }, 'accounts'> & {
                read_params: {
                    /**
                     * The type of user requested
                     */
                    type: 'test-users';
                };
            };
            AdNetworkAnalyticsResults: EdgeSpec<AdNetworkAnalyticsAsyncQueryResult, 'adnetworkanalytics_results'> & {
                read_params: {
                    /**
                     * Default value: `Array`
                     *
                     * Set of query ids to get result for
                     */
                    query_ids: string;
                };
            };
            Agencies: EdgeSpec<Business, 'agencies'>;
            AppEventTypes: EdgeSpec<ApplicationAppEventTypes, 'app_events_types'>;
            AppInsights: EdgeSpec<InsightsQueryResult, 'app_insights'> & {
                read_params: {
                    breakdowns: InsightBreakdown[];
                    ecosystem: 'GAME' | 'NON_GAME';
                    event_name: string;
                    intervals_to_aggregate: number;
                    since: string;
                    until: string;
                } & ({
                    metric_key: 'api_avg_request_time' | 'api_calls' | 'api_errors' | 'payments_daily_chargebacks' | 'payments_daily_refunds' | 'payments_daily_spend';
                    period: 'daily' | 'range';
                } | {
                    metric_key: 'facebook_features_monthly_active_users' | 'facebook_features_weekly_active_users' | 'facebook_features_daily_active_users';
                    period: 'daily';
                });
            };
            AppInstalledGroups: EdgeSpec<Group, 'app_installed_groups'> & {
                read_params: {
                    group_id: string;
                };
            };
            AppAssets: EdgeSpec<CanvasAppAsset, 'appassets'>;
            AuthorizedAdAccounts: EdgeSpec<AdAccount, 'authorized_adaccounts'> & {
                read_params: {
                    business: string;
                };
            };
            ButtonAutoDetectionDeviceSelection: EdgeSpec<ButtonAutoDetectionDeviceSelection, 'button_auto_detection_device_selection'> & {
                read_params: {
                    device_id: string;
                };
            };
            DAChecks: EdgeSpec<DACheck, 'da_checks'> & {
                read_params: {
                    checks: string[];
                    connection_method: 'ALL' | 'APP' | 'BROWSER' | 'SERVER';
                };
            };
            Events: EdgeSpec<Event, 'events'> & {
                read_params: {
                    include_canceld: boolean;
                    type: 'attending' | 'created' | 'declined' | 'maybe' | 'not_replied';
                };
            };
            iOSSKAdNetworkConversionConfig: EdgeSpec<ConversionConfig, 'ios_skadnetwork_conversion_config'>;
            MobileSDKGK: EdgeSpec<MobileSDKGK, 'mobile_sdk_gk'> & {
                read_params: {
                    device_id: string;
                    extinfo: {
                        0: string;
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        7: string;
                        8: string;
                        9: number;
                        10: number;
                        11: string;
                        12: number;
                        13: number;
                        14: number;
                        15: number;
                    };
                    platform: 'ANDROID' | 'IOS';
                    sdk_version: string;
                };
            };
            ModelAsset: EdgeSpec<SDKMLModel, 'model_asset'>;
            Permissions: EdgeSpec<ApplicationPermission, 'permissions'> & {
                read_params: {
                    android_key_hash: string;
                    ios_bundle_id: string;
                    permission: unknown[];
                    proxied_app_id: number;
                    status: ApplicationPermissionStatus[];
                };
            };
            Products: EdgeSpec<GamesIAPProduct, 'products'> & {
                read_params: {
                    product_ids: string[];
                };
            };
            Purchases: EdgeSpec<GamesIAPOrder, 'purchases'> & {
                read_params: {
                    is_premium: boolean;
                };
            };
            Roles: EdgeSpec<Role, 'roles'>;
            SubscribedDomains: EdgeSpec<CTCertDomain, 'subscribed_domains'>;
            SubscribedDomainsPhishing: EdgeSpec<CTCertDomain, 'subscribed_domains_phishing'>;
        };
    };
    AsyncSession: EdgelessNodeSpec<AsyncSession>;
    CPASAdvertiserPartnershipRecommendation: EdgelessNodeSpec<CPASAdvertiserPartnershipRecommendation>;
    CPASCollaborationRequest: EdgelessNodeSpec<CPASCollaborationRequest>;
    CTCertDomain: EdgelessNodeSpec<CTCertDomain>;
    Comment: {
        node: NodeSpec<Comment>;
        edges: {
            Comments: CommentsEdge;
            Likes: LikesEdge;
            Reactions: ReactionsEdge;
            PrivateReplies: EdgeSpec<Message, 'private_replies'>;
        };
    };
    CommerceMerchantSettings: {
        node: NodeSpec<CommerceMerchantSettings>;
        edges: {
            OrderManagementsApps: EdgeSpec<Application, 'order_management_apps'>;
            ProductCatalogs: EdgeSpec<ProductCatalog, 'product_catalogs'>;
            Returns: EdgeSpec<CommerceReturn, 'returns'>;
            SetupStatus: EdgeSpec<CommerceMerchantSettings, 'setup_status'>;
            TaxSettings: EdgeSpec<CommerceMerchantTaxSettings, 'tax_settings'>;
        };
    };
    Conversation: {
        node: NodeSpec<Conversation>;
        edges: {
            Messages: EdgeSpec<Message, 'messages'>;
        };
    };
    Destination: EdgelessNodeSpec<Destination>;
    Doc: EdgelessNodeSpec<Doc>;
    Event: {
        node: NodeSpec<Event>;
        edges: {
            Roles: EdgeSpec<Profile & {
                role_type: unknown;
            }, 'roles'>;
        };
    };
    Flight: EdgelessNodeSpec<Flight>;
    FriendList: EdgelessNodeSpec<FriendList>;
    Group: {
        node: NodeSpec<Group>;
        edges: {
            Albums: EdgeSpec<Album, 'albums'>;
            Docs: EdgeSpec<GroupDoc, 'docs'>;
            Events: EdgeSpec<Event, 'events'>;
            Feed: EdgeSpec<Post, 'feed'>;
            Files: EdgeSpec<GroupFile, 'files'>;
            LiveVideos: EdgeSpec<LiveVideo, 'live_videos'> & {
                read_params: {
                    broadcast_status: 'UNPUBLISHED' | 'LIVE' | 'LIVE_STOPPED' | 'PROCESSING' | 'VOD' | 'SCHEDULED_UNPUBLISHED' | 'SCHEDULED_LIVE' | 'SCHEDULED_EXPIRED' | 'SCHEDULED_CANCELED';
                    source: 'target' | 'owner';
                };
            };
            Photos: EdgeSpec<Photo, 'photos'>;
            Videos: EdgeSpec<Video, 'videos'>;
        };
    };
    GroupDoc: EdgelessNodeSpec<GroupDoc>;
    GroupMessage: EdgelessNodeSpec<GroupMessage>;
    ImageCopyright: EdgelessNodeSpec<ImageCopyright>;
    LeadGenData: {
        node: NodeSpec<LeadGenData>;
        edges: {
            Leads: EdgeSpec<UserLeadGenInfo, 'leads'>;
            TestLeads: EdgeSpec<UserLeadGenInfo, 'test_leads'>;
        };
    };
    Link: {
        node: NodeSpec<Link>;
        edges: Pick<CommonEdges, 'Likes' | 'Comments'>;
    };
    LiveEncoder: EdgelessNodeSpec<LiveEncoder>;
    LiveVideo: {
        node: NodeSpec<LiveVideo>;
        edges: Pick<CommonEdges, 'Reactions' | 'Comments'> & {
            BlockedUsers: EdgeSpec<User, 'blocked_users'>;
            CrosspostSharedPages: EdgeSpec<Page, 'crosspost_shared_pages'>;
            CrosspostedBroadcasrs: EdgeSpec<LiveVideo, 'crossposted_broadcasts'>;
            Errors: EdgeSpec<LiveVideoError, 'errors'>;
            Polls: EdgeSpec<VideoPoll, 'polls'>;
        };
    };
    LiveVideoInputStream: EdgelessNodeSpec<LiveVideoInputStream>;
    MailingAddress: EdgelessNodeSpec<MailingAddress>;
    MediaFingerprint: EdgelessNodeSpec<MediaFingerprint>;
    NativeOffer: {
        node: NodeSpec<NativeOffer>;
        edges: {
            Views: EdgeSpec<NativeOfferView, 'views'>;
        };
    };
    OfflineConversionDataSet: {
        node: NodeSpec<OfflineConversionDataSet>;
        edges: {
            AdAccounts: EdgeSpec<AdAccount & {
                auto_track_for_ads: boolean;
                auto_track_for_ads_timestamp: number;
            }, 'adaccounts'> & {
                read_params: {
                    business: string;
                };
            };
            Agencies: EdgeSpec<Business & {
                permitted_roles: ('ADMIN' | 'UPLOADER' | 'ADVERTISER')[];
            }, 'agencies'>;
            Audiences: EdgeSpec<CustomAudience, 'audiences'> & {
                read_params: {
                    ad_account: string;
                };
            };
            CustomConversations: EdgeSpec<CustomConversion, 'customconversations'> & {
                read_params: {
                    ad_account: string;
                };
            };
            Stats: EdgeSpec<OfflineConversionDataSetStats, 'stats'> & {
                read_params: {
                    aggr_time: 'upload_time' | 'event_time';
                    end: number;
                    granularity: 'daily' | 'hourly' | 'six_hourly';
                    skip_empty_values: boolean;
                    start: number;
                    user_timezone_id: number;
                };
            };
            Uploads: EdgeSpec<OfflineConversionDataSetUpload, 'uploads'> & {
                read_params: {
                    end_time: string;
                    order: 'ASCENDING' | 'DESCENDING';
                    sort_by: 'CREATION_TIME' | 'FIRST_UPLOAD_TIME' | 'LAST_UPLOAD_TIME' | 'API_CALLS' | 'EVENT_TIME_MIN' | 'EVENT_TIME_MAX' | 'IS_EXCLUDED_FOR_LIFT';
                    start_time: string;
                    upload_tag: string;
                };
            };
        };
    };
    OfflineConversionDataSetUpload: {
        node: NodeSpec<OfflineConversionDataSetUpload>;
        edges: {
            Progress: EdgeSpec<SignalsUploadProgress, 'progress'>;
        };
    };
    Page: {
        node: NodeSpec<Page>;
        edges: {
            AdsPosts: EdgeSpec<PagePost, 'ads_posts'> & {
                read_params: {
                    /**
                     * Default value: `false`
                     *
                     * Exclude dynamic ad posts from the request
                     */
                    exclude_dynamic_ads: boolean;
                    /**
                     * Default value: `false`
                     *
                     * Include also the INLINE_CREATE posts which are created to support delivered ads.
                     */
                    include_inline_create: boolean;
                    /**
                     * The earliest timestamp of return data set
                     */
                    since: string;
                    /**
                     * The latest timestamp of return data set
                     */
                    until: string;
                };
            };
            Agencies: EdgeSpec<Business, 'agencies'>;
            Albums: EdgeSpec<Album, 'albums'>;
            AssignedUsers: EdgeSpec<AssignedUser, 'assigned_users'>;
            AudioMediaCopyrights: EdgeSpec<AudioCopyright, 'audio_media_copyrights'>;
            Blocked: EdgeSpec<Profile, 'blocked'>;
            CallToActions: EdgeSpec<PageCallToAction, 'call_to_actions'>;
            ClaimedURLs: EdgeSpec<URL, 'claimed_urls'>;
            CommerceMerchantSettings: EdgeSpec<CommerceMerchantSettings, 'commerce_merchant_settings'>;
            CommerceOrders: EdgeSpec<CommerceOrder, 'commerce_orders'>;
            CommercePayouts: EdgeSpec<CommercePayout, 'commerce_payouts'>;
            CommerceTransactions: EdgeSpec<CommerceOrderTransactionDetail, 'commerce_transactions'>;
            Conversations: EdgeSpec<Conversation, 'conversations'>;
            CopyrightWhitelistedPartners: EdgeSpec<Profile, 'copyright_whitelisted_partners'>;
            CrosspostWhitelistedPages: EdgeSpec<Page, 'crosspost_whitelisted_pages'>;
            CustomLabels: EdgeSpec<PageUserMessageThreadLabel, 'custom_labels'>;
            CustomUserSettings: EdgeSpec<CustomUserSettings, 'custom_user_settings'>;
            Events: EdgeSpec<Event, 'events'>;
            Feed: EdgeSpec<PagePost, 'feed'>;
            GlobalBrandChildren: EdgeSpec<Page, 'global_brand_children'>;
            ImageCopyrights: EdgeSpec<ImageCopyright, 'image_copyrights'>;
            IndexedVideos: EdgeSpec<Video, 'indexed_videos'>;
            Insights: EdgeSpec<InsightsResult, 'insights'>;
            InstagramAccounts: EdgeSpec<InstagramUser, 'instagram_accounts'>;
            InstantArticles: EdgeSpec<InstantArticle, 'instant_articles'>;
            InstantArticlesInsights: EdgeSpec<InstantArticleInsightsQueryResult, 'instant_articles_insights'>;
            LeadgenForms: EdgeSpec<LeadGenData, 'leadgen_forms'>;
            Likes: EdgeSpec<Page, 'likes'>;
            LiveEncoders: EdgeSpec<LiveEncoder, 'live_encoders'>;
            LiveVideos: EdgeSpec<LiveVideo, 'live_videos'>;
            Locations: EdgeSpec<Page, 'locations'>;
            MediaFingerprints: EdgeSpec<MediaFingerprint, 'media_fingerprints'>;
            MessagingFeatureReview: EdgeSpec<MessagingFeatureReview, 'messaging_feature_review'>;
            MessengerProfile: EdgeSpec<MessengerProfile, 'messenger_profile'>;
            Nativeoffers: EdgeSpec<NativeOffer, 'nativeoffers'>;
            PageBackedInstagramAccounts: EdgeSpec<InstagramUser, 'page_backed_instagram_accounts'>;
            Personas: EdgeSpec<Persona, 'personas'>;
            Photos: EdgeSpec<Photo, 'photos'>;
            Picture: EdgeSpec<ProfilePictureSource, 'picture'>;
            Posts: EdgeSpec<PagePost, 'posts'>;
            ProductCatalogs: EdgeSpec<ProductCatalog, 'product_catalogs'>;
            PublishedPosts: EdgeSpec<PagePost, 'published_posts'>;
            Ratings: EdgeSpec<Recommendation, 'ratings'>;
            Roles: EdgeSpec<User, 'roles'>;
            RtbDynamicPosts: EdgeSpec<RTBDynamicPost, 'rtb_dynamic_posts'>;
            ScheduledPosts: EdgeSpec<PagePost, 'scheduled_posts'>;
            SecondaryReceivers: EdgeSpec<Application, 'secondary_receivers'>;
            Settings: EdgeSpec<PageSettings, 'settings'>;
            ShopSetupStatus: EdgeSpec<CommerceMerchantSettingsSetupStatus, 'shop_setup_status'>;
            SubscribedApps: EdgeSpec<Application, 'subscribed_apps'>;
            Tabs: EdgeSpec<Tab, 'tabs'>;
            Tagged: EdgeSpec<PagePost, 'tagged'>;
            ThreadOwner: EdgeSpec<PageThreadOwner, 'thread_owner'>;
            Tours: EdgeSpec<EventTour, 'tours'>;
            VideoCopyrightRules: EdgeSpec<VideoCopyrightRule, 'video_copyright_rules'>;
            VideoCopyrights: EdgeSpec<VideoCopyright, 'video_copyrights'>;
            VideoLists: EdgeSpec<VideoList, 'video_lists'>;
            VideoMediaCopyrights: EdgeSpec<VideoCopyright, 'video_media_copyrights'>;
            Videos: EdgeSpec<Video, 'videos'>;
            VisitorPosts: EdgeSpec<PagePost, 'visitor_posts'>;
        };
    };
    PageCallToAction: EdgelessNodeSpec<PageCallToAction>;
    PagePost: {
        node: NodeSpec<PagePost>;
        edges: Pick<CommonEdges, keyof CommonEdges>;
    };
    Photo: {
        node: NodeSpec<Photo>;
        edges: Pick<CommonEdges, 'Likes'>;
    };
    User: {
        node: NodeSpec<User>;
        edges: {
            Albums: EdgeSpec<Album, 'albums'>;
            AppRequestFormerRecipients: EdgeSpec<AppRequestFormerRecipient, 'apprequestformerrecipients'>;
            AppRequests: EdgeSpec<AppRequest, 'apprequests'>;
            BusinessUsers: EdgeSpec<BusinessUser, 'business_users'>;
            Businesses: EdgeSpec<Business, 'businesses'>;
            Accounts: EdgeSpec<Page, 'accounts'>;
            AdStudies: EdgeSpec<AdStudy, 'ad_studies'>;
            Adaccounts: EdgeSpec<AdAccount, 'adaccounts'>;
            AssignedAdAccounts: EdgeSpec<AdAccount, 'assigned_ad_accounts'>;
            AssignedBusinessAssetGroups: EdgeSpec<BusinessAssetGroup, 'assigned_business_asset_groups'>;
            AssignedPages: EdgeSpec<Page, 'assigned_pages'>;
            AssignedProductCatalogs: EdgeSpec<ProductCatalog, 'assigned_product_catalogs'>;
            Events: EdgeSpec<Event, 'events'>;
            Feed: EdgeSpec<Post, 'feed'>;
            Friends: EdgeSpec<User, 'friends'>;
            Groups: EdgeSpec<Group, 'groups'>;
            IdsForApps: EdgeSpec<UserIDForApp, 'ids_for_apps'>;
            IdsForBusiness: EdgeSpec<UserIDForApp, 'ids_for_business'>;
            IdsForPages: EdgeSpec<UserIDForPage, 'ids_for_pages'>;
            Likes: EdgeSpec<Page, 'likes'>;
            LiveEncoders: EdgeSpec<LiveEncoder, 'live_encoders'>;
            LiveVideos: EdgeSpec<LiveVideo, 'live_videos'>;
            Music: EdgeSpec<Page, 'music'>;
            'Payment.subscriptions': EdgeSpec<PaymentSubscription, 'payment.subscriptions'>;
            PaymentTransactions: EdgeSpec<PaymentEnginePayment, 'payment_transactions'>;
            Permissions: EdgeSpec<Permission, 'permissions'>;
            PersonalAdAccounts: EdgeSpec<AdAccount, 'personal_ad_accounts'>;
            Photos: EdgeSpec<Photo, 'photos'>;
            Picture: EdgeSpec<ProfilePictureSource, 'picture'>;
            Posts: EdgeSpec<Post, 'posts'>;
            Videos: EdgeSpec<Video, 'videos'>;
        };
    };
    Video: {
        node: NodeSpec<Video>;
        edges: {};
    };
    VideoList: {
        node: NodeSpec<VideoList>;
        edges: {};
    };
    VideoPoll: {
        node: NodeSpec<VideoPoll>;
        edges: {};
    };
}
export declare type APISpecNodeCollection<T extends APISpec> = {
    [node in keyof T]: (id?: string) => Node<T[node]['node'], T[node]['edges']>;
};
export declare type NodeSpec<NodeType> = {
    type: NodeType;
};
export declare type EdgeSpec<EdgeType, EdgePath extends string> = {
    type: EdgeType;
    edge: EdgePath;
};
export declare type EdgelessNodeSpec<NodeType> = {
    node: NodeSpec<NodeType>;
    edges: {};
};
declare type CommentsEdge = EdgeSpec<Comment, 'comments'> & {
    read_params: {
        /**
         * Default value: `toplevel`
         *
         * SELF_EXPLANATORY
         */
        filter: 'stream' | 'toplevel';
        /**
         * Default value: `filter_low_quality`
         *
         * For comments on a Live streaming video, this determines whether low quality comments will be filtered out of the results (filtering is enabled by default). In all other circumstances this parameter is ignored.
         */
        live_filter: 'filter_low_quality' | 'no_filter';
        /**
         * Preferred ordering of the comments. Accepts chronological (oldest first) and reverse chronological (newest first). If the comments can be ranked, then the order will always be ranked regardless of this modifier. The best practice for querying comments on a Live video is to continually poll for comments in the reversechronological ordering mode.
         */
        order: 'chronological' | 'reverse_chronological';
        /**
         * Lower bound of the time range to consider
         */
        since: string;
    };
};
declare type LikesEdge = {
    type: Profile;
    edge: 'likes';
};
declare type ReactionsEdge = {
    type: Profile | Reaction;
    edge: 'reactions';
    read_params: {
        type: 'NONE' | 'LIKE' | 'LOVE' | 'WOW' | 'HAHA' | 'SAD' | 'ANGRY' | 'THANKFUL' | 'PRIDE' | 'CARE';
    };
};
export interface CommonEdges {
    Comments: CommentsEdge;
    Likes: LikesEdge;
    Reactions: ReactionsEdge;
}
export {};
