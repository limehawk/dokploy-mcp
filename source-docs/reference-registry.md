# Registry | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-registry

---

[Dokploy](https://dokploy.com)
# Registry
https://your-dokploy-instance.com/apiPOST
```
```
/
```
registry.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
registryName*stringLength
```
1 <= length
```
username*stringLength
```
1 <= length
```
password*stringLength
```
1 <= length
```
registryUrl*stringregistryType*stringValue in
```
"cloud"
```
imagePrefix*string|nullserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/registry.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"registryName": "string",
"username": "string",
"password": "string",
"registryUrl": "string",
"registryType": "cloud",
"imagePrefix": "string"
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
registry.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
registryId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/registry.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"registryId": "string"
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
registry.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
registryId*stringLength
```
1 <= length
```
registryName?stringLength
```
1 <= length
```
imagePrefix?string|nullusername?stringLength
```
1 <= length
```
password?stringLength
```
1 <= length
```
registryUrl?stringcreatedAt?stringregistryType?stringValue in
```
"cloud"
```
organizationId?stringLength
```
1 <= length
```
serverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/registry.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"registryId": "string"
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
registry.all
```
SendAuthorization
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/registry.all" \
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
registry.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
registryId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/registry.one?registryId=string" \
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
registry.testRegistry
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
registryName?stringusername*stringLength
```
1 <= length
```
password*stringLength
```
1 <= length
```
registryUrl*stringregistryType*stringValue in
```
"cloud"
```
imagePrefix?string|nullserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/registry.testRegistry" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"username": "string",
"password": "string",
"registryUrl": "string",
"registryType": "cloud"
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
[RedisPrevious Page](/docs/api/reference-redis)[RollbackNext Page](/docs/api/reference-rollback)