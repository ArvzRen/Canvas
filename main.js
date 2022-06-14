var mouseEvent = "empty";


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e){
        //Primer función
    }

    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e){
        //Segunda función
    }

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e){
        //Tercer función
    }

    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e){
       //Cuarta función
    }


function clearArea() {
    //Quinta función
}
