import { Content } from './content';
/**
 * CustomData represents the Custom Data Parameters of a Server Side Event Request. Use these parameters to send additional data we can use for ads delivery optimization.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data}
 */
export interface CustomData {
    /**
     * value of the item Eg: 123.45
     */
    value?: number;
    /**
     * currency involved in the transaction Eg: usd
     */
    currency?: string;
    /**
     * name of the Content Eg: lettuce
     */
    content_name?: string;
    /**
     * category of the content Eg: grocery
     */
    content_category?: string;
    /**
     * list of content unique ids involved in the event
     */
    content_ids?: string[];
    /**
     * Array of Content Objects. Use {Content} class to define a content.
     */
    contents?: Content[];
    /**
     * Type of the Content group or Product SKU
     */
    content_type?: string;
    /**
     * Unique id representing the order
     */
    order_id?: string;
    /**
     * Predicted LifeTime Value for the customer involved in the event
     */
    predicted_ltv?: number;
    /**
     * Number of items involved
     */
    num_items?: number;
    /**
     * query string used for the Search event
     */
    search_string?: string;
    /**
     * Status of the registration in Registration event
     */
    status?: string;
    /**
     * The item number
     */
    item_number?: string;
    /**
     * The type of delivery for a purchase event
     */
    delivery_category?: string;
    /**
     * Custom Properties to be added to the Custom Data
     */
    custom_properties?: Object;
}
