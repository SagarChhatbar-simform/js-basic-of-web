var favbook = [];

function addfavbook(add){
    if(!add.includes("great")){
        favbook.push(add);
       
    }
}
 function printfav(){
     console.log(favbook.length);
     for(var i of favbook){
        console.log(i);
     }
 }




addfavbook("A song of ice and fire");
addfavbook("the great gatsy");
addfavbook("the crime & ounishment");
addfavbook("great ecpectation");
addfavbook("you don't know JS");
printfav();

