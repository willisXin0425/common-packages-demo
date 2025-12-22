import { useEffect } from 'react';
import { random } from 'lodash';

// style
import { Container } from './style';

// type
type SnowType = {
  x: number;
  y: number;
  dy: number;
  r: number;
  frame: number;
  franquency: number;
  amplitude: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

function SnowIng() {
  useEffect(() => {
    const canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const InitSnowCount: number = 300; // 初始雪花數量
    let lastStamp: number = 0; // 時間戳記
    const spawnInterval = 1000; // 動畫重繪秒數
    let snows: SnowType[] = []; // 動畫元素

    class Snow implements SnowType {
      x: number;
      officeX: number;
      y: number;
      dy: number;
      r: number;
      amplitude: number;
      frame: number;
      franquency: number;

      constructor(yinit: string | number) {
        this.x = random(0, canvas.width);
        this.officeX = this.x;
        this.y = yinit === 'random' ? random(0, canvas.height) : -10;
        this.r = random(2.5, 5);
        this.dy = random(0.5, 1);
        this.frame = 0;
        this.franquency = random(0.01, 0.03); // 晃動的頻率
        this.amplitude = random(10, 20); // 擺動的幅度
      }
      update() {
        this.frame += this.franquency;
        this.officeX = Math.sin(this.frame) * this.amplitude;
        this.y += this.dy;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x + this.officeX, this.y, this.r, 0, 2 * Math.PI);
        ctx.shadowColor = 'rgba(255, 255, 255, 80%)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = `rgba(255, 255, 255, 0.6)`;
        ctx.fill();
      }
    }

    // 產生初始雪花
    for (let i = 0; i < InitSnowCount; i++) {
      snows.push(new Snow('random'));
    }

    const Draw = (timestamp: number) => {
      // 每隔一段時間產生雪花
      if (timestamp - lastStamp > spawnInterval) {
        lastStamp = timestamp;
        for (let i = 0; i < 10; i++) {
          snows.push(new Snow(-10));
        }
      }
      // 動畫重繪
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snows.forEach((el) => {
        el.update();
        el.draw(ctx);
      });
      snows = snows.filter((el) => el.y < canvas.height);
      requestAnimationFrame(Draw);
    };

    Draw(0);
  }, []);

  return (
    <Container>
      <canvas id="myCanvas"></canvas>
    </Container>
  );
}

export default SnowIng;
