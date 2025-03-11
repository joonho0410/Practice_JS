const MyMixins = superClass =>
  class extends superClass{
    moveUp(){
        console.log('move up')
    }
    moveDown() {
        console.log('move down')
    }
    down() {
        console.log('down')
    }
  }

class CarAnimator {
    moveLeft() {
        console.log('move left')
    }
}

class MyAnimator extends MyMixins(CarAnimator) {}

const myAnimator = new MyAnimator()
myAnimator.moveLeft()
myAnimator.down()