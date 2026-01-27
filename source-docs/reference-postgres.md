# Postgres | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-postgres

---

[Dokploy](https://dokploy.com)
# Postgres
https://your-dokploy-instance.com/apiPOST
```
```
/
```
postgres.create
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
appName*stringdatabaseName*stringLength
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
dockerImage?stringDefault
```
"postgres:15"
```
environmentId*stringdescription?string|nullserverId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"appName": "string",
"databaseName": "string",
"databaseUser": "string",
"databasePassword": "string",
"environmentId": "string"
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
postgres.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
postgresId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/postgres.one?postgresId=string" \
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
postgres.start
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.start" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.stop
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.stop" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.saveExternalPort
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringexternalPort*number|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.saveExternalPort" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string",
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
postgres.deploy
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.deploy" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.changeStatus
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringapplicationStatus*stringValue in
```
"idle" | "running" | "done" | "error"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.changeStatus" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string",
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
postgres.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.saveEnvironment
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringenv?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.saveEnvironment" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.reload
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringappName*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.reload" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string",
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
postgres.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringLength
```
1 <= length
```
name?stringLength
```
1 <= length
```
appName?stringdatabaseName?stringLength
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
description?string|nulldockerImage?stringDefault
```
"postgres:15"
```
command?string|nullargs?array|nullenv?string|nullmemoryReservation?string|nullexternalPort?number|nullmemoryLimit?string|nullcpuReservation?string|nullcpuLimit?string|nullapplicationStatus?stringValue in
```
"idle" | "running" | "done" | "error"
```
healthCheckSwarm?object|nullrestartPolicySwarm?object|nullplacementSwarm?object|nullupdateConfigSwarm?object|nullrollbackConfigSwarm?object|nullmodeSwarm?object|nulllabelsSwarm?object|nullnetworkSwarm?array|nullstopGracePeriodSwarm?integer|nullendpointSpecSwarm?object|nullreplicas?numbercreatedAt?stringenvironmentId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
postgres.move
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*stringtargetEnvironmentId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.move" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string",
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
postgres.rebuild
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
postgresId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/postgres.rebuild" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"postgresId": "string"
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
[PortPrevious Page](/docs/api/reference-port)[Preview DeploymentNext Page](/docs/api/reference-previewDeployment)