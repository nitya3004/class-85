canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_array=["mars.jpg","mars_2.jpg","nasa_image_2.jpeg"];
randomnumber=Math.floor(Math.random()*3);

rover_width=100;
rover_height=90;
rover_image="rover.png";
rover_x=10;
rover_y=10;

background_image=nasa_mars_array[randomnumber];
console.log("backgroundimage="+backgroundimage);
function rover(){
    backimg=new Image();
    backimg.onload=upload_background;
    backimg.src=background_image;

    roverimg=new Image();
    roverimg.onload=upload_rover;
    roverimg.src=rover_image;
}
function upload_background(){
    ctx.drawImage(backimg,0,0,canvas.width ,canvas.height);

}
function upload_rover(){
    ctx.drawImage(roverimg,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",key);
function key(e){
    keypressed=e.keycode;
    console.log(keypressed);
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed,x="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
    }
}