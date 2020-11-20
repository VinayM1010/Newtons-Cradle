class Bob {
    constructor(x, y, r) {
      var options = {
          'restitution':1,
          'friction':0.8,
          'density':0.8
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("gray");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
  