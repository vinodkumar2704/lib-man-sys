import { memoryInstance } from "./RepositoryContract.js";
import { addNewBook, borrowBook, returnBook } from "./bookmodule.js";
import { userFind, userRegistration } from "./usermodule.js";
const books = memoryInstance.booksCollection;
function intialScreen() {
    let userInput = prompt("register - '0' or login - '1' or exit - '2' ?");
    while (userInput !== "0" && userInput !== "1" && userInput !== "2") {
        window.alert("Incorrect option!");
        userInput = prompt("register - '0' or login - '1' or exit - '2' ?");
    }
    let userName;
    switch (userInput) {
        case "0":
            while (!userName || userName === "") {
                userName = prompt("Enter user name:");
            }
            const uid = userRegistration(userName);
            console.log("User created with id:" + uid);
            intialScreen();
            break;
        case "1":
            userLogin();
            intialScreen();
            break;
        case "2":
            break;
    }
}
function userLogin() {
    let inputId = '';
    while (!inputId || inputId === '') {
        inputId = prompt('Enter user id: ');
    }
    let user = userFind(inputId);
    if (user !== undefined) {
        userAction(user);
    }
    else {
        console.log("User doesn't exist.");
    }
}
function userAction(user) {
    let option = prompt("Welcome " +
        user.name +
        ": See Inventory - '1' , Add new book - '2' , Borrow book - '3' , Return book - '4', Log out - '5' ");
    while (option !== null && !["1", "2", "3", "4", "5"].includes(option)) {
        alert("Incorrect option!");
        option = prompt("Welcome " +
            user.name +
            ": See Inventory - '1' , Add new book - '2' , Borrow book - '3' , Return book - '4', Log out - '5' ");
    }
    let title = "";
    switch (option) {
        case "1":
            memoryInstance.showBooks();
            userAction(user);
            break;
        case "2":
            let author, isbn = 0;
            while (!title || title == "" || books.some((b) => b.title === title)) {
                title = (prompt("Enter book title (should be new) :") || "")
                    .toLowerCase()
                    .replace(/\s/g, "");
            }
            while (!author || author == "") {
                author = prompt("Enter book author:");
            }
            while (!isbn || books.some((b) => b.ISBN === isbn)) {
                isbn = parseInt(prompt("Enter book isbn:"));
            }
            addNewBook(title, author, isbn);
            userAction(user);
            break;
        case "3":
            title = "";
            while (title == "") {
                title = (prompt("Enter book title:") || "")
                    .toLowerCase()
                    .replace(/\s/g, "");
            }
            borrowBook(user, title);
            userAction(user);
            break;
        case "4":
            title = "";
            while (title == "") {
                title = (prompt("Enter book title :") || "")
                    .toLowerCase()
                    .replace(/\s/g, "");
            }
            returnBook(user, title);
            userAction(user);
            break;
        case "5":
            break;
    }
}
intialScreen();
