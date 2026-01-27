# Schedule | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-schedule

---

[Dokploy](https://dokploy.com)
# Schedule
https://your-dokploy-instance.com/apiPOST
```
```
/
```
schedule.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
scheduleId?stringname*stringcronExpression*stringappName?stringserviceName?string|nullshellType?stringValue in
```
"bash" | "sh"
```
scheduleType?stringValue in
```
"application" | "compose" | "server" | "dokploy-server"
```
command*stringscript?string|nullapplicationId?string|nullcomposeId?string|nullserverId?string|nulluserId?string|nullenabled?booleantimezone?string|nullcreatedAt?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/schedule.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"cronExpression": "string",
"command": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiPOST
```
```
/
```
schedule.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
scheduleId*stringLength
```
1 <= length
```
name*stringcronExpression*stringappName?stringserviceName?string|nullshellType?stringValue in
```
"bash" | "sh"
```
scheduleType?stringValue in
```
"application" | "compose" | "server" | "dokploy-server"
```
command*stringscript?string|nullapplicationId?string|nullcomposeId?string|nullserverId?string|nulluserId?string|nullenabled?booleantimezone?string|nullcreatedAt?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/schedule.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"scheduleId": "string",
"name": "string",
"cronExpression": "string",
"command": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiPOST
```
```
/
```
schedule.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
scheduleId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/schedule.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"scheduleId": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
schedule.list
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
id*stringscheduleType*stringValue in
```
"application" | "compose" | "server" | "dokploy-server"
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/schedule.list?id=string&scheduleType=application" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiGET
```
```
/
```
schedule.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
scheduleId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/schedule.one?scheduleId=string" \
-H "x-api-key: "
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
https://your-dokploy-instance.com/apiPOST
```
```
/
```
schedule.runManually
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
scheduleId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/schedule.runManually" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"scheduleId": "string"
}'
```
200default
```
{}
```
```
{
"message": "string",
"code": "string",
"issues": [
{
"message": "string"
}
]
}
```
[RollbackPrevious Page](/docs/api/reference-rollback)[SecurityNext Page](/docs/api/reference-security)