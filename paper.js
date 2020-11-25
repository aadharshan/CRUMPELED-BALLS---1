class Paper{
    constructor(x,y){
        var option = {
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
       this.body = Bodies.circle(x,y,20,option);
       World.add(world,this.body);
       
    }

    display(){
        var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate (angle);
       circle(0,0,40);
       pop();
       
    }
}