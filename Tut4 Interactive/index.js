//Get canvas--
var canvas = document.getElementById('myCanvas');

//Get context--
var ctx = canvas.getContext('2d');

//Height & width--
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined
}

let maxR = 70
// let minR = 7

let colorArr = ['#363b74', '#673888', '#ef4f91', '#c79dd7', '#4d1b7b','#ff00ff', '#000080']

window.addEventListener('mousemove', (e) => {
    // console.log(e);
    mouse.x = e.x
    mouse.y = e.y
    // console.log(mouse);
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init()
})

class circle {
    constructor(x, y, radius, dx, dy) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = `${colorArr[Math.floor(Math.random() * colorArr.length)]}`
        this.minR = radius
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.stroke()
        // ctx.fillStyle = `${this.color}`;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        //Interactive
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxR)
                this.radius += 1
        }
        else if (this.radius > this.minR) {
            this.radius -= 1
        }

        this.draw()
    }
}


var c100arr = [];
function init(){

    c100arr = [];

    for (let i = 0; i < 500; i++) {
    
        let radius = Math.random() * 3 + 1
        let x = (Math.random() * (innerWidth - radius * 2)) + radius
        let y = (Math.random() * (innerHeight - radius * 2)) + radius
        let dx = (Math.random() - 0.5) * 2
        let dy = (Math.random() - 0.5) * 2
    
        c100arr.push(new circle(x, y, radius, dx, dy))
    }
}


function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < c100arr.length; i++) {
        c100arr[i].update()
    }
}

init()
animate()


