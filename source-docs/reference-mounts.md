# Mounts | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-mounts

---

[Dokploy](https://dokploy.com)
# Mounts
https://your-dokploy-instance.com/apiPOST
```
```
/
```
mounts.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
type*stringValue in
```
"bind" | "volume" | "file"
```
hostPath?string|nullvolumeName?string|nullcontent?string|nullmountPath*stringLength
```
1 <= length
```
serviceType?stringDefault
```
"application"
```
Value in
```
"application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose"
```
filePath?string|nullserviceId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mounts.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"type": "bind",
"mountPath": "string",
"serviceId": "string"
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
mounts.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mountId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mounts.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mountId": "string"
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
mounts.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
mountId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/mounts.one?mountId=string" \
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
mounts.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
mountId*stringLength
```
1 <= length
```
type?stringValue in
```
"bind" | "volume" | "file"
```
hostPath?string|nullvolumeName?string|nullfilePath?string|nullcontent?string|nullserviceType?stringDefault
```
"application"
```
Value in
```
"application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose"
```
mountPath?stringLength
```
1 <= length
```
applicationId?string|nullpostgresId?string|nullmariadbId?string|nullmongoId?string|nullmysqlId?string|nullredisId?string|nullcomposeId?string|null[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/mounts.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"mountId": "string"
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
mounts.allNamedByApplicationId
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
applicationId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/mounts.allNamedByApplicationId?applicationId=string" \
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
[MongoPrevious Page](/docs/api/reference-mongo)[MysqlNext Page](/docs/api/reference-mysql)