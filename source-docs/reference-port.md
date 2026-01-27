# Port | Dokploy

Source: https://docs.dokploy.com/docs/api/reference-port

---

[Dokploy](https://dokploy.com)
# Port
https://your-dokploy-instance.com/apiPOST
```
```
/
```
port.create
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
publishedPort*numberpublishMode?stringDefault
```
"ingress"
```
Value in
```
"ingress" | "host"
```
targetPort*numberprotocol?stringDefault
```
"tcp"
```
Value in
```
"tcp" | "udp"
```
applicationId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/port.create" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"publishedPort": 0,
"targetPort": 0,
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
port.one
```
SendAuthorizationQuery
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Query Parameters
portId*stringLength
```
1 <= length
```
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X GET "https://your-dokploy-instance.com/api/port.one?portId=string" \
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
port.delete
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
portId*stringLength
```
1 <= length
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/port.delete" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"portId": "string"
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
port.update
```
SendAuthorizationBody
## Authorization
x-api-key
x-api-key<token>API key authentication. Use YOUR-GENERATED-API-KEY
In: header
## Request Body
application/json
portId*stringLength
```
1 <= length
```
publishedPort*numberpublishMode?stringDefault
```
"ingress"
```
Value in
```
"ingress" | "host"
```
targetPort*numberprotocol?stringDefault
```
"tcp"
```
Value in
```
"tcp" | "udp"
```
[key: string]?never
## Response Body
### 200application/json
### defaultapplication/json
cURLJavaScriptGoPythonJavaC#
```
curl -X POST "https://your-dokploy-instance.com/api/port.update" \
-H "x-api-key: " \
-H "Content-Type: application/json" \
-d '{
"portId": "string",
"publishedPort": 0,
"targetPort": 0
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
[OrganizationPrevious Page](/docs/api/reference-organization)[PostgresNext Page](/docs/api/reference-postgres)