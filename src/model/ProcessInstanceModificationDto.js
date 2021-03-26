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
import ProcessInstanceModificationInstructionDto from './ProcessInstanceModificationInstructionDto';

/**
 * The ProcessInstanceModificationDto model module.
 * @module model/ProcessInstanceModificationDto
 * @version 7.14.0
 */
class ProcessInstanceModificationDto {
    /**
     * @member {Boolean} skipCustomListeners
     * @type {Boolean}
     */
    skipCustomListeners;
    /**
     * @member {Boolean} skipIoMappings
     * @type {Boolean}
     */
    skipIoMappings;
    /**
     * @member {Array.<CodegenProperty{openApiType='ProcessInstanceModificationInstructionDto', baseName='instructions', complexType='ProcessInstanceModificationInstructionDto', getter='getInstructions', setter='setInstructions', description='null', dataType='ProcessInstanceModificationInstructionDto', datatypeWithEnum='ProcessInstanceModificationInstructionDto', dataFormat='null', name='instructions', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ProcessInstanceModificationInstructionDto.constructFromObject(data['instructions']);', baseType='ProcessInstanceModificationInstructionDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ProcessInstanceModificationInstructionDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Instructions', nameInSnakeCase='INSTRUCTIONS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} instructions
     * @type {Array.<CodegenProperty{openApiType='ProcessInstanceModificationInstructionDto', baseName='instructions', complexType='ProcessInstanceModificationInstructionDto', getter='getInstructions', setter='setInstructions', description='null', dataType='ProcessInstanceModificationInstructionDto', datatypeWithEnum='ProcessInstanceModificationInstructionDto', dataFormat='null', name='instructions', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ProcessInstanceModificationInstructionDto.constructFromObject(data['instructions']);', baseType='ProcessInstanceModificationInstructionDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ProcessInstanceModificationInstructionDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, required=false, deprecated=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isDecimal=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isArray=false, isMap=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, additionalProperties=null, vars=[], requiredVars=[], mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Instructions', nameInSnakeCase='INSTRUCTIONS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    instructions;
    /**
     * @member {String} annotation
     * @type {String}
     */
    annotation;

    

    /**
     * Constructs a new <code>ProcessInstanceModificationDto</code>.
     * @alias module:model/ProcessInstanceModificationDto
     */
    constructor() { 
        
        ProcessInstanceModificationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessInstanceModificationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessInstanceModificationDto} obj Optional instance to populate.
     * @return {module:model/ProcessInstanceModificationDto} The populated <code>ProcessInstanceModificationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessInstanceModificationDto();

            if (data.hasOwnProperty('skipCustomListeners')) {
                obj['skipCustomListeners'] = ApiClient.convertToType(data['skipCustomListeners'], 'Boolean');
            }
            if (data.hasOwnProperty('skipIoMappings')) {
                obj['skipIoMappings'] = ApiClient.convertToType(data['skipIoMappings'], 'Boolean');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], [ProcessInstanceModificationInstructionDto]);
            }
            if (data.hasOwnProperty('annotation')) {
                obj['annotation'] = ApiClient.convertToType(data['annotation'], 'String');
            }
        }
        return obj;
    }
}



export default ProcessInstanceModificationDto;
