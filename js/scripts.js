'use strict'
/////////////////////////////////circle
var content = document.getElementById('content');
var score = document.getElementById('score');

setInterval(function() {
  ///////////////skittles
  var skittles = document.createElement('div');
  var contentStyle = getComputedStyle(content);
  var skitStyle = getComputedStyle(skittles);
  skittles.className = 'skittles';
  skittles.style.width = '20px';
  skittles.style.height = '20px';
  skittles.innerHTML = 's';
  skittles.style.backgroundColor = 'rgb('+ (Math.floor(Math.random() * 256) +1) + ', '+(Math.floor(Math.random()   * 256) +1)+', '+(Math.floor(Math.random() * 256) +1)+')';
  skittles.style.opacity = '0';
  setTimeout(function() {
    skittles.style.opacity = '1';
  }, 1000);
  
  //////////////////////skittles position
  var maxHeight = parseInt(contentStyle.height, 10);
  var maxWidth = parseInt(contentStyle.width, 10);
  var skitW = parseInt(skittles.style.width, 10);
  var skitH = parseInt(skittles.style.height, 10);
  content.appendChild(skittles);
  var top = Math.floor(Math.random() * ((maxHeight/2 - skitH/2) - (-(maxHeight/2 - skitH/2)))) - (maxHeight/2 - skitH/2);
  skittles.style.top = 'calc(50% + (' + top + 'px - ' + (skitH/2) + 'px)';
  var tang = Math.sqrt(Math.abs((maxWidth/2) * (maxWidth/2) - top * top))
  skittles.style.left = 'calc(50% + (' + (Math.floor(Math.random() * ((tang - skitW/2) - (-(tang - skitW/2)))) - (tang - skitW/2)) + 'px - ' + (skitW/2) + 'px)';
}, 1000);

/////////////////////////click
content.addEventListener('click', function(e) {
  var event = e.target
  if (event.className == 'skittles') {
    content.removeChild(event);
    score.innerHTML = parseInt(score.innerHTML, 10) + 1;
  }
});


/////////////////////square
/*var content = document.getElementById('content');
var score = document.getElementById('score');

setInterval(function() {
  var skittles = document.createElement('div');
  var contentStyle = getComputedStyle(content);
  var skitStyle = getComputedStyle(skittles);
  skittles.className = 'skittles';
  skittles.style.width = '20px';
  skittles.style.height = '20px';
  skittles.style.backgroundColor = 'rgb('+ (Math.floor(Math.random() * 256) +1) + ', '+(Math.floor(Math.random()   * 256) +1)+', '+(Math.floor(Math.random() * 256) +1)+')';
  skittles.style.opacity = '0';
  setTimeout(function() {
    skittles.style.opacity = '1';
  }, 1000)
  var maxHeight = parseInt(contentStyle.height, 10);
  var maxWidth = parseInt(contentStyle.width, 10);
  var skitW = parseInt(skittles.style.width, 10);
  var skitH = parseInt(skittles.style.height, 10);
  content.appendChild(skittles);
  skittles.style.top = Math.floor(Math.random() * (maxHeight - skitW)) +   'px';
  skittles.style.left = Math.floor(Math.random() * (maxWidth - skitH)) +   'px';
}, 1000);

content.addEventListener('click', function(e) {
  var event = e.target
  if (event.className == 'skittles') {
    event.style.display = 'none';
    score.innerHTML = parseInt(score.innerHTML, 10) + 1;
  }
});*/