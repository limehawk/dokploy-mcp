# Mongo | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-mongo

---

[Dokploy](https://dokploy.com)
# Mongo
https://your-dokploy-instance.com/apiPOST
```
```
/
```
mongo.create
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
"mongo:15"
```
environmentId*stringdescription?string|nulldatabaseUser*stringLength
```
1 <= length
```
databasePassword*stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
serverId?string|nullreplicaSets?boolean|nullDefault
```
false
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"appName": "string",
"environmentId": "string",
"databaseUser": "string",
"databasePassword": "string"
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
mongo.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
mongoId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/mongo.one?mongoId=string" \
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
mongo.start
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.start" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.stop
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.stop" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.saveExternalPort
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringexternalPort*number|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.saveExternalPort" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string",
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
mongo.deploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.deploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.changeStatus
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringapplicationStatus*stringValue in
```
"idle" | "running" | "done" | "error"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.changeStatus" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string",
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
mongo.reload
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringappName*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.reload" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string",
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
mongo.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.saveEnvironment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringenv?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.saveEnvironment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringLength
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
description?string|nulldatabaseUser?stringLength
```
1 <= length
```
databasePassword?stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
```
dockerImage?stringDefault
```
"mongo:15"
```
command?string|nullargs?array|nullenv?string|nullmemoryReservation?string|nullmemoryLimit?string|nullcpuReservation?string|nullcpuLimit?string|nullexternalPort?number|nullapplicationStatus?stringValue in
```
"idle" | "running" | "done" | "error"
```
healthCheckSwarm?object|nullrestartPolicySwarm?object|nullplacementSwarm?object|nullupdateConfigSwarm?object|nullrollbackConfigSwarm?object|nullmodeSwarm?object|nulllabelsSwarm?object|nullnetworkSwarm?array|nullstopGracePeriodSwarm?integer|nullendpointSpecSwarm?object|nullreplicas?numbercreatedAt?stringenvironmentId?stringreplicaSets?boolean|nullDefault
```
false
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
mongo.move
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*stringtargetEnvironmentId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.move" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string",
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
mongo.rebuild
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mongoId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mongo.rebuild" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mongoId": "string"
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
[MariadbPrevious Page](/docs/api/reference-mariadb)[MountsNext Page](/docs/api/reference-mounts)