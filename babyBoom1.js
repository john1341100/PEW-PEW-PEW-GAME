function boom2() {
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
    this.yodaX = w/2
    this.yodaY = h/2
    this.marioX = w / 2
    this.marioY = h / 2
    this.velocityE = -10
    this.show = function () {
        this.yoda = document.getElementById('baby2')
        fill('')
        //yoda stuff
        rect(this.yodaX, this.yodaY, 50, 100)
        this.yoda.style.left = this.yodaX
        this.yoda.style.top = this.yodaY
        //mario stuff
    }
    this.movement = function () {
        //this.ms = millis()/1000
        if ((this.yodaX >= w - 400)||(this.hit === 0)){
            this.hit = 0
            this.yodaX += -6
        }
        if( (this.yodaX <= 400)||(this.hit === 1)) {
            this.hit = 1
            this.yodaX += 6
            console.log('hi')
        }
        if((this.yodaY <= 0)||(this.hitVert === 0)){
            this.hitVert = 0
            this.yodaY += 6
        }
        if((this.yodaY >= h-100)||(this.hitVert === 1)){
           this.hitVert =1
            this.yodaY += -6
        }
        else{
            this.yodaX +=-4
            this.yodaY +=-4
        }
        }
        this.collide = function(){
            this.woosh = collideRectCircle(this.yodaX, this.yodaY, 50, 60,doom.x, doom.y, 40 )
            if(this.woosh === true){
                doom.x = 50
                doom.y = h/2
                console.log('hi')
            }
        }
}