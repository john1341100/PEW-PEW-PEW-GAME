function arrow(){
    this.positive = 10
    this.negative = -10
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.xValue = 20
    this.yValue = h/2
    this.x = this.xValue
    this.y = this.yValue
    this.enemyX = w
    this.enemyY = h - 200
    this.velocityE = -10
    this.loop = function(){
        this.showEnemy = function(){
            fill('blue')
            rect(this.enemyX, this.enemyY, 100, 100)
            this.burn = document.getElementById('fireball')
        }
    this.enemyMove = function (){
        this.enemyY += this.velocityE
        if(this.enemyY < -100){
            this.enemyY = h-100
            this.enemyX =random(0, w-200)
            this.fireball.style.left = this.enemyY
        }
    }
}
    
}