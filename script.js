function setup() {
    createCanvas(1460, 800)
}
function draw() {
    background("lightblue");
    myDreamHouse();
}
function myDreamHouse() {
    //Body
    fill("pink");
    stroke("black");
    rect(550, 400, 450, 400);
 //acoperis
    fill("red");
    stroke("black");
    triangle(500, 400, 755, 160, 1050, 400);
     //horn 
    fill("black");
    stroke("black");
    rect(850,170,50,170,);
    //ferastra1
    fill("gray");
    stroke("black");
    rect(600, 450, 100, 100);
    //ferastra2
    fill("gray");
    stroke("black");
    rect(850, 450, 100, 100);
    //usa
    fill("black");
    stroke("white");
    rect(720, 600, 95, 199);

}
