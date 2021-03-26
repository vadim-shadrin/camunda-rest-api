/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProcessInstanceQueryDtoSorting model module.
 * @module model/ProcessInstanceQueryDtoSorting
 * @version 7.14.0
 */
class ProcessInstanceQueryDtoSorting {
    /**
     * @member {ProcessInstanceQueryDtoSorting.SortByEnum} sortBy
     * @type {ProcessInstanceQueryDtoSorting.SortByEnum}
     */
    sortBy;
    /**
     * @member {ProcessInstanceQueryDtoSorting.SortOrderEnum} sortOrder
     * @type {ProcessInstanceQueryDtoSorting.SortOrderEnum}
     */
    sortOrder;

    

    /**
     * Constructs a new <code>ProcessInstanceQueryDtoSorting</code>.
     * @alias module:model/ProcessInstanceQueryDtoSorting
     */
    constructor() { 
        
        ProcessInstanceQueryDtoSorting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessInstanceQueryDtoSorting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessInstanceQueryDtoSorting} obj Optional instance to populate.
     * @return {module:model/ProcessInstanceQueryDtoSorting} The populated <code>ProcessInstanceQueryDtoSorting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessInstanceQueryDtoSorting();

            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'String');
            }
        }
        return obj;
    }
}


/**
 * Allowed values for the <code>sortBy</code> property.
 * @enum {String}
 * @readonly
 */
ProcessInstanceQueryDtoSorting['SortByEnum'] = {

    /**
     * value: "instanceId"
     * @const
     */
    "instanceId": "instanceId",

    /**
     * value: "definitionId"
     * @const
     */
    "definitionId": "definitionId",

    /**
     * value: "definitionKey"
     * @const
     */
    "definitionKey": "definitionKey",

    /**
     * value: "businessKey"
     * @const
     */
    "businessKey": "businessKey",

    /**
     * value: "tenantId"
     * @const
     */
    "tenantId": "tenantId"
};


/**
 * Allowed values for the <code>sortOrder</code> property.
 * @enum {String}
 * @readonly
 */
ProcessInstanceQueryDtoSorting['SortOrderEnum'] = {

    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",

    /**
     * value: "desc"
     * @const
     */
    "desc": "desc"
};



export default ProcessInstanceQueryDtoSorting;
