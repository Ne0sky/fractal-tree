var angle = 0;

var slider;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    
    slider=createSlider(0,TWO_PI, PI/6,0.01)
    
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw(){
    background(20);
    angle=slider.value();
    stroke(255);
    translate(windowWidth/2,height);
    if(windowWidth>600){
        
        branch(windowHeight*0.25,5);
    }
    else
    {
        
        branch(windowHeight*0.15,5);
    }
    
}

function branch(len,thickness){
    line(0,0,0,-len)
    strokeWeight(thickness)
    translate(0,-len);
    if(windowWidth>600)
    {
        if(len>4){
            push();
            rotate(angle);
            branch(len*0.67,thickness*0.67)
            pop();
            push();
            rotate(-angle);
            branch(len*0.67,thickness*0.67)
            pop(); 
        }
    }

    else{
        if(len>4){
            push();
            rotate(angle);
            branch(len*0.67,thickness*0.67)
            pop();
            push();
            rotate(-angle);
            branch(len*0.67,thickness*0.67)
            pop(); 
        }
    }
    
    
    
}