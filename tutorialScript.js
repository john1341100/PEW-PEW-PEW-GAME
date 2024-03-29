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
        if (this.y >= h ) {
            jump = false
            this.y = h
            this.velocity = 0
            //this.gravity = -0.5
        }
        if (this.y <= 0) {
            this.y = 0
            this.velocity = 0
        }
        if (this.x >= w+25) {
            this.x = w+25
            this.velocity = 0
        }
        if (this.x <=0) {
            this.x =0
            this.velocity = 0
        }
    }
}