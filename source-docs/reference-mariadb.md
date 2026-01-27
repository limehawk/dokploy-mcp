# Mariadb | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-mariadb

---

[Dokploy](https://dokploy.com)
# Mariadb
https://your-dokploy-instance.com/apiPOST
```
```
/
```
mariadb.create
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
"mariadb:6"
```
databaseRootPassword*stringMatch
```
^[a-zA-Z0-9@#%^&*()_+\-=[\]{}|;:,.<>?~`]*$
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
serverId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"appName": "string",
"databaseRootPassword": "string",
"environmentId": "string",
"databaseName": "string",
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
mariadb.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
mariadbId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/mariadb.one?mariadbId=string" \
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
mariadb.start
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.start" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.stop
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.stop" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.saveExternalPort
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringexternalPort*number|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.saveExternalPort" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string",
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
mariadb.deploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.deploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.changeStatus
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringapplicationStatus*stringValue in
```
"idle" | "running" | "done" | "error"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.changeStatus" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string",
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
mariadb.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.saveEnvironment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringenv?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.saveEnvironment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.reload
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringappName*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.reload" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string",
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
mariadb.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringLength
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
"mariadb:6"
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
curl -X POST "https://your-dokploy-instance.com/api/mariadb.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
mariadb.move
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*stringtargetEnvironmentId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.move" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string",
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
mariadb.rebuild
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mariadbId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mariadb.rebuild" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mariadbId": "string"
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
[Git ProviderPrevious Page](/docs/api/reference-gitProvider)[MongoNext Page](/docs/api/reference-mongo)