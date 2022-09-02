var obj = JSON.parse($response.body);

if (obj.data && obj.message) {
    obj.data.expire_time = "2099-12-30";
}

$done({ body: JSON.stringify(obj) });
