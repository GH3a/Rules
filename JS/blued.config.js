let body = JSON.parse($response.body); 
for (i in body.data) {
  body.data[i].has_buy_call = 15;
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
  body.data[i].is_shadow = 1;
  body.data[i].access_private_photos = 9;
  body.data[i].stealth_status = 1;
  body.data[i].vip_split.is_hide_last_operate = 1;
  body.data[i].vip_split.is_hide_distance = 1;
  body.data[i].vip_split.is_invisible_half = 1;
  body.data[i].vip_split.is_invisible_all = 1;
  body.data[i].vip_split.is_show_vip_page = 1;
  body.data[i].vip_split.is_hide_vip_look = 1;
  body.data[i].vip_split.is_view_secretly = 1;
  body.data[i].vip_split.is_improve_backlist = 1;
  body.data[i].vip_split.is_top_feed_views = 1;
  body.data[i].vip_split.is_vip_more_avatar = 1;
  body.data[i].vip_split.is_traceless_access = 1;
  body.data[i].vip_split.is_advanced_recently_view = 1;
  body.data[i].vip_split.is_global_view_secretly = 1;
  body.data[i].vip_split.is_change_blued_icon = 1;
  body.data[i].vip_split.is_filter_vip = 1;
  body.data[i].vip_split.is_vip_red_name = 1;
  body.data[i].vip_split.is_vip_mark = 1;
  body.data[i].vip_split.is_vip_annual_mark = 1;
  body.data[i].vip_split.is_svip_mark = 1;
  body.data[i].vip_split.is_svip_annual_mark = 1;
  body.data[i].vip_split.is_secretly_followed = 1;
  body.data[i].vip_split.is_find_on_map = 1;
  body.data[i].vip_split.is_chat_backgrounds = 1;
  body.data[i].vip_split.is_filter_ads = 1;
  body.data[i].vip_split.is_vip_select = 1;
}
body = JSON.stringify(body);
$done({body}); 
