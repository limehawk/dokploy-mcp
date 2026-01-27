# Git Provider | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-gitProvider

---

[Dokploy](https://dokploy.com)
# Git Provider
https://your-dokploy-instance.com/apiGET
```
```
/
```
gitProvider.getAll
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
curl -X GET "https://your-dokploy-instance.com/api/gitProvider.getAll" \
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
gitProvider.remove
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
gitProviderId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/gitProvider.remove" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"gitProviderId": "string"
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
[GitlabPrevious Page](/docs/api/reference-gitlab)[MariadbNext Page](/docs/api/reference-mariadb)