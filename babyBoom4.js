function boom5() {
    this.hit =0
    this.hitVert = 0
    this.positive = 5
    this.negative = -5
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.xValue = 20
    this.yValue = h / 2
    this.x = this.xValue
    this.y = this.yValue
    //gravity
    //velocity
    this.velocity = 0
    //enemy code
    this.yodaX = w
    this.yodaY = h
    this.marioX = w / 2
    this.marioY = h / 2
    this.velocityE = -10
    this.show = function () {
        this.yoda = document.getElementById('baby')
        this.mario = document.getElementById('baby5')
        fill('red')
        //yoda stuff
        rect(this.yodaX, this.yodaY, 50, 100)
        this.yoda.style.left = this.yodaX
        this.yoda.style.top = this.yodaY
        //mario stuff
        rect(this.marioX, this.marioY, 50, 60)
        this.baby = document.getElementById('baby1')
        fill('blue')
        this.mario.style.left = this.marioX
        this.mario.style.top = this.marioY
    }
    this.movement = function () {
        //this.ms = millis()/1000
        if ((this.marioX >= w - 400)||(this.hit === 1)){
            this.hit = 0
            this.marioX += -8
        }
        if( (this.marioX <= 400)||(this.hit === 0)) {
            this.hit = 1
            this.marioX += 8
            console.log('pussy')
        }
        if((this.marioY <= 0)||(this.hitVert === 1)){
            this.hitVert = 0
            this.marioY += 16
        }
        if((this.marioY >= h-100)||(this.hitVert === 0)){
           this.hitVert =1
            this.marioY += -16
        }
        else{
            this.marioX += 4
            this.marioY +=8
        }
        }
}