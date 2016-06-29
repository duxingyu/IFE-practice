document.getElementsByTagName('button')[0].onclick = function () {
  var oVideo = document.getElementsByTagName('video')[0];
  oVideo.paused ? oVideo.play() : oVideo.pause();
};
// rectangle
var rectangle = document.getElementById('rectangle');
var ctx1 = rectangle.getContext('2d');
ctx1.fillStyle = "#ccc";
ctx1.fillRect(25, 25, 100, 50);
// line
var line = document.getElementById('line');
var ctx2 = line.getContext('2d');
ctx2.moveTo(25,25);
ctx2.lineTo(125,75);
ctx2.stroke();
// cicle
var circle = document.getElementById('circle');
var ctx3 = circle.getContext('2d');
ctx3.beginPath();
ctx3.arc(75,50,40,0,2*Math.PI);
ctx3.stroke();
// linear gradient
var gradient = document.getElementById('gradient');
var ctx4 = gradient.getContext('2d');
var grd = ctx4.createLinearGradient(0,0,150,0);
grd.addColorStop(0,'orange');
grd.addColorStop(0.5,'#14c7f3');
grd.addColorStop(1,'green');
ctx4.fillStyle = grd;
ctx4.fillRect(0,0,150,100);
// radial gradient
var gradient2 = document.getElementById('gradient2');
var ctx5 = gradient2.getContext('2d');
var grd2 = ctx5.createRadialGradient(75,50,5,90,60,100);
grd2.addColorStop(0,'orange');
grd2.addColorStop(0.5,'#14c7f3');
grd2.addColorStop(1,'green');
ctx5.fillStyle = grd2;
ctx5.fillRect(10,10,130,80);
// text
var text = document.getElementById('text');
var ctx6 = text.getContext('2d');
ctx6.font = '30px 微软雅黑';
ctx6.fillStyle = 'orange';
ctx6.textAlign = 'center';
ctx6.fillText('画布文本',text.width/2,text.height/2);//ctx6.strokeText(); 镂空文本
//image 
window.onload = function () {
  var image = document.getElementById('image');
  var ctx7 = image.getContext('2d');
  var imagex = document.getElementById('scream');
  ctx7.drawImage(imagex,-10,-20);
}
