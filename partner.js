
class Partner {
  constructor(){
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
  }

  display(){
    image(partnerImg, this.x, this.y, this.r, this.r);

  }

}
