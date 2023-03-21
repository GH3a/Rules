let headers = $request.headers;
headers['Cookie'] = "SESS=AuthKey 2d21a0a4-7f8e-4a66-8924-98f924c00786; SID=AuthKey 2d21a0a4-7f8e-4a66-8924-98f924c00786";
headers['Authorization'] = "AuthKey 2d21a0a4-7f8e-4a66-8924-98f924c00786";
headers['User-Agent'] = "SketchUp/1839 CFNetwork/1404.0.5 Darwin/22.3.0";
headers['app-user-uuid'] = "53ce3815-ec2d-40f9-b496-82b2386508fd";
$done({headers});
