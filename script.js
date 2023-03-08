//objects
function doom(){
    this.positive = 10
    this.negative = -10
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.x = w/2
    this.y = h/2
    //gravity
    //velocity
    this.velocity = 0
    //enemy code
    this.enemyX = w - 100
    this.enemyY = h - 200
    this.velocityE = -10
    //what it looks like function
    this.show = function () {
        clear()
        fill('red')
        circle(this.x, this.y, 40)
        fill('gray')
        rect(this.enemyX, this.enemyY, 100, 100)
        this.burn = document.getElementById('burn')
        this.burn.style.top = this.enemyY
        this.burn.style.left = this.enemyX
        
    }
    //movement
    this.up = function () {
        //take initial velocity and modify by opposing gravity
            if (keyIsDown(UP_ARROW)) {
                this.y += this.negative;
            }
            if (keyIsDown(DOWN_ARROW)) {
                this.y += this.positive;
            }
            if (keyIsDown(LEFT_ARROW)) {
                this.x += this.negative;
            }
            if (keyIsDown(RIGHT_ARROW)) {
                this.x += this.positive;
            }
        }
    this.update = function () {
        //player mechanics
        //stop from falling through floor
        //stop from leaving the screen
        if (this.y >= h+25 ) {
            jump = false
            this.y = h +25
            this.velocity = 0
            //this.gravity = -0.5
        }
        if (this.y <= -25) {
            this.y = -25
            this.velocity = 0
        }
        if (this.x >= w+25) {
            this.x = w+25
            this.velocity = 0
        }
        if (this.x <=-25) {
            this.x =-25
            this.velocity = 0
        }
        //enemy mechanics
        this.enemyX += this.velocityE
        if(this.enemyX < -100){
            this.burn.style.left = w-100
            this.enemyX = w-100
            this.enemyY =random(0, h-500)
            this.burn.style.left = this.enemyY
        }
    }
    this.collision =function(){
        this.hit = collideRectCircle(this.enemyX, this.enemyY, 99, 99, this.x, this.y, 40)
        if(this.hit === true){
            this.x = w/2
            this.y = h/2
        }
    }
}