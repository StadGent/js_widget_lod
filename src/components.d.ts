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
          * The count query to use for total number of items
         */
        "countQuery": string;
        /**
          * Wether to hide the call to action button or not
         */
        "ctaDisabled": boolean;
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
          * The query to use for data fetching
         */
        "query": string;
        /**
          * Custom read more text for the cards
         */
        "readMoreText": string;
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
        "decisionType": "regulation" | "decision";
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
          * Decision type
         */
        "type": string;
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
    interface LodOpeningHours {
        "channelId": string | boolean;
        "endpoint": string;
        "endpointKey": string;
        "hoursTitle": string;
        "language": "en" | "nl";
        "serviceId": string;
        "showAllHours": boolean;
    }
    interface LodRegulationsList {
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
        /**
          * Types
         */
        "types": string;
    }
    interface LodTable {
        /**
          * The count query
         */
        "countQuery": string;
        /**
          * Wether to hide call to action button or not
         */
        "ctaDisabled": boolean;
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
          * The query to use for data fetching
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
    interface HTMLLodOpeningHoursElement extends Components.LodOpeningHours, HTMLStencilElement {
    }
    var HTMLLodOpeningHoursElement: {
        prototype: HTMLLodOpeningHoursElement;
        new (): HTMLLodOpeningHoursElement;
    };
    interface HTMLLodRegulationsListElement extends Components.LodRegulationsList, HTMLStencilElement {
    }
    var HTMLLodRegulationsListElement: {
        prototype: HTMLLodRegulationsListElement;
        new (): HTMLLodRegulationsListElement;
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
        "lod-opening-hours": HTMLLodOpeningHoursElement;
        "lod-regulations-list": HTMLLodRegulationsListElement;
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
          * The count query to use for total number of items
         */
        "countQuery": string;
        /**
          * Wether to hide the call to action button or not
         */
        "ctaDisabled"?: boolean;
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
          * The query to use for data fetching
         */
        "query": string;
        /**
          * Custom read more text for the cards
         */
        "readMoreText"?: string;
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
        "decisionType"?: "regulation" | "decision";
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
          * Decision type
         */
        "type"?: string;
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
    interface LodOpeningHours {
        "channelId"?: string | boolean;
        "endpoint"?: string;
        "endpointKey"?: string;
        "hoursTitle"?: string;
        "language"?: "en" | "nl";
        "serviceId": string;
        "showAllHours"?: boolean;
    }
    interface LodRegulationsList {
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
        /**
          * Types
         */
        "types"?: string;
    }
    interface LodTable {
        /**
          * The count query
         */
        "countQuery"?: string;
        /**
          * Wether to hide call to action button or not
         */
        "ctaDisabled"?: boolean;
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
          * The query to use for data fetching
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
        "lod-opening-hours": LodOpeningHours;
        "lod-regulations-list": LodRegulationsList;
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
            "lod-opening-hours": LocalJSX.LodOpeningHours & JSXBase.HTMLAttributes<HTMLLodOpeningHoursElement>;
            "lod-regulations-list": LocalJSX.LodRegulationsList & JSXBase.HTMLAttributes<HTMLLodRegulationsListElement>;
            "lod-table": LocalJSX.LodTable & JSXBase.HTMLAttributes<HTMLLodTableElement>;
        }
    }
}
