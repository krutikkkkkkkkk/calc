function reset(){
    history.go(0)
}
function solveEqn(clicked_id){
    let eqn = clicked_id;
    let input = document.getElementById("eqn");

    if(eqn == "point"){
        input.value += "."
    }
    else if(eqn == "plus"){
        input.value += "+"
    }
    else if(eqn == "sub"){
        input.value += "-"
    }
    else if(eqn == "multiply"){
        input.value += "*"
    }
    else if(eqn == "div"){
        input.value += "/"
    }
    else if(eqn == "modulus"){
        input.value += "%"
    }
    else if(eqn == "equal"){
        input.value = eval(input.value)
    }
    else if(eqn == "reset"){
        reset()
    }
    else {
        input.value += eqn;
    }

}