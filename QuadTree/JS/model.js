class Point{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
}
class Rectangle{
    constructor(x, y, w, h)
    {
        //x,y are the coordinates of the center of the rectangle
        //w is a distnace from center of the rectangle to the side edge
        //h is the distance from center of the rectangle to the upper\down edge
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

class QuadTree{
    constructor(boundary, capacity)
    {
        this.boundary = boundary;
        this.capacity = capacity;
        this.divided = false;
        this.points = [];
    }

    contains(point)
    {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;
        return (point.x >= x - w && point.x <= x + w && point.y >= y-h && point.y <= y + h)
    }
    
    insert(point) {
        if(!this.contains(point))
        return;
        
        if(this.capacity > this.points.length)
        {
            this.points.push(point);
        }
        else
        {
         if(!this.divided)
           this.subdivide();

         this.topLeft.insert(point);
         this.topRight.insert(point);
         this.bottomLeft.insert(point);
         this.bottomRight.insert(point);
        }
    }

    subdivide()
    {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;
        let n = this.capacity;

        let topLeft_rectangle = new Rectangle(x - w/2 , y + h/2, w/2, h/2);
        this.topLeft = new QuadTree(topLeft_rectangle,this.capacity);

        let topRight_rectangle = new Rectangle(x + w/2 , y + h/2, w/2, h/2);
        this.topRight = new QuadTree(topRight_rectangle,this.capacity);

        let bottomLeft_rectangle = new Rectangle(x - w/2 , y - h/2, w/2, h/2);
        this.bottomLeft = new QuadTree(bottomLeft_rectangle,this.capacity);

        let bottomRight_rectangle = new Rectangle(x + w/2 , y - h/2, w/2, h/2);
        this.bottomRight = new QuadTree(bottomRight_rectangle,this.capacity);

        this.divided = true;
    }
}
