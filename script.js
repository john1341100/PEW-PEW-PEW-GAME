//objects
function doom(){
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.x = 30
    this.y = h - 25
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
        circle(this.x, this.y, 50)
        fill('green')
        rect(this.enemyX, this.enemyY, 100, 100)
    }
    //movement
    this.up = function () {
        //take initial velocity and modify by opposing gravity
            if (keyIsDown(UP_ARROW)) {
                this.y += -5;
            }
            if (keyIsDown(DOWN_ARROW)) {
                this.y += 5;
            }
            if (keyIsDown(LEFT_ARROW)) {
                this.x += -5;
            }
            if (keyIsDown(RIGHT_ARROW)) {
                this.x += 5;
            }
        }
    this.update = function () {
        //player mechanics

        //air resistance
        this.velocity *= 0.9
        //stop from falling through floor
        //stop from leaving the screen
        if (this.y >= h - 25) {
            jump = false
            this.y = h - 25
            this.velocity = 0
            //this.gravity = -0.5
        }
        
        //can make into an OR condition
        if (this.y <= 0) {
            this.y = 0
            this.velocity = 0
        }
        if (this.x >= w) {
            this.x += -5
        }
        if (this.x <=0) {
            this.x += 10
            this.velocity = 0
        }
        if (this.x >= w) {
            this.x += -10
            this.velocity = 0
        }
        //enemy mechanics
        this.enemyX += this.velocityE
        if(this.enemyX < 0){
            this.enemyX = w-100
            this.enemyY =random(0, h-500)
        }
    }
    this.collision =function(){
        this.hit = collideRectCircle(this.enemyX, this.enemyY, 99, 99, this.x, this.y, 50)
        if(this.hit === true){
            this.x = 30
            this.y = h-30
        }
    }
}