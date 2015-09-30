/**
 * 图形绘制库
 */

// 绘制矩形
function drawRect(cxt, x, y, width, height, borderWidth, borderColor, fillColor){
	cxt.beginPath();
	cxt.moveTo(x, y);
	cxt.lineTo(x+width, y);
	cxt.lineTo(x+width, y+height);
	cxt.lineTo(x, y+height);
	cxt.closePath();
	cxt.lineWidth = borderWidth;
	cxt.fillStyle = fillColor;
	cxt.strokeStyle = borderColor;
	cxt.fill();
	cxt.stroke();
}
// 绘制五角星
function drawStar(cxt,x,y,r,R,rot){
	cxt.beginPath();
	for (var i = 0; i < 5; i++) {
		cxt.lineTo( Math.cos((18+i*72 - rot)/180*Math.PI) *R + x, -Math.sin((18+i*72 - rot)/180*Math.PI) *R + y );
		cxt.lineTo( Math.cos((54+i*72 - rot)/180*Math.PI) *r + x, -Math.sin((54+i*72 - rot)/180*Math.PI) *r + y );
	}
	cxt.closePath();
	cxt.s troke();
}

// 填充色的圆角矩形
function fillRoundRect(cxt,x,y,width,height,radius,fillColor){
	if(2*radius > width || 2*radius > height)
		return;
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,width,height,radius);
	cxt.fillStyle = fillColor || 'black';
	cxt.fill();
	cxt.restore();
}
// 描边的圆角矩形
function strokeoundRect(cxt,x,y,width,height,radius,lineWidth,strokeColor){
	if(2*radius > width || 2*radius > height)
		return;
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,width,height,radius);
	cxt.lineWidth = lineWidth || 1;
	cxt.strokeStyle = strokeColor || 'black';
	cxt.stroke();
	cxt.restore();
}