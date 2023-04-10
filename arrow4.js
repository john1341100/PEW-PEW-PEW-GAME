function arrow3() {
    this.positive = 10
    this.negative = -10
    this.hit = false
    //if refer to stuff inside you, use this, but if calling something outside of object, use object name instead
    this.xValue = 20
    this.yValue = h / 2
    this.x = this.xValue
    this.y = this.yValue
    this.enemyX = w
    this.enemyY = h - 200
    this.velocityE = -9
    this.arrow = document.getElementById('arrow3')
    this.loop3 = function () {
        this.enemyMove3 = function () {
            this.enemyY += this.velocityE
            if (this.enemyY < -100) {
                this.enemyY = h - 100
                this.enemyX = random(0, w - 200)
            }
        }
    }
    this.showEnemy3 = function () {
            fill('')
            rect(this.enemyX, this.enemyY, 50, 170)
            this.arrow = document.getElementById('arrow3')
            this.arrow.style.top = this.enemyY+20
            this.arrow.style.left = this.enemyX-50
        }
    this.collide3 = function(){
        this.hit = collideRectCircle(this.enemyX, this.enemyY, 50, 170,doom.x, doom.y, 40 )
        if(this.hit === true){
            doom.x = 50
            doom.y = h/2
            console.log('hi')
        }
    }

}