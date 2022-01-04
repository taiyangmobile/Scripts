let body = $response.body
body = JSON.parse(body)
body["response"]["close_ad"] = 1
body["response"]["expire_time"] = 9999
body = JSON.stringify(body)
$done({ body })
