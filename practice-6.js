
class bookshelf {
    constructor() {
        this.favbook = [];
    }
    addfavbook(add) {
        if (!add.includes("great")) {
            this.favbook.push(add);
        }
    }
    printfav() {
        console.log(this.favbook.length);
        for (var i of this.favbook) {
            console.log(i);
        }
    }

}

var books = new bookshelf();
books.addfavbook("A song of ice and fire");
books.addfavbook("the great gatsy");
books.addfavbook("you don't know JS");
books.addfavbook("the crime & ounishment");
books.addfavbook("great ecpectation");


books.printfav();


