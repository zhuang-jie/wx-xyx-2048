// 2048精灵基类
import {DataStore} from "./DataStore.js";

export class Sprite {
    constructor(
                x = 0,
                y = 0,
                width = 0,
                height = 0,
                radius = 0,
                bgColor = '#faf8ef',
                scale = 1
    ){
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.bgColor = bgColor;
        this.scale = scale;

    }

    draw(
        x = this.x,
        y = this.y,
        width = this.width,
        height = this.height,
        radius = this.radius,
        bgColor = this.bgColor,
        scale = this.scale,
        alpha = 1,
        shadowBlur = 0,
        shadowColor
    ){
        const ctx = this.ctx;
        const position = (width-(width*scale))/2;
        ctx.save();
        ctx.translate(x, y);
        ctx.transform(scale, 0, 0, scale, position, position);
        this.pathRoundRect(ctx, width, height, radius);
        ctx.fillStyle = bgColor;
        if(shadowColor){
            ctx.shadowBlur = shadowBlur;
            ctx.shadowColor = shadowColor;
        }
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.restore();
    }



    pathRoundRect(ctx, width, height, radius){
        ctx.beginPath();
        if(radius>0){
            // ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
            // ctx.lineTo(radius, height);
            // ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
            // ctx.lineTo(0, radius);
            // ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
            // ctx.lineTo(width - radius, 0);
            // ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);

			ctx.moveTo(radius, 0);
			ctx.lineTo(width - radius, 0);
			ctx.arc(width - radius, radius, radius, Math.PI * 1.5, Math.PI * 2);
			ctx.lineTo(width, height - radius);
			ctx.arc(width - radius, height - radius, radius, 0, Math.PI * 0.5);
			ctx.lineTo(radius, height);
			ctx.arc(radius, height - radius, radius, Math.PI * 0.5, Math.PI);
			ctx.lineTo(0, radius);
			ctx.arc(radius, radius, radius, Math.PI, Math.PI * 1.5);
        }else{
            ctx.rect(0, 0, width, height);
        }
        ctx.closePath();
    }


    // 绘制格子文字
    drawNumber(value, x, y, color, size,
               ailgn = 'center',
               weight = 'bold',
               alpha = 1,
               family = 'Arial',
               baseline = 'middle'){
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(x, y);

        ctx.font = weight + ' ' + size + 'px ' + family;
		
        ctx.textAlign = ailgn;
        ctx.textBaseline = baseline;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;

        ctx.fillText(value, 0, 0);
        ctx.restore();
    }
}