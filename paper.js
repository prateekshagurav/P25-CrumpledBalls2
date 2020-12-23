class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.d = r*2;
        World.add(world,this.body);
        this.image = loadImage("crumpledPaper.png");
    }
    display(){
        var pos = this.body.position
        console.log(pos.x);
        //ellipse(pos.x,pos.y,this.d,this.d);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.d,this.d);

    }
}