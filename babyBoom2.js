function boom3() {
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
        //YODA AND MARIO IS NOT YODA, they are IS ALL BABIES I CODED IT UGLY AF
        //mario stuff
        rect(this.marioX, this.marioY, 50, 60)
        this.mario = document.getElementById('baby3')
        fill('')
        this.mario.style.left = this.marioX
        this.mario.style.top = this.marioY
    }
    this.movement = function () {
        //this.ms = millis()/1000
        if ((this.marioX >= w - 400)||(this.hit === 0)){
            this.hit = 0
            this.marioX += -6
        }
        if( (this.marioX <= 400)||(this.hit === 1)) {
            this.hit = 1
            this.marioX += 4
            console.log('hi')
        }
        if((this.marioY <= 0)||(this.hitVert === 0)){
            this.hitVert = 0
            this.marioY += 4
        }
        if((this.marioY >= h-100)||(this.hitVert === 1)){
           this.hitVert =1
            this.marioY += -4
        }
        else{
            this.marioX +=-2
            this.marioY +=-2
        }
        }
        this.collide = function(){
            this.woosh = collideRectCircle(this.marioX, this.marioY, 50, 60,doom.x, doom.y, 40 )
            if(this.woosh === true){
                doom.x = 50
                doom.y = h/2
                console.log('hi')
            }
        }
}