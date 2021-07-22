class Canvas2DUtil {
  context: CanvasRenderingContext2D
  constructor(ctx: HTMLCanvasElement) {
    this.context = ctx.getContext('2d')
  }

  drawText(text: string) {
    if (this.context !== null) {
      // 绘制前先save状态
      this.context.save()
      this.context.textBaseline = 'middle'
      this.context.textAlign = 'center'
      // 计算中心点坐标
      const centerX = this.context.canvas.width / 2
      const centerY = this.context.canvas.height / 2
      // 红色填充
      this.context.fillStyle = 'red'
      this.context.fillText(text, centerX, centerY)
      // 绿色描边
      this.context.strokeStyle = 'green'
      this.context.strokeText(text, centerX, centerY)
      // 绘制结束restore状态
      this.context.restore()
    }
  }
}

const canvas: HTMLCanvasElement | null = document.getElementById(
  'canvas'
) as HTMLCanvasElement

const canvas2dUtil = new Canvas2DUtil(canvas)
canvas2dUtil.drawText('hello world')
