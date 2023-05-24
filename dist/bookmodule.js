import { memoryInstance } from "./RepositoryContract.js";
import { Status } from "./enums.js";
function addNewBook(title, author, isbn) {
    const id = "id" + Math.random().toString(16).slice(5);
    memoryInstance.saveBook({
        title: title,
        author: author,
        ISBN: isbn,
        id: id,
        status: Status.AVAILABLE,
    });
}
function borrowBook(user, title) {
    const books = memoryInstance.booksCollection;
    if (!books.some((b) => b.title === title)) {
        console.log("Cannot find book in inventory.");
    }
    else {
        if (books.find((b) => b.status === Status.BORROWED)) {
            console.log("Book already borrowed.");
        }
        else {
            let resultBook = books.find((b) => b.title === title);
            memoryInstance.borrowBook(user, resultBook);
            console.log(resultBook.title +
                " book borrowed successfully. Book owner ID is " +
                resultBook.owner);
        }
    }
}
function returnBook(user, title) {
    const books = memoryInstance.booksCollection;
    if (!books.some((b) => b.title === title)) {
        console.log("Book doesn't belong to the inventory.");
    }
    else {
        let foundBook = books.find((b) => b.title === title);
        if (foundBook.status === Status.BORROWED) {
            if (foundBook.owner === user.id) {
                memoryInstance.returnBook(foundBook);
                console.log(`Book "${foundBook.title}" is successfully returned.`);
            }
            else {
                console.log(`Sorry book "${foundBook.title}" is not borrowed by you.`);
            }
        }
        else {
            console.log(`Sorry book "${foundBook.title}" is not borrowed.`);
        }
    }
}
export { addNewBook, borrowBook, returnBook };
