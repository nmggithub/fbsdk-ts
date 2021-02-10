import { MessengerProfilePersistentMenu } from './messenger-profile';
export interface CustomUserSettings {
    /**
     * Persistent Menu at the page level. This will act as the default persistent menu if there exists one for a page
     */
    page_level_persistent_menu: MessengerProfilePersistentMenu[];
    /**
     * Persistent Menu at the user level
     */
    user_level_persistent_menu: MessengerProfilePersistentMenu[];
}
