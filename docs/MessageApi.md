# CamundaBpmRestApi.MessageApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deliverMessage**](MessageApi.md#deliverMessage) | **POST** /message | 



## deliverMessage

> [MessageCorrelationResultWithVariableDto] deliverMessage(opts)



Correlates a message to the process engine to either trigger a message start event or an intermediate message  catching event. Internally this maps to the engine&#39;s message correlation builder methods &#x60;MessageCorrelationBuilder#correlateWithResult()&#x60; and &#x60;MessageCorrelationBuilder#correlateAllWithResult()&#x60;. For more information about the correlation behavior, see the [Message Events](https://docs.camunda.org/manual/7.14/bpmn20/events/message-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.MessageApi();
let opts = {
  'correlationMessageDto': {"messageName":"aMessage","businessKey":"aBusinessKey","correlationKeys":{"aVariable":{"value":"aValue","type":"String"}},"processVariables":{"aVariable":{"value":"aNewValue","type":"String","valueInfo":{"transient":true}},"anotherVariable":{"value":true,"type":"Boolean"}}} // CorrelationMessageDto | 
};
apiInstance.deliverMessage(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **correlationMessageDto** | [**CorrelationMessageDto**](CorrelationMessageDto.md)|  | [optional] 

### Return type

[**[MessageCorrelationResultWithVariableDto]**](MessageCorrelationResultWithVariableDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

