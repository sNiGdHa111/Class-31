class Boat {

  constructor(x, y, width, height) {
    var options = {
      isStatic: false
    };
    this.image = loadImage("./assets/boat.png")
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}
