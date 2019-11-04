function setup()
{
    createCanvas(400,400);
    var rectangle = new Rectangle(200,200,200,200);
    var qt = new QuadTree(rectangle, 4);
    console.log(qt);

    for(let i=0;i<5;i++)
    {
        let point = new Point(random(width), random(height));
        qt.insert(point);
    }
}