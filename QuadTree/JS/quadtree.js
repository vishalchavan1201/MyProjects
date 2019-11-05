let qt;
function setup()
{
    createCanvas(400,400);
    var rectangle = new Rectangle(200,200,200,200);
    qt = new QuadTree(rectangle, 4);
    console.log(qt);

    // for(let i=0;i<500;i++)
    // {
    //     let point = new Point(random(width), random(height));
    //     qt.insert(point);
    // }

    // background(0);
    // qt.show();
}

function draw() {
    if(mouseIsPressed)
    {
        let m  = new Point(mouseX, mouseY);
        qt.insert(m);
    }

    background(0);
    qt.show();
}