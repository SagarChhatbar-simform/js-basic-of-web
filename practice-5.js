class myclass{                //class
    constructor(question){
        this.question = question;
    }
    ask(quest){
        console.log(this.question,quest);
    }
}

var js1 = new myclass("sagar");
var js2 = new myclass("jack");

js1.ask("is that you?");
js2.ask("isn't here.");