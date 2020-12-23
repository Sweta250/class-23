class Ball{
    constructor(x,y,radius){
        var bp={
            //isStatic: true
            restitution:1.0
        }
        this.radius=radius
        this.body =Bodies.circle(x,y,radius,bp);
World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position;
        //var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        //angleMode(RADIANS);
        //rotate(angle);
        ellipseMode(RADIUS)
        fill("purple"); 
  circle(0,0,this.radius);
    pop();
}
}