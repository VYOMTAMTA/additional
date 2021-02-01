class Ground{

    constructor( y){

        var ground_options = {
            isStatic: false
        }
       this.body=Bodies.rectangle(x, y, 20, 20, ground_options);
       this.x = i;
       this.width = 20;
       this.height = 20;

       
       World.add(world, this.body);
    }
    
    display(){
    
        var pos=this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}