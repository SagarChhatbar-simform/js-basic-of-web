
//implicit binding
var workshop = {
    myself: "sagar",
    ask(me){
        console.log(this.myself,me);
    },
};
workshop.ask("who am i?");


//ecplicit binding
function ask(me){
    console.log(this.myself,me);
}
function diffun(){
    var context = {
        myself:"sagar",
    }
    ask.call(context,"hey!");
}
diffun();