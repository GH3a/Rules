let body = JSON.parse($response.body); 
for (i in body.data) {
  body.data[i].rich_beans = 1;
  body.data[i].rich_level = 1;
  body.data[i].is_hide_distance = 1;
  body.data[i].is_show_vip_page = 1;
  body.data[i].is_hide_vip_look = 1;
  body.data[i].is_filter_ads = 1;
  body.data[i].is_global_view_secretly = 1;
  body.data[i].is_stealth_distance = 1;
  body.data[i].vip_grade = 1;
  body.data[i].is_vip_annual = 1;
  body.data[i].is_official = 1;
  body.data[i].is_shadow = 1;
  body.data[i].access_private_photos = 9;
  body.data[i].stealth_status = 1;
}
body = JSON.stringify(body);
$done({body}); 
