# Mysql | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-mysql

---

[Dokploy](https://dokploy.com)
# Mysql
https://your-dokploy-instance.com/apiPOST
```
```
/
```
mysql.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
name*stringLength
```
1 <= length
```
appName*stringLength
```
1 <= length
```
dockerImage?stringDefault
```
"mysql:8"
```
environmentId*stringdescription?string|nulldatabaseName*stringLength
```
1 <= length
```
databaseUser*stringLength
```
1 <= length
```
databasePassword*stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
databaseRootPassword*stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
serverId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"appName": "string",
"environmentId": "string",
"databaseName": "string",
"databaseUser": "string",
"databasePassword": "string",
"databaseRootPassword": "string"
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
mysql.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
mysqlId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/mysql.one?mysqlId=string" \
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
mysql.start
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.start" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.stop
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.stop" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.saveExternalPort
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringexternalPort*number|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.saveExternalPort" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string",
"externalPort": 0
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
mysql.deploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.deploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.changeStatus
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringapplicationStatus*stringValue in
```
"idle" | "running" | "done" | "error"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.changeStatus" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string",
"applicationStatus": "idle"
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
mysql.reload
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringappName*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.reload" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string",
"appName": "string"
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
mysql.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.saveEnvironment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringenv?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.saveEnvironment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringLength
```
1 <= length
```
name?stringLength
```
1 <= length
```
appName?stringLength
```
1 <= length
```
description?string|nulldatabaseName?stringLength
```
1 <= length
```
databaseUser?stringLength
```
1 <= length
```
databasePassword?stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
databaseRootPassword?stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
dockerImage?stringDefault
```
"mysql:8"
```
command?string|nullargs?array|nullenv?string|nullmemoryReservation?string|nullmemoryLimit?string|nullcpuReservation?string|nullcpuLimit?string|nullexternalPort?number|nullapplicationStatus?stringValue in
```
"idle" | "running" | "done" | "error"
```
healthCheckSwarm?object|nullrestartPolicySwarm?object|nullplacementSwarm?object|nullupdateConfigSwarm?object|nullrollbackConfigSwarm?object|nullmodeSwarm?object|nulllabelsSwarm?object|nullnetworkSwarm?array|nullstopGracePeriodSwarm?integer|nullendpointSpecSwarm?object|nullreplicas?numbercreatedAt?stringenvironmentId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
mysql.move
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*stringtargetEnvironmentId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.move" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string",
"targetEnvironmentId": "string"
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
mysql.rebuild
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mysqlId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mysql.rebuild" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mysqlId": "string"
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
[MountsPrevious Page](/docs/api/reference-mounts)[NotificationNext Page](/docs/api/reference-notification)