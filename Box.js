class Box{
    constructor(x,y,width,height){
        var gp={
            //isStatic: true
            restitution:1.0
        }
        this.width=width;
        this.height=height;
        this.body =Bodies.rectangle(x,y,width,height,gp);
World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        fill("red"); 
  rect(0,0,this.width,this.height);
    pop();
}
}