class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }
  display()
  {
    //priting the speed of the pigs on the console.
    console.log(this.body.speed);
    //if the speed is less than 3 then the pigs don't disapear.
    if(this.body.speed<3)
    {
    super.display();
    }
    //if the speed is more than 3 the pigs will disappear.
    else 
    {
      //removing the pigs from the world.
      World.remove(world,this.body);
      //giving applying tint to only pigs
      push();
      //slowly the visiblity is decreased.
      this.visiblity = this.visiblity-5
      //caaling the tint function easch time we reduce the visiblity.
      tint(255,this.visiblity);
      //calling the  image function to display the image each time we reduce the visiblity.
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      //reveting back the settings for the pigs.
      pop();
    }


  }
};