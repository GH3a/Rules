window.onload = function() {
  // 为video元素添加controls属性
  var video = document.getElementById('videoPlayerID_html5_api');
  video.setAttribute('controls', 'controls');

  // 获取class包含'vjs-control-bar'的div元素
  var controlBar = document.querySelector('div.vjs-control-bar');

  // 在该div元素的class中添加'vjs-hidden'
  controlBar.className += ' vjs-hidden';
};
