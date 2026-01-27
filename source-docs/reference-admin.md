# Admin | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-admin

---

[Dokploy](https://dokploy.com)
# Admin
https://your-dokploy-instance.com/apiPOST
```
```
/
```
admin.setupMonitoring
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
metricsConfig*object[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/admin.setupMonitoring" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"metricsConfig": {
"server": {
"refreshRate": 2,
"port": 1,
"token": "string",
"urlCallback": "http://example.com",
"retentionDays": 1,
"cronJob": "string",
"thresholds": {
"cpu": 0,
"memory": 0
}
},
"containers": {
"refreshRate": 2,
"services": {}
}
}
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
[RedisPrevious Page](/docs/api/redis)[AiNext Page](/docs/api/reference-ai)