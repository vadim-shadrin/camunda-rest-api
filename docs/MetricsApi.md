# CamundaBpmRestApi.MetricsApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetrics**](MetricsApi.md#getMetrics) | **GET** /metrics/{metrics-name}/sum | 
[**interval**](MetricsApi.md#interval) | **GET** /metrics | 



## getMetrics

> MetricsResultDto getMetrics(metricsName, opts)



Retrieves the &#x60;sum&#x60; (count) for a given metric.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.MetricsApi();
let metricsName = "metricsName_example"; // String | The name of the metric.
let opts = {
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The start date (inclusive).
  'endDate': new Date("2013-10-20T19:20:30+01:00") // Date | The end date (exclusive).
};
apiInstance.getMetrics(metricsName, opts, (error, data, response) => {
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
 **metricsName** | **String**| The name of the metric. | 
 **startDate** | **Date**| The start date (inclusive). | [optional] 
 **endDate** | **Date**| The end date (exclusive). | [optional] 

### Return type

[**MetricsResultDto**](MetricsResultDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## interval

> [MetricsIntervalResultDto] interval(opts)



Retrieves a list of metrics, aggregated for a given interval.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.MetricsApi();
let opts = {
  'name': "name_example", // String | The name of the metric.
  'reporter': "reporter_example", // String | The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/7.14/reference/deployment-descriptors/tags/process-engine/#hostname).
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The start date (inclusive).
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | The end date (exclusive).
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'interval': "'900'", // String | The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds).
  'aggregateByReporter': "aggregateByReporter_example" // String | Aggregate metrics by reporter.
};
apiInstance.interval(opts, (error, data, response) => {
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
 **name** | **String**| The name of the metric. | [optional] 
 **reporter** | **String**| The name of the reporter (host), on which the metrics was logged. This will have value provided by the [hostname configuration property](https://docs.camunda.org/manual/7.14/reference/deployment-descriptors/tags/process-engine/#hostname). | [optional] 
 **startDate** | **Date**| The start date (inclusive). | [optional] 
 **endDate** | **Date**| The end date (exclusive). | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **interval** | **String**| The interval for which the metrics should be aggregated. Time unit is seconds. Default: The interval is set to 15 minutes (900 seconds). | [optional] [default to &#39;900&#39;]
 **aggregateByReporter** | **String**| Aggregate metrics by reporter. | [optional] 

### Return type

[**[MetricsIntervalResultDto]**](MetricsIntervalResultDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

