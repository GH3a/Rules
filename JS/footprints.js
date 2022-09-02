var obj = JSON.parse($response.body);

if (obj.data && obj.message) {
    obj.data.expire_time = 2050-12-31;
}

$done({ body: JSON.stringify(obj) });
