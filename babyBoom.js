function boom() {
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
        this.mario = document.getElementById('baby1')
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
        if (this.marioX >= w - 500) {
            this.marioX += -14
        }
        if (this.marioX <= 300) {
            this.marioX = 301
            this.marioX += 7
            console.log('hi')
        }
        if(this.marioY <= 300){
            this.marioY += 7
        }
        if(this.marioY >= h-300){
           
            this.marioY += -14
        }
        else{
            this.marioX +=7
            this.marioy +=7
        }
        }
}