function boom(){
    this.positive = 5
    this.negative = -5
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.xValue = 20
    this.yValue = h/2
    this.x = this.xValue
    this.y = this.yValue
    //gravity
    //velocity
    this.velocity = 0
    //enemy code
    this.enemyX = w - 100
    this.enemyY = h - 200
    this.velocityE = -10
    this.baby = getElementById('baby')
    this.show = function(){
        
    }
}