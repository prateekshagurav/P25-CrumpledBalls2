class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.boxLeftBody = Bodies.rectangle(x -65, y+20, 20, 150, options);
        World.add(world, this.boxLeftBody);
        this.boxBottomBody = Bodies.rectangle(x , y + 85, 150, 20, options);
        World.add(world, this.boxBottomBody);
        this.boxRightBody = Bodies.rectangle(x +65 - 20, y+20, 20, 150, options);
        World.add(world, this.boxRightBody);
        this.image = loadImage("dustbin.png");

    }
    display() {
        fill(color(255,0,0))
        noStroke();
        /*rectMode(CENTER)
        rect(this.x-65, this.y+20, 20, 150);
        rect(this.x , this.y + 85, 150, 20);
        rect(this.x + 65, this.y+20, 20, 150);*/
        imageMode(CENTER);
        image(this.image,this.x, this.y,150,250);
       
    }

}





