# CamundaBpmRestApi.HistoricTasksApi

All URIs are relative to *https://geekers.ddns.net/camunda/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricTasks**](HistoricTasksApi.md#getHistoricTasks) | **GET** /history/task | Get List



## getHistoricTasks

> [HistoryTaskDto] getHistoricTasks(opts)

Get List

Queries for historic tasks that fulfill the given parameters.  The size of the result set can be retrieved by using the  [Get Task Count](https://docs.camunda.org/manual/latest/reference/rest/history/task/get-task-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';
let defaultClient = CamundaBpmRestApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CamundaBpmRestApi.HistoricTasksApi();
let opts = {
  'taskId': "taskId_example", // String | Filter by task id.
  'taskParentTaskId': "taskParentTaskId_example", // String | Filter by parent task id.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Filter by process instance business key.
  'processInstanceBusinessKeyIn': "processInstanceBusinessKeyIn_example", // String | Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Filter by process instance business key that has the parameter value as a substring.
  'executionId': "executionId_example", // String | Filter by the id of the execution that executed the task.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionKey': "processDefinitionKey_example", // String | Restrict to tasks that belong to a process definition with the given key.
  'processDefinitionName': "processDefinitionName_example", // String | Restrict to tasks that belong to a process definition with the given name.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'caseExecutionId': "caseExecutionId_example", // String | Filter by the id of the case execution that executed the task.
  'caseDefinitionId': "caseDefinitionId_example", // String | Filter by case definition id.
  'caseDefinitionKey': "caseDefinitionKey_example", // String | Restrict to tasks that belong to a case definition with the given key.
  'caseDefinitionName': "caseDefinitionName_example", // String | Restrict to tasks that belong to a case definition with the given name.
  'activityInstanceIdIn': "activityInstanceIdIn_example", // String | Only include tasks which belong to one of the passed and comma-separated activity instance ids.
  'taskName': "taskName_example", // String | Restrict to tasks that have the given name.
  'taskNameLike': "taskNameLike_example", // String | Restrict to tasks that have a name with the given parameter value as substring.
  'taskDescription': "taskDescription_example", // String | Restrict to tasks that have the given description.
  'taskDescriptionLike': "taskDescriptionLike_example", // String | Restrict to tasks that have a description that has the parameter value as a substring.
  'taskDefinitionKey': "taskDefinitionKey_example", // String | Restrict to tasks that have the given key.
  'taskDefinitionKeyIn': "taskDefinitionKeyIn_example", // String | Restrict to tasks that have one of the passed and comma-separated task definition keys.
  'taskDeleteReason': "taskDeleteReason_example", // String | Restrict to tasks that have the given delete reason.
  'taskDeleteReasonLike': "taskDeleteReasonLike_example", // String | Restrict to tasks that have a delete reason that has the parameter value as a substring.
  'taskAssignee': "taskAssignee_example", // String | Restrict to tasks that the given user is assigned to.
  'taskAssigneeLike': "taskAssigneeLike_example", // String | Restrict to tasks that are assigned to users with the parameter value as a substring.
  'taskOwner': "taskOwner_example", // String | Restrict to tasks that the given user owns.
  'taskOwnerLike': "taskOwnerLike_example", // String | Restrict to tasks that are owned by users with the parameter value as a substring.
  'taskPriority': "taskPriority_example", // String | Restrict to tasks that have the given priority.
  'assigned': false, // Boolean | If set to true, restricts the query to all tasks that are assigned.
  'unassigned': false, // Boolean | If set to true, restricts the query to all tasks that are unassigned.
  'finished': false, // Boolean | Only include finished tasks. Value may only be true, as false is the default behavior.
  'unfinished': false, // Boolean | Only include unfinished tasks. Value may only be true, as false is the default behavior.
  'processFinished': false, // Boolean | Only include tasks of finished processes. Value may only be true, as false is the default behavior.
  'processUnfinished': false, // Boolean | Only include tasks of unfinished processes. Value may only be true, as false is the default behavior.
  'taskDueDate': "taskDueDate_example", // String | Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'taskDueDateBefore': "taskDueDateBefore_example", // String | Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'taskDueDateAfter': "taskDueDateAfter_example", // String | Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'taskFollowUpDate': "taskFollowUpDate_example", // String | Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'taskFollowUpDateBefore': "taskFollowUpDateBefore_example", // String | Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'taskFollowUpDateAfter': "taskFollowUpDateAfter_example", // String | Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'startedBefore': "startedBefore_example", // String | Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'startedAfter': "startedAfter_example", // String | Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'finishedBefore': "finishedBefore_example", // String | Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'finishedAfter': "finishedAfter_example", // String | Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include historic task instances that belong to no tenant. Value may only be true, as false is the default behavior.
  'taskVariables': "taskVariables_example", // String | Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'processVariables': "processVariables_example", // String | Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal.
  'variableValuesIgnoreCase': false, // Boolean | Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal.
  'taskInvolvedUser': "taskInvolvedUser_example", // String | Restrict to tasks with a historic identity link to the given user.
  'taskInvolvedGroup': "taskInvolvedGroup_example", // String | Restrict to tasks with a historic identity link to the given group.
  'taskHadCandidateUser': "taskHadCandidateUser_example", // String | Restrict to tasks with a historic identity link to the given candidate user.
  'taskHadCandidateGroup': "taskHadCandidateGroup_example", // String | Restrict to tasks with a historic identity link to the given candidate group.     
  'withCandidateGroups': false, // Boolean | Only include tasks which have a candidate group. Value may only be true, as false is the default behavior.
  'withoutCandidateGroups': false, // Boolean | Only include tasks which have no candidate group. Value may only be true, as false is the default behavior.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getHistoricTasks(opts, (error, data, response) => {
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
 **taskId** | **String**| Filter by task id. | [optional] 
 **taskParentTaskId** | **String**| Filter by parent task id. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceBusinessKey** | **String**| Filter by process instance business key. | [optional] 
 **processInstanceBusinessKeyIn** | **String**| Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Filter by process instance business key that has the parameter value as a substring. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that executed the task. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionKey** | **String**| Restrict to tasks that belong to a process definition with the given key. | [optional] 
 **processDefinitionName** | **String**| Restrict to tasks that belong to a process definition with the given name. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **caseExecutionId** | **String**| Filter by the id of the case execution that executed the task. | [optional] 
 **caseDefinitionId** | **String**| Filter by case definition id. | [optional] 
 **caseDefinitionKey** | **String**| Restrict to tasks that belong to a case definition with the given key. | [optional] 
 **caseDefinitionName** | **String**| Restrict to tasks that belong to a case definition with the given name. | [optional] 
 **activityInstanceIdIn** | **String**| Only include tasks which belong to one of the passed and comma-separated activity instance ids. | [optional] 
 **taskName** | **String**| Restrict to tasks that have the given name. | [optional] 
 **taskNameLike** | **String**| Restrict to tasks that have a name with the given parameter value as substring. | [optional] 
 **taskDescription** | **String**| Restrict to tasks that have the given description. | [optional] 
 **taskDescriptionLike** | **String**| Restrict to tasks that have a description that has the parameter value as a substring. | [optional] 
 **taskDefinitionKey** | **String**| Restrict to tasks that have the given key. | [optional] 
 **taskDefinitionKeyIn** | **String**| Restrict to tasks that have one of the passed and comma-separated task definition keys. | [optional] 
 **taskDeleteReason** | **String**| Restrict to tasks that have the given delete reason. | [optional] 
 **taskDeleteReasonLike** | **String**| Restrict to tasks that have a delete reason that has the parameter value as a substring. | [optional] 
 **taskAssignee** | **String**| Restrict to tasks that the given user is assigned to. | [optional] 
 **taskAssigneeLike** | **String**| Restrict to tasks that are assigned to users with the parameter value as a substring. | [optional] 
 **taskOwner** | **String**| Restrict to tasks that the given user owns. | [optional] 
 **taskOwnerLike** | **String**| Restrict to tasks that are owned by users with the parameter value as a substring. | [optional] 
 **taskPriority** | **String**| Restrict to tasks that have the given priority. | [optional] 
 **assigned** | **Boolean**| If set to true, restricts the query to all tasks that are assigned. | [optional] [default to false]
 **unassigned** | **Boolean**| If set to true, restricts the query to all tasks that are unassigned. | [optional] [default to false]
 **finished** | **Boolean**| Only include finished tasks. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **unfinished** | **Boolean**| Only include unfinished tasks. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **processFinished** | **Boolean**| Only include tasks of finished processes. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **processUnfinished** | **Boolean**| Only include tasks of unfinished processes. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **taskDueDate** | **String**| Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **taskDueDateBefore** | **String**| Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **taskDueDateAfter** | **String**| Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **taskFollowUpDate** | **String**| Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **taskFollowUpDateBefore** | **String**| Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **taskFollowUpDateAfter** | **String**| Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **startedBefore** | **String**| Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **startedAfter** | **String**| Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **finishedBefore** | **String**| Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **finishedAfter** | **String**| Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ, e.g., 2013-01-23T14:42:45.000+0200. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A task instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic task instances that belong to no tenant. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **taskVariables** | **String**| Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **processVariables** | **String**| Only include tasks that belong to process instances that have variables with certain  values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set &#x60;variableName&#x60; and &#x60;variablename&#x60; are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set &#x60;variableValue&#x60; and &#x60;variablevalue&#x60; are treated as equal. | [optional] [default to false]
 **taskInvolvedUser** | **String**| Restrict to tasks with a historic identity link to the given user. | [optional] 
 **taskInvolvedGroup** | **String**| Restrict to tasks with a historic identity link to the given group. | [optional] 
 **taskHadCandidateUser** | **String**| Restrict to tasks with a historic identity link to the given candidate user. | [optional] 
 **taskHadCandidateGroup** | **String**| Restrict to tasks with a historic identity link to the given candidate group.      | [optional] 
 **withCandidateGroups** | **Boolean**| Only include tasks which have a candidate group. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **withoutCandidateGroups** | **Boolean**| Only include tasks which have no candidate group. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[HistoryTaskDto]**](HistoryTaskDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

