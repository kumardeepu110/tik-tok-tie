var option = "X"

function play(id){
    if(option == "O"){
         document.getElementById(id).innerHTML = "X"
         option = "X"
        //  option = ""
    }
    else {
        document.getElementById(id).innerHTML = "O"
        option = "O"
        // option = ""
    }
    check()  
    
    if (option == option){
        document.getElementById('1').innerHTML =option
        option = null
    } 
    else if (option == option){
        document.getElementById('1').innerHTML = option
        option = null
    } 
    else if (option == option){
        document.getElementById('2').innerHTML = option
        option = null
    } 
    else if (option == option){
        document.getElementById('2').innerHTML = option
        option = null
    } 


}

function check(){
    var input1 = document.getElementById('1').innerHTML
    var input2 = document.getElementById('2').innerHTML
    var input3 = document.getElementById('3').innerHTML
    var input4 = document.getElementById('4').innerHTML
    var input5 = document.getElementById('5').innerHTML
    var input6 = document.getElementById('6').innerHTML
    var input7 = document.getElementById('7').innerHTML
    var input8 = document.getElementById('8').innerHTML
    var input9 = document.getElementById('9').innerHTML

    if(input1 == "X" && input2 == "X" && input3 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input4 == "X" && input5 == "X" && input6 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input7 == "X" && input8 == "X" && input9 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input1 == "X" && input4 == "X" && input7 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input2 == "X" && input5 == "X" && input8 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input3 == "X" && input6 == "X" && input9 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input1 == "X" && input5 == "X" && input9 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input3 == "X" && input5 == "X" && input7 == "X")
        document.getElementById('message').innerHTML = "Player X Wins"

    else if(input1 == "O" && input2 == "O" && input3 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input4 == "O" && input5 == "O" && input6 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input7 == "O" && input8 == "O" && input9 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input1 == "O" && input4 == "O" && input7 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input2 == "O" && input5 == "O" && input8 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input3 == "O" && input6 == "O" && input9 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input1 == "O" && input5 == "O" && input9 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else if(input3 == "O" && input5 == "O" && input7 == "O")
        document.getElementById('message').innerHTML = "Player O Wins"

    else{

        if(input1 != "X" && input2 != "X" && input3 != "X")
        document.getElementById('message').innerHTML != ""

        else if(input4 != "X" && input5 != "X" && input6 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input7 != "X" && input8 != "X" && input9 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input1 != "X" && input4 != "X" && input7 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input2 != "X" && input5 != "X" && input8 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input3 != "X" && input6 != "X" && input9 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input1 != "X" && input5 != "X" && input9 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input3 != "X" && input5 != "X" && input7 != "X")
            document.getElementById('message').innerHTML != ""

        else if(input1 != "O" && input2 != "O" && input3 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input4 != "O" && input5 != "O" && input6 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input7 != "O" && input8 != "O" && input9 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input1 != "O" && input4 != "O" && input7 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input2 != "O" && input5 != "O" && input8 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input3 != "O" && input6 != "O" && input9 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input1 != "O" && input5 != "O" && input9 != "O")
            document.getElementById('message').innerHTML != ""

        else if(input3 != "O" && input5 != "O" && input7 != "O")
            document.getElementById('message').innerHTML = ""
        else{
            document.getElementById('message').innerHTML = "Match Tie"
        }
    }
}