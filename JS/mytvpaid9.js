let body = $request.body;

for (i in body) {
  body.user_type = "paid";
}

$done({$request});
