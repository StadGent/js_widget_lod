/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LodCard {
        /**
          * The location address of the event
         */
        "address": string;
        /**
          * The title of the card
         */
        "cardTitle": string;
        /**
          * The date of the event
         */
        "date": string;
        /**
          * The card description
         */
        "description": string;
        /**
          * Url of the image
         */
        "imageUrl": string;
        /**
          * Custom read more text
         */
        "readMoreText": string;
        /**
          * Read more url
         */
        "readMoreUrl": string;
        /**
          * ; Seperated tags to show in the card
         */
        "tag": string;
    }
    interface LodCards {
        /**
          * The count query
         */
        "countQuery": string;
        /**
          * Custom call to action text
         */
        "ctaText": string;
        /**
          * Custom call to action url
         */
        "ctaUrl": string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Maximum items per page
         */
        "itemsPerPage": number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled": boolean;
        /**
          * The query
         */
        "query": string;
    }
    interface LodDecisionCard {
        /**
          * Date of decision
         */
        "date": string;
        /**
          * Decision title
         */
        "decisionTitle": string;
        /**
          * Sparql endpoint
         */
        "endpoint": string;
        /**
          * Organ of decision
         */
        "organ": string;
        /**
          * ; Status of decision
         */
        "status": string;
        /**
          * Uri to get decision
         */
        "uri": string;
        /**
          * Decision url
         */
        "url": string;
    }
    interface LodDecisionsList {
        /**
          * Concepts
         */
        "concepts": string;
        /**
          * End date of the decisions
         */
        "endDate": string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Governing bodies (bestuursorganen)
         */
        "governingBodies": string;
        /**
          * Governing Units (bestuurseenheden)
         */
        "governingUnits": string;
        /**
          * The query
         */
        "itemsPerPage": number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled": boolean;
        /**
          * Start date of the decisions
         */
        "startDate": string;
        /**
          * Statusses
         */
        "statusses": string;
        /**
          * Taxonomy
         */
        "taxonomy": string;
    }
    interface LodTable {
        /**
          * The count query
         */
        "countQuery": string;
        /**
          * Custom call to action text
         */
        "ctaText": string;
        /**
          * Custom call to action url
         */
        "ctaUrl": string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Maximum items per page
         */
        "itemsPerPage": number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled": boolean;
        /**
          * The query
         */
        "query": string;
        /**
          * Caption for the table for screen readers
         */
        "tableCaption": string;
    }
}
declare global {
    interface HTMLLodCardElement extends Components.LodCard, HTMLStencilElement {
    }
    var HTMLLodCardElement: {
        prototype: HTMLLodCardElement;
        new (): HTMLLodCardElement;
    };
    interface HTMLLodCardsElement extends Components.LodCards, HTMLStencilElement {
    }
    var HTMLLodCardsElement: {
        prototype: HTMLLodCardsElement;
        new (): HTMLLodCardsElement;
    };
    interface HTMLLodDecisionCardElement extends Components.LodDecisionCard, HTMLStencilElement {
    }
    var HTMLLodDecisionCardElement: {
        prototype: HTMLLodDecisionCardElement;
        new (): HTMLLodDecisionCardElement;
    };
    interface HTMLLodDecisionsListElement extends Components.LodDecisionsList, HTMLStencilElement {
    }
    var HTMLLodDecisionsListElement: {
        prototype: HTMLLodDecisionsListElement;
        new (): HTMLLodDecisionsListElement;
    };
    interface HTMLLodTableElement extends Components.LodTable, HTMLStencilElement {
    }
    var HTMLLodTableElement: {
        prototype: HTMLLodTableElement;
        new (): HTMLLodTableElement;
    };
    interface HTMLElementTagNameMap {
        "lod-card": HTMLLodCardElement;
        "lod-cards": HTMLLodCardsElement;
        "lod-decision-card": HTMLLodDecisionCardElement;
        "lod-decisions-list": HTMLLodDecisionsListElement;
        "lod-table": HTMLLodTableElement;
    }
}
declare namespace LocalJSX {
    interface LodCard {
        /**
          * The location address of the event
         */
        "address"?: string;
        /**
          * The title of the card
         */
        "cardTitle"?: string;
        /**
          * The date of the event
         */
        "date"?: string;
        /**
          * The card description
         */
        "description"?: string;
        /**
          * Url of the image
         */
        "imageUrl"?: string;
        /**
          * Custom read more text
         */
        "readMoreText"?: string;
        /**
          * Read more url
         */
        "readMoreUrl"?: string;
        /**
          * ; Seperated tags to show in the card
         */
        "tag"?: string;
    }
    interface LodCards {
        /**
          * The count query
         */
        "countQuery": string;
        /**
          * Custom call to action text
         */
        "ctaText"?: string;
        /**
          * Custom call to action url
         */
        "ctaUrl"?: string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Maximum items per page
         */
        "itemsPerPage"?: number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled"?: boolean;
        /**
          * The query
         */
        "query": string;
    }
    interface LodDecisionCard {
        /**
          * Date of decision
         */
        "date"?: string;
        /**
          * Decision title
         */
        "decisionTitle"?: string;
        /**
          * Sparql endpoint
         */
        "endpoint"?: string;
        /**
          * Organ of decision
         */
        "organ"?: string;
        /**
          * ; Status of decision
         */
        "status"?: string;
        /**
          * Uri to get decision
         */
        "uri"?: string;
        /**
          * Decision url
         */
        "url"?: string;
    }
    interface LodDecisionsList {
        /**
          * Concepts
         */
        "concepts"?: string;
        /**
          * End date of the decisions
         */
        "endDate"?: string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Governing bodies (bestuursorganen)
         */
        "governingBodies"?: string;
        /**
          * Governing Units (bestuurseenheden)
         */
        "governingUnits"?: string;
        /**
          * The query
         */
        "itemsPerPage"?: number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled"?: boolean;
        /**
          * Start date of the decisions
         */
        "startDate"?: string;
        /**
          * Statusses
         */
        "statusses"?: string;
        /**
          * Taxonomy
         */
        "taxonomy"?: string;
    }
    interface LodTable {
        /**
          * The count query
         */
        "countQuery"?: string;
        /**
          * Custom call to action text
         */
        "ctaText"?: string;
        /**
          * Custom call to action url
         */
        "ctaUrl"?: string;
        /**
          * The SparQL Endpoint
         */
        "endpoint": string;
        /**
          * Maximum items per page
         */
        "itemsPerPage"?: number;
        /**
          * Wether to hide the pager or not
         */
        "pagerDisabled"?: boolean;
        /**
          * The query
         */
        "query": string;
        /**
          * Caption for the table for screen readers
         */
        "tableCaption"?: string;
    }
    interface IntrinsicElements {
        "lod-card": LodCard;
        "lod-cards": LodCards;
        "lod-decision-card": LodDecisionCard;
        "lod-decisions-list": LodDecisionsList;
        "lod-table": LodTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lod-card": LocalJSX.LodCard & JSXBase.HTMLAttributes<HTMLLodCardElement>;
            "lod-cards": LocalJSX.LodCards & JSXBase.HTMLAttributes<HTMLLodCardsElement>;
            "lod-decision-card": LocalJSX.LodDecisionCard & JSXBase.HTMLAttributes<HTMLLodDecisionCardElement>;
            "lod-decisions-list": LocalJSX.LodDecisionsList & JSXBase.HTMLAttributes<HTMLLodDecisionsListElement>;
            "lod-table": LocalJSX.LodTable & JSXBase.HTMLAttributes<HTMLLodTableElement>;
        }
    }
}
