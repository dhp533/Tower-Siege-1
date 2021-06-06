class Polygon{
    constructor(x, y, radius) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, 0, 0, this.radius, this.radius);
        pop();
      }
}