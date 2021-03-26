# CamundaBpmRestApi.EngineApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessEngineNames**](EngineApi.md#getProcessEngineNames) | **GET** /engine | 



## getProcessEngineNames

> [ProcessEngineDto] getProcessEngineNames()



Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend &#x60;/engine/{name}&#x60; to this method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.EngineApi();
apiInstance.getProcessEngineNames((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ProcessEngineDto]**](ProcessEngineDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

