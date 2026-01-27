# Backup | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-backup

---

[Dokploy](https://dokploy.com)
# Backup
https://your-dokploy-instance.com/apiPOST
```
```
/
```
backup.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
schedule*stringenabled?boolean|nullprefix*stringLength
```
1 <= length
```
destinationId*stringkeepLatestCount?number|nulldatabase*stringLength
```
1 <= length
```
mariadbId?string|nullmysqlId?string|nullpostgresId?string|nullmongoId?string|nulldatabaseType*stringValue in
```
"postgres" | "mariadb" | "mysql" | "mongo" | "web-server"
```
userId?string|nullbackupType?stringValue in
```
"database" | "compose"
```
composeId?string|nullserviceName?string|nullmetadata?unknown[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"schedule": "string",
"prefix": "string",
"destinationId": "string",
"database": "string",
"databaseType": "postgres"
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
backup.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
backupId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/backup.one?backupId=string" \
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
backup.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
schedule*stringenabled?boolean|nullprefix*stringLength
```
1 <= length
```
backupId*stringdestinationId*stringdatabase*stringLength
```
1 <= length
```
keepLatestCount?number|nullserviceName*string|nullmetadata?unknowndatabaseType*stringValue in
```
"postgres" | "mariadb" | "mysql" | "mongo" | "web-server"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"schedule": "string",
"prefix": "string",
"backupId": "string",
"destinationId": "string",
"database": "string",
"serviceName": "string",
"databaseType": "postgres"
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
backup.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupPostgres
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupPostgres" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupMySql
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupMySql" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupMariadb
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupMariadb" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupCompose
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupCompose" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupMongo
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupMongo" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.manualBackupWebServer
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
backupId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/backup.manualBackupWebServer" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"backupId": "string"
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
backup.listBackupFiles
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
destinationId*stringsearch*stringserverId?string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/backup.listBackupFiles?destinationId=string&search=string" \
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
[ApplicationPrevious Page](/docs/api/reference-application)[BitbucketNext Page](/docs/api/reference-bitbucket)