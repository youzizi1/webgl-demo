var Canvas2DUtil = /** @class */ (function () {
    function Canvas2DUtil(ctx) {
        this.context = ctx.getContext('2d');
    }
    Canvas2DUtil.prototype.drawText = function (text) {
        if (this.context !== null) {
            // 绘制前先save状态
            this.context.save();
            this.context.textBaseline = 'middle';
            this.context.textAlign = 'center';
            // 计算中心点坐标
            var centerX = this.context.canvas.width / 2;
            var centerY = this.context.canvas.height / 2;
            // 红色填充
            this.context.fillStyle = 'red';
            this.context.fillText(text, centerX, centerY);
            // 绿色描边
            this.context.strokeStyle = 'green';
            this.context.strokeText(text, centerX, centerY);
            // 绘制结束restore状态
            this.context.restore();
        }
    };
    return Canvas2DUtil;
}());
var canvas = document.getElementById('canvas');
var canvas2dUtil = new Canvas2DUtil(canvas);
canvas2dUtil.drawText('hello world');
