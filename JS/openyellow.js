let body = JSON.parse($response.body); 

body.data.result = "EF4FBF6E056A05830E9D1249B3368662894FFBD646B3E589453BD3E116D7BA87";
body.data.inData = "IhGwQrCnFm";
body = JSON.stringify(body);
$done({body});
