class Stone{

constrtuctor(x,y){

    var options={
    restitution:0.8,
    friction:0.9,
    density:12      
    }
    this.body = Bodies.rectangle(x,y,50,50);
    this.width = 100;
    this.height = 40;
    World.add(world,this.body);

}
display(){

            var pos = this.body.position;
            pos.x = 400;
            //pos.y = 
            push()
            translate(groundPos.x, groundPos.y);
            rectMode(CENTER)
            fill("red");
            stroke("DarkRed");
            rect(0,0,this.w,this.h)
            pop()

    }
    
}