export default class Paddle {
//// export does not work, use another method
constructor(gameWidth, gameHeight) {
    
    this.width = 150;
    this.height = 30;

    this.position = {
        x:  gameWidth / 2 - this.width / 2,
        y: gameHeight - this.height - 10
    };
}


draw(ctx){
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
 

 update(deltaTime){
     if(!deltaTime) return;
     
     this.position.x +=5 / deltaTime;
 }
 }

