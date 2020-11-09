class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("a/tree.png")
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h)
    }
}