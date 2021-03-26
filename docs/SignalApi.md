# CamundaBpmRestApi.SignalApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**throwSignal**](SignalApi.md#throwSignal) | **POST** /signal | 



## throwSignal

> throwSignal(opts)



A signal is an event of global scope (broadcast semantics) and is delivered to all active handlers. Internally this maps to the engine&#39;s signal event received builder method &#x60;RuntimeService#createSignalEvent()&#x60;. For more information about the signal behavior, see the [Signal Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/signal-events/) section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.SignalApi();
let opts = {
  'signalDto': {"name":"policy_conditions_changed","variables":{"newTimePeriodInMonth":{"value":24}}} // SignalDto | 
};
apiInstance.throwSignal(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signalDto** | [**SignalDto**](SignalDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

