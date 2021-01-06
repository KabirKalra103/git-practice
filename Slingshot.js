class Slingshot{
    constructor( firstbody,anchorPoint){
        var options={
            bodyA:firstbody,
            pointB:anchorPoint,
            length:100,
            stiffness:0.04
        }
    
        this.sling= Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA= null
    }

    display(){
        if(this.sling.bodyA){
            var startingPosition = this.sling.bodyA.position;
            var endingPosition = this.sling.pointB;
            strokeWeight(5);
            line(startingPosition.x, startingPosition.y, endingPosition.x, endingPosition.y);
        }
    }
}
