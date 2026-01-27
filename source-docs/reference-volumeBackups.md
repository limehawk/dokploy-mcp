# Volume Backups | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-volumeBackups

---

[Dokploy](https://dokploy.com)
# Volume Backups
https://your-dokploy-instance.com/apiGET
```
```
/
```
volumeBackups.list
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
id*stringLength
```
1 <= length
```
volumeBackupType*stringValue in
```
"application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose"
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/volumeBackups.list?id=string&volumeBackupType=application" \
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
volumeBackups.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
name*stringvolumeName*stringprefix*stringserviceType?stringValue in
```
"application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose"
```
appName?stringserviceName?string|nullturnOff?booleancronExpression*stringkeepLatestCount?number|nullenabled?boolean|nullapplicationId?string|nullpostgresId?string|nullmariadbId?string|nullmongoId?string|nullmysqlId?string|nullredisId?string|nullcomposeId?string|nullcreatedAt?stringdestinationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/volumeBackups.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"volumeName": "string",
"prefix": "string",
"cronExpression": "string",
"destinationId": "string"
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
volumeBackups.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
volumeBackupId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/volumeBackups.one?volumeBackupId=string" \
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
volumeBackups.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
volumeBackupId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/volumeBackups.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"volumeBackupId": "string"
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
volumeBackups.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
name*stringvolumeName*stringprefix*stringserviceType?stringValue in
```
"application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose"
```
appName?stringserviceName?string|nullturnOff?booleancronExpression*stringkeepLatestCount?number|nullenabled?boolean|nullapplicationId?string|nullpostgresId?string|nullmariadbId?string|nullmongoId?string|nullmysqlId?string|nullredisId?string|nullcomposeId?string|nullcreatedAt?stringdestinationId*stringvolumeBackupId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/volumeBackups.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"volumeName": "string",
"prefix": "string",
"cronExpression": "string",
"destinationId": "string",
"volumeBackupId": "string"
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
volumeBackups.runManually
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
volumeBackupId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/volumeBackups.runManually" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"volumeBackupId": "string"
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
[UserPrevious Page](/docs/api/reference-user)[RegistryNext Page](/docs/api/registry)