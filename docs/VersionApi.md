# CamundaBpmRestApi.VersionApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRestAPIVersion**](VersionApi.md#getRestAPIVersion) | **GET** /version | 



## getRestAPIVersion

> VersionDto getRestAPIVersion()



Retrieves the version of the Rest API.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.VersionApi();
apiInstance.getRestAPIVersion((error, data, response) => {
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

[**VersionDto**](VersionDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

