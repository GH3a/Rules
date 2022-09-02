var obj = JSON.parse($response.body);

if (obj.data && obj.message) {
    obj.data.expire_time = 3043037166000;
}

$done({ body: JSON.stringify(obj) });
