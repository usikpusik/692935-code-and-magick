'use strict';

(function () {
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var j = 1; j < arr.length; j++) {
    if (arr[j] > maxElement) {
      maxElement = Math.round(arr[j]);
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud (ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  var maxTime = getMaxElement(times);
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP , CLOUD_Y + GAP + FONT_GAP * 2);

  for (var i = 0; i < names.length; i++) {
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - (GAP + FONT_GAP) * 2 - (BAR_HEIGHT * times[i]) / maxTime);
      if (names[i] === 'Вы') {
          ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
          ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      };
      ctx.fillRect(CLOUD_X + GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - GAP - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - GAP);
  }
};
})();
