/**
 * Content is part of the Custom Data Parameters of a Server Side Event Request. Content can be used to set the item/product details added in the Custom Data.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data}
 */

export interface Content {
    /**
     * Product Id of the Item.
     */
    id: string;
    /**
     * Quantity of the Item.
     */
    quantity: number;
    /**
     * Price per unit of the content/product.
     */
    item_price?: number;
    /**
     * Title of the listed Item.
     */
    title?: string;
    /**
     * Product description used for the item.
     */
    description?: string;
    /**
     * Category of the Item.
     */
    category?: string;
    /**
     * Brand of the item.
     */
    brand?: string;
}
