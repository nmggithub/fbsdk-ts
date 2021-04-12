"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookApp = exports.FacebookAppNoExposedNodes = exports.FacebookAppBase = void 0;
const axios_1 = __importDefault(require("axios"));
const node_1 = __importStar(require("./api-spec/node"));
const crypto_1 = __importDefault(require("crypto"));
class FacebookError extends Error {
    constructor(message, name, error_user_msg, error_user_title) {
        super(message);
        this.message = message;
        this.name = name;
        this.error_user_msg = error_user_msg;
        this.error_user_title = error_user_title;
        Error.captureStackTrace(this, FacebookError);
        this.name = name;
    }
}
const handleFacebookError = (e) => {
    const { status, data } = e.response;
    if (status.toString()[0] === '4') {
        const _fbError = data.error;
        const fbError = new FacebookError(_fbError.message, _fbError.type, _fbError.error_user_msg, _fbError.error_user_title);
        throw fbError;
    }
    else
        throw new Error('Unexpected error');
};
class FacebookAppBase {
    constructor(config) {
        this.config = config;
        this.makeAppSecretProof = (accessToken) => crypto_1.default
            .createHmac('sha256', this.config.appSecret)
            .update(accessToken)
            .digest('hex')
            .toString();
        this.GraphAPI = {
            get: (endpoint, _params) => __awaiter(this, void 0, void 0, function* () {
                const params = Object.assign(_params, {
                    appsecret_proof: this.makeAppSecretProof(_params.access_token),
                });
                try {
                    const response = ((yield this.graphAPIAxiosInstance.get(endpoint, { params }))
                        .data);
                    return response;
                }
                catch (e) {
                    handleFacebookError(e);
                }
            }),
            post: (endpoint, data, _params) => __awaiter(this, void 0, void 0, function* () {
                const params = Object.assign(_params, {
                    appsecret_proof: this.makeAppSecretProof(_params.access_token),
                });
                try {
                    const response = (yield this.graphAPIAxiosInstance.post(endpoint, data, {
                        params,
                    })).data;
                    return response;
                }
                catch (e) {
                    handleFacebookError(e);
                }
            }),
            delete: (endpoint, _params) => __awaiter(this, void 0, void 0, function* () {
                const params = Object.assign(_params, {
                    appsecret_proof: this.makeAppSecretProof(_params.access_token),
                });
                try {
                    const response = (yield this.graphAPIAxiosInstance.delete(endpoint, {
                        params,
                    })).data;
                    return response;
                }
                catch (e) {
                    handleFacebookError(e);
                }
            }),
        };
    }
}
exports.FacebookAppBase = FacebookAppBase;
class FacebookAppNoExposedNodes extends FacebookAppBase {
    constructor(config) {
        super(config);
        this._Nodes = {
            AdsPixel: (id) => new node_1.default(this.GraphAPI, { Events: new node_1.Edge('events', Object.assign({}, this.GraphAPI), id) }, id),
            Album: (id) => new node_1.default(this.GraphAPI, {
                Comments: new node_1.Edge('comments', this.GraphAPI, id),
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
                Photos: new node_1.Edge('photos', this.GraphAPI, id),
                Picture: new node_1.Edge('picture', this.GraphAPI, id),
            }, id),
            AppRequest: (id) => new node_1.default(this.GraphAPI, {}, id),
            Application: (id) => new node_1.default(this.GraphAPI, {
                Accounts: new node_1.Edge('accounts', this.GraphAPI, id),
                AdNetworkAnalyticsResults: new node_1.Edge('adnetworkanalytics_results', this.GraphAPI, id),
                Agencies: new node_1.Edge('agencies', this.GraphAPI, id),
                AppEventTypes: new node_1.Edge('app_events_types', this.GraphAPI, id),
                AppInsights: new node_1.Edge('app_insights', this.GraphAPI, id),
                AppInstalledGroups: new node_1.Edge('app_installed_groups', this.GraphAPI, id),
                AppAssets: new node_1.Edge('appassets', this.GraphAPI, id),
                AuthorizedAdAccounts: new node_1.Edge('authorized_adaccounts', this.GraphAPI, id),
                ButtonAutoDetectionDeviceSelection: new node_1.Edge('button_auto_detection_device_selection', this.GraphAPI, id),
                DAChecks: new node_1.Edge('da_checks', this.GraphAPI, id),
                Events: new node_1.Edge('events', this.GraphAPI, id),
                iOSSKAdNetworkConversionConfig: new node_1.Edge('ios_skadnetwork_conversion_config', this.GraphAPI, id),
                MobileSDKGK: new node_1.Edge('mobile_sdk_gk', this.GraphAPI, id),
                ModelAsset: new node_1.Edge('model_asset', this.GraphAPI, id),
                Permissions: new node_1.Edge('permissions', this.GraphAPI, id),
                Products: new node_1.Edge('products', this.GraphAPI, id),
                Purchases: new node_1.Edge('purchases', this.GraphAPI, id),
                Roles: new node_1.Edge('roles', this.GraphAPI, id),
                SubscribedDomains: new node_1.Edge('subscribed_domains', this.GraphAPI, id),
                SubscribedDomainsPhishing: new node_1.Edge('subscribed_domains_phishing', this.GraphAPI, id),
            }, id),
            AsyncSession: (id) => new node_1.default(this.GraphAPI, {}, id),
            CPASAdvertiserPartnershipRecommendation: (id) => new node_1.default(this.GraphAPI, {}, id),
            CPASCollaborationRequest: (id) => new node_1.default(this.GraphAPI, {}, id),
            CTCertDomain: (id) => new node_1.default(this.GraphAPI, {}, id),
            Comment: (id) => new node_1.default(this.GraphAPI, {
                Comments: new node_1.Edge('comments', this.GraphAPI, id),
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
                PrivateReplies: new node_1.Edge('private_replies', this.GraphAPI, id),
                Reactions: new node_1.Edge('reactions', this.GraphAPI, id),
            }, id),
            CommerceMerchantSettings: (id) => new node_1.default(this.GraphAPI, {
                OrderManagementsApps: new node_1.Edge('order_management_apps', this.GraphAPI, id),
                ProductCatalogs: new node_1.Edge('product_catalogs', this.GraphAPI, id),
                Returns: new node_1.Edge('returns', this.GraphAPI, id),
                SetupStatus: new node_1.Edge('setup_status', this.GraphAPI, id),
                TaxSettings: new node_1.Edge('tax_settings', this.GraphAPI, id),
            }, id),
            Conversation: (id) => new node_1.default(this.GraphAPI, {
                Messages: new node_1.Edge('messages', this.GraphAPI, id),
            }, id),
            Destination: (id) => new node_1.default(this.GraphAPI, {}, id),
            Doc: (id) => new node_1.default(this.GraphAPI, {}, id),
            Domain: (id) => new node_1.default(this.GraphAPI, {}, id),
            Event: (id) => new node_1.default(this.GraphAPI, {
                Roles: new node_1.Edge('roles', this.GraphAPI, id),
            }, id),
            Flight: (id) => new node_1.default(this.GraphAPI, {}, id),
            FriendList: (id) => new node_1.default(this.GraphAPI, {}, id),
            Group: (id) => new node_1.default(this.GraphAPI, {
                Albums: new node_1.Edge('albums', this.GraphAPI, id),
                Docs: new node_1.Edge('docs', this.GraphAPI, id),
                Events: new node_1.Edge('events', this.GraphAPI, id),
                Feed: new node_1.Edge('feed', this.GraphAPI, id),
                Files: new node_1.Edge('files', this.GraphAPI, id),
                LiveVideos: new node_1.Edge('live_videos', this.GraphAPI, id),
                Photos: new node_1.Edge('photos', this.GraphAPI, id),
                Videos: new node_1.Edge('videos', this.GraphAPI, id),
            }, id),
            GroupDoc: (id) => new node_1.default(this.GraphAPI, {}, id),
            GroupMessage: (id) => new node_1.default(this.GraphAPI, {}, id),
            ImageCopyright: (id) => new node_1.default(this.GraphAPI, {}, id),
            LeadGenData: (id) => new node_1.default(this.GraphAPI, {
                Leads: new node_1.Edge('leads', this.GraphAPI, id),
                TestLeads: new node_1.Edge('test_leads', this.GraphAPI, id),
            }, id),
            Link: (id) => new node_1.default(this.GraphAPI, {
                Comments: new node_1.Edge('comments', this.GraphAPI, id),
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
            }, id),
            LiveEncoder: (id) => new node_1.default(this.GraphAPI, {}, id),
            LiveVideo: (id) => new node_1.default(this.GraphAPI, {
                BlockedUsers: new node_1.Edge('blocked_users', this.GraphAPI, id),
                Comments: new node_1.Edge('comments', this.GraphAPI, id),
                CrosspostSharedPages: new node_1.Edge('crosspost_shared_pages', this.GraphAPI, id),
                CrosspostedBroadcasrs: new node_1.Edge('crossposted_broadcasts', this.GraphAPI, id),
                Errors: new node_1.Edge('errors', this.GraphAPI, id),
                Polls: new node_1.Edge('polls', this.GraphAPI, id),
                Reactions: new node_1.Edge('reactions', this.GraphAPI, id),
            }, id),
            LiveVideoInputStream: (id) => new node_1.default(this.GraphAPI, {}, id),
            MailingAddress: (id) => new node_1.default(this.GraphAPI, {}, id),
            MediaFingerprint: (id) => new node_1.default(this.GraphAPI, {}, id),
            NativeOffer: (id) => new node_1.default(this.GraphAPI, {
                Views: new node_1.Edge('views', this.GraphAPI, id),
            }, id),
            OfflineConversionDataSet: (id) => new node_1.default(this.GraphAPI, {
                AdAccounts: new node_1.Edge('adaccounts', this.GraphAPI, id),
                Agencies: new node_1.Edge('agencies', this.GraphAPI, id),
                Audiences: new node_1.Edge('audiences', this.GraphAPI, id),
                CustomConversations: new node_1.Edge('customconversations', this.GraphAPI, id),
                Stats: new node_1.Edge('stats', this.GraphAPI, id),
                Uploads: new node_1.Edge('uploads', this.GraphAPI, id),
            }, id),
            OfflineConversionDataSetUpload: (id) => new node_1.default(this.GraphAPI, {
                Progress: new node_1.Edge('progress', this.GraphAPI, id),
            }, id),
            Page: (id) => new node_1.default(this.GraphAPI, {
                AdsPosts: new node_1.Edge('ads_posts', this.GraphAPI, id),
                Agencies: new node_1.Edge('agencies', this.GraphAPI, id),
                Albums: new node_1.Edge('albums', this.GraphAPI, id),
                AssignedUsers: new node_1.Edge('assigned_users', this.GraphAPI, id),
                AudioMediaCopyrights: new node_1.Edge('audio_media_copyrights', this.GraphAPI, id),
                Blocked: new node_1.Edge('blocked', this.GraphAPI, id),
                CallToActions: new node_1.Edge('call_to_actions', this.GraphAPI, id),
                ClaimedURLs: new node_1.Edge('claimed_urls', this.GraphAPI, id),
                CommerceMerchantSettings: new node_1.Edge('commerce_merchant_settings', this.GraphAPI, id),
                CommerceOrders: new node_1.Edge('commerce_orders', this.GraphAPI, id),
                CommercePayouts: new node_1.Edge('commerce_payouts', this.GraphAPI, id),
                CommerceTransactions: new node_1.Edge('commerce_transactions', this.GraphAPI, id),
                Conversations: new node_1.Edge('conversations', this.GraphAPI, id),
                CopyrightWhitelistedPartners: new node_1.Edge('copyright_whitelisted_partners', this.GraphAPI, id),
                CrosspostWhitelistedPages: new node_1.Edge('crosspost_whitelisted_pages', this.GraphAPI, id),
                CustomLabels: new node_1.Edge('custom_labels', this.GraphAPI, id),
                CustomUserSettings: new node_1.Edge('custom_user_settings', this.GraphAPI, id),
                Events: new node_1.Edge('events', this.GraphAPI, id),
                Feed: new node_1.Edge('feed', this.GraphAPI, id),
                GlobalBrandChildren: new node_1.Edge('global_brand_children', this.GraphAPI, id),
                ImageCopyrights: new node_1.Edge('image_copyrights', this.GraphAPI, id),
                IndexedVideos: new node_1.Edge('indexed_videos', this.GraphAPI, id),
                Insights: new node_1.Edge('insights', this.GraphAPI, id),
                InstagramAccounts: new node_1.Edge('instagram_accounts', this.GraphAPI, id),
                InstantArticles: new node_1.Edge('instant_articles', this.GraphAPI, id),
                InstantArticlesInsights: new node_1.Edge('instant_articles_insights', this.GraphAPI, id),
                LeadgenForms: new node_1.Edge('leadgen_forms', this.GraphAPI, id),
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
                LiveEncoders: new node_1.Edge('live_encoders', this.GraphAPI, id),
                LiveVideos: new node_1.Edge('live_videos', this.GraphAPI, id),
                Locations: new node_1.Edge('locations', this.GraphAPI, id),
                Messages: new node_1.Edge('messages', this.GraphAPI, id),
                MediaFingerprints: new node_1.Edge('media_fingerprints', this.GraphAPI, id),
                MessagingFeatureReview: new node_1.Edge('messaging_feature_review', this.GraphAPI, id),
                MessengerProfile: new node_1.Edge('messenger_profile', this.GraphAPI, id),
                Nativeoffers: new node_1.Edge('nativeoffers', this.GraphAPI, id),
                PageBackedInstagramAccounts: new node_1.Edge('page_backed_instagram_accounts', this.GraphAPI, id),
                Personas: new node_1.Edge('personas', this.GraphAPI, id),
                Photos: new node_1.Edge('photos', this.GraphAPI, id),
                Picture: new node_1.Edge('picture', this.GraphAPI, id),
                Posts: new node_1.Edge('posts', this.GraphAPI, id),
                ProductCatalogs: new node_1.Edge('product_catalogs', this.GraphAPI, id),
                PublishedPosts: new node_1.Edge('published_posts', this.GraphAPI, id),
                Ratings: new node_1.Edge('ratings', this.GraphAPI, id),
                Roles: new node_1.Edge('roles', this.GraphAPI, id),
                RtbDynamicPosts: new node_1.Edge('rtb_dynamic_posts', this.GraphAPI, id),
                ScheduledPosts: new node_1.Edge('scheduled_posts', this.GraphAPI, id),
                SecondaryReceivers: new node_1.Edge('secondary_receivers', this.GraphAPI, id),
                Settings: new node_1.Edge('settings', this.GraphAPI, id),
                ShopSetupStatus: new node_1.Edge('shop_setup_status', this.GraphAPI, id),
                SubscribedApps: new node_1.Edge('subscribed_apps', this.GraphAPI, id),
                Tabs: new node_1.Edge('tabs', this.GraphAPI, id),
                Tagged: new node_1.Edge('tagged', this.GraphAPI, id),
                ThreadOwner: new node_1.Edge('thread_owner', this.GraphAPI, id),
                Tours: new node_1.Edge('tours', this.GraphAPI, id),
                VideoCopyrightRules: new node_1.Edge('video_copyright_rules', this.GraphAPI, id),
                VideoCopyrights: new node_1.Edge('video_copyrights', this.GraphAPI, id),
                VideoLists: new node_1.Edge('video_lists', this.GraphAPI, id),
                VideoMediaCopyrights: new node_1.Edge('video_media_copyrights', this.GraphAPI, id),
                Videos: new node_1.Edge('videos', this.GraphAPI, id),
                VisitorPosts: new node_1.Edge('visitor_posts', this.GraphAPI, id),
            }, id),
            PageCallToAction: (id) => new node_1.default(this.GraphAPI, {}, id),
            PagePost: (id) => new node_1.default(this.GraphAPI, {
                Comments: new node_1.Edge('comments', this.GraphAPI, id),
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
                Reactions: new node_1.Edge('reactions', this.GraphAPI, id),
            }, id),
            Photo: (id) => new node_1.default(this.GraphAPI, {
                Likes: new node_1.Edge('likes', this.GraphAPI, id),
            }, id),
            User: (id) => new node_1.default(this.GraphAPI, {
                'Payment.subscriptions': new node_1.Edge('payment.subscriptions', this.GraphAPI, id),
                'Accounts': new node_1.Edge('accounts', this.GraphAPI, id),
                'AdStudies': new node_1.Edge('ad_studies', this.GraphAPI, id),
                'Adaccounts': new node_1.Edge('adaccounts', this.GraphAPI, id),
                'Albums': new node_1.Edge('albums', this.GraphAPI, id),
                'AppRequestFormerRecipients': new node_1.Edge('apprequestformerrecipients', this.GraphAPI, id),
                'AppRequests': new node_1.Edge('apprequests', this.GraphAPI, id),
                'AssignedAdAccounts': new node_1.Edge('assigned_ad_accounts', this.GraphAPI, id),
                'AssignedBusinessAssetGroups': new node_1.Edge('assigned_business_asset_groups', this.GraphAPI, id),
                'AssignedPages': new node_1.Edge('assigned_pages', this.GraphAPI, id),
                'AssignedProductCatalogs': new node_1.Edge('assigned_product_catalogs', this.GraphAPI, id),
                'BusinessUsers': new node_1.Edge('business_users', this.GraphAPI, id),
                'Businesses': new node_1.Edge('businesses', this.GraphAPI, id),
                'Events': new node_1.Edge('events', this.GraphAPI, id),
                'Feed': new node_1.Edge('feed', this.GraphAPI, id),
                'Friends': new node_1.Edge('friends', this.GraphAPI, id),
                'Groups': new node_1.Edge('groups', this.GraphAPI, id),
                'IdsForApps': new node_1.Edge('ids_for_apps', this.GraphAPI, id),
                'IdsForBusiness': new node_1.Edge('ids_for_business', this.GraphAPI, id),
                'IdsForPages': new node_1.Edge('ids_for_pages', this.GraphAPI, id),
                'Likes': new node_1.Edge('likes', this.GraphAPI, id),
                'LiveEncoders': new node_1.Edge('live_encoders', this.GraphAPI, id),
                'LiveVideos': new node_1.Edge('live_videos', this.GraphAPI, id),
                'Music': new node_1.Edge('music', this.GraphAPI, id),
                'PaymentTransactions': new node_1.Edge('payment_transactions', this.GraphAPI, id),
                'Permissions': new node_1.Edge('permissions', this.GraphAPI, id),
                'PersonalAdAccounts': new node_1.Edge('personal_ad_accounts', this.GraphAPI, id),
                'Photos': new node_1.Edge('photos', this.GraphAPI, id),
                'Picture': new node_1.Edge('picture', this.GraphAPI, id),
                'Posts': new node_1.Edge('posts', this.GraphAPI, id),
                'Videos': new node_1.Edge('videos', this.GraphAPI, id),
            }, id),
            Video: (id) => new node_1.default(this.GraphAPI, {}, id),
            VideoList: (id) => new node_1.default(this.GraphAPI, {}, id),
            VideoPoll: (id) => new node_1.default(this.GraphAPI, {}, id),
        };
        this.graphAPIAxiosInstance = axios_1.default.create({
            baseURL: `https://graph.facebook.com/v9.0`,
        });
    }
}
exports.FacebookAppNoExposedNodes = FacebookAppNoExposedNodes;
class FacebookApp extends FacebookAppNoExposedNodes {
    constructor() {
        super(...arguments);
        this.Nodes = this._Nodes;
    }
}
exports.FacebookApp = FacebookApp;
