# Redirects | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-redirects

---

[Dokploy](https://dokploy.com)
# Redirects
https://your-dokploy-instance.com/apiPOST
```
```
/
```
redirects.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
regex*stringLength
```
1 <= length
```
replacement*stringLength
```
1 <= length
```
permanent*booleanapplicationId*string[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/redirects.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"regex": "string",
"replacement": "string",
"permanent": true,
"applicationId": "string"
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
redirects.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
redirectId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/redirects.one?redirectId=string" \
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
redirects.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
redirectId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/redirects.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"redirectId": "string"
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
redirects.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
redirectId*stringLength
```
1 <= length
```
regex*stringLength
```
1 <= length
```
replacement*stringLength
```
1 <= length
```
permanent*boolean[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/redirects.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"redirectId": "string",
"regex": "string",
"replacement": "string",
"permanent": true
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
[ProjectPrevious Page](/docs/api/reference-project)[RedisNext Page](/docs/api/reference-redis)