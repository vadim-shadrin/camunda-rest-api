# CamundaBpmRestApi.HistoryTaskDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The task id. | [optional] 
**processDefinitionKey** | **String** | The key of the process definition the task belongs to. | [optional] 
**processDefinitionId** | **String** | The id of the process definition the task belongs to. | [optional] 
**processInstanceId** | **String** | The id of the process instance the task belongs to. | [optional] 
**executionId** | **String** | The id of the execution the task belongs to. | [optional] 
**caseDefinitionKey** | **String** | The key of the case definition the task belongs to. | [optional] 
**caseDefinitionId** | **String** | The id of the case definition the task belongs to. | [optional] 
**caseInstanceId** | **String** | The id of the case instance the task belongs to. | [optional] 
**caseExecutionId** | **String** | The id of the case execution the task belongs to. | [optional] 
**activityInstanceId** | **String** | The id of the activity that this object is an instance of. | [optional] 
**name** | **String** | The task name. | [optional] 
**description** | **String** | The task&#39;s description. | [optional] 
**deleteReason** | **String** | The task&#39;s delete reason. | [optional] 
**owner** | **String** | The owner&#39;s id. | [optional] 
**assignee** | **String** | The assignee&#39;s id. | [optional] 
**startTime** | **Date** | The time the task was started. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**endTime** | **Date** | The time the task was ended. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**duration** | **Number** | The time the task took to finish (in milliseconds). | [optional] 
**taskDefinitionKey** | **String** | The task&#39;s key. | [optional] 
**priority** | **Number** | The priority of the external task. | [optional] 
**due** | **Date** | The task&#39;s due date. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**parentTaskId** | **String** | The id the parent task, if this task is a subtask. | [optional] 
**followUp** | **Date** | The follow-up date for the task. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**tenantId** | **String** | If not &#x60;null&#x60;, the tenant id of the task. | [optional] 
**removalTime** | **Date** | The time after which the task should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**rootProcessInstanceId** | **String** | The process instance id of the root process instance that initiated the process containing this task. | [optional] 


