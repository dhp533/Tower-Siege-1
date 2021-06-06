class Slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 13,
            stiffness : 0.3
        }
         
         this.slingshot = Constraint.create(options);
         World.add (world, this.slingshot);
    }
    display (){
       if (this.slingshot.bodyA) {
        var bodyAPos = this.slingshot.bodyA.position
        var point2 = this.slingshot.pointB   
        line(bodyAPos.x, bodyAPos.y, point2.x, point2.y);
       }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(body1) {
        this.slingshot.bodyA = body1
    }
}