let body = $response.body;

  // 修改div的class，添加 vjs-hidden
body = body.replace(/<div class="vjs-control-bar" dir="ltr">/g, '<div class="vjs-control-bar vjs-hidden" dir="ltr">');

  // 在video标签中添加controls属性
body = body.replace(/<video id="videoPlayerID_html5_api"/g, '<video id="videoPlayerID_html5_api" controls="controls"');

  // 使用修改后的body覆盖原来的响应体
$done({ body });
