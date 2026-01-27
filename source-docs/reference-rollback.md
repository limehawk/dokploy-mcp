# Rollback | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-rollback

---

[Dokploy](https://dokploy.com)
# Rollback
https://your-dokploy-instance.com/apiPOST
```
```
/
```
rollback.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
rollbackId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/rollback.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"rollbackId": "string"
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
rollback.rollback
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
rollbackId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/rollback.rollback" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"rollbackId": "string"
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
[RegistryPrevious Page](/docs/api/reference-registry)[ScheduleNext Page](/docs/api/reference-schedule)