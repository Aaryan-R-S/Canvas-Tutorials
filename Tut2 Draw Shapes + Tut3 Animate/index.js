//Get canvas--
var canvas = document.getElementById('myCanvas');

//Get context--
var ctx = canvas.getContext('2d');

//Height & width--
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//1.Rectangle--
// ctx.fillRect( x, y, width, height)

// ctx.fillStyle = 'rgb(35,56,200)'
// ctx.fillRect(100, 100, 100, 100)
// ctx.fillStyle = 'rgb(135,56,100)'
// ctx.fillRect(600, 60, 100, 100)
// ctx.fillStyle = 'rgb(145,200,10)'
// ctx.fillRect(750, 300, 100, 100)

//2.Line--
// ctx.beginPath()
// ctx.moveTo(50, 400)
// ctx.lineTo(300, 100)
// ctx.lineTo(600, 200)
// ctx.strokeStyle = "#fad42e"
// ctx.stroke()

//3.Arc or Circle--
// ctx.beginPath()
// ctx.arc(350, 200, 30, 0, Math.PI * 2, false)
// ctx.strokeStyle = 'cyan'
// ctx.stroke()

//4.Multiple circles Random --
// for (let i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight

//     ctx.beginPath()
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false)
//     ctx.strokeStyle = `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`
//     ctx.stroke()
// }


//5.Animate by creating loop--
// let radius = 30
// let x = (Math.random() * (innerWidth-radius*2))+radius
// let y = (Math.random() * (innerHeight-radius*2))+radius
// let dx = (Math.random() - 0.5) * 7
// let dy = (Math.random() - 0.5) * 7

// function animate() {

//     requestAnimationFrame(animate)  //this will create loop b/w two functions

//     //clear previous canvas
//     ctx.clearRect(0, 0, innerWidth, innerHeight)

//     ctx.beginPath()
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false)
//     ctx.strokeStyle = 'blue'
//     ctx.stroke()

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx
//     }
//     if (y + this.radius > innerHeight || y - radius < 0) {
//         dy = -dy
//     }

//     x += dx;
//     y += dy;

// }
// animate()


// 6. Using ES6 classes--
class circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // ctx.strokeStyle = `${this.color}`   //Use this OR Use below fillstyle+fill
        ctx.stroke()
        ctx.fillStyle = `${this.color}`;
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
        this.draw()
    }
}
//Use this :
// let c1 = new circle(200, 200, 50, 2, 2, 'goldenrod')
//OR
//Use:

var c100arr = [];
for (let i = 0; i < 100; i++) {

    let radius = Math.random() * 30
    let x = (Math.random() * (innerWidth - radius * 2)) + radius
    let y = (Math.random() * (innerHeight - radius * 2)) + radius
    let dx = (Math.random() - 0.5) * 5
    let dy = (Math.random() - 0.5) * 5
    let color = `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`

    c100arr.push(new circle(x, y, radius, dx, dy, color))
}

// console.log(c100arr);

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    // c1.update()

    for (let i = 0; i < c100arr.length; i++) {
        c100arr[i].update()
    }
}
animate()

