# Destination | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-destination

---

[Dokploy](https://dokploy.com)
# Destination
https://your-dokploy-instance.com/apiPOST
```
```
/
```
destination.create
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
provider*string|nullaccessKey*stringbucket*stringregion*stringendpoint*stringsecretAccessKey*stringserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/destination.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"provider": "string",
"accessKey": "string",
"bucket": "string",
"region": "string",
"endpoint": "string",
"secretAccessKey": "string"
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
destination.testConnection
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
provider*string|nullaccessKey*stringbucket*stringregion*stringendpoint*stringsecretAccessKey*stringserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/destination.testConnection" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"provider": "string",
"accessKey": "string",
"bucket": "string",
"region": "string",
"endpoint": "string",
"secretAccessKey": "string"
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
destination.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
destinationId*string
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/destination.one?destinationId=string" \
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
destination.all
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
curl -X GET "https://your-dokploy-instance.com/api/destination.all" \
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
destination.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
destinationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/destination.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
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
https://your-dokploy-instance.com/apiPOST
```
```
/
```
destination.update
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
accessKey*stringbucket*stringregion*stringendpoint*stringsecretAccessKey*stringdestinationId*stringprovider*string|nullserverId?string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/destination.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"name": "string",
"accessKey": "string",
"bucket": "string",
"region": "string",
"endpoint": "string",
"secretAccessKey": "string",
"destinationId": "string",
"provider": "string"
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
[DeploymentPrevious Page](/docs/api/reference-deployment)[DockerNext Page](/docs/api/reference-docker)