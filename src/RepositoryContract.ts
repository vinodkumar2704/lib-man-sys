
import { Status } from "./enums.js";

import { BookInterface,UserInterface,RepositoryContract} from "./types.js";

class InMemoryRepository implements RepositoryContract{

    usersData:UserInterface[] = (typeof window !== 'undefined') ? ( localStorage.getItem("userslist")
    ? JSON.parse(localStorage.getItem("userslist") || "")
    : [
        {
          name: "Vinod",
          id: "1",
        },
        {
          name: "Ganesh",
          id: "2",
        },
        {
          name: "Kumar",
          id: "3",
        },
      ]):[];

    booksCollection:BookInterface[] = (typeof window !== 'undefined') ? ( localStorage.getItem("bookslist")
    ? JSON.parse(localStorage.getItem("bookslist") || "")
    : [
        {
          title: "math",
          author: "verma",
          ISBN: 1234,
          id: "1",
          owner: null,
          status: Status.AVAILABLE,
        },
        {
          title: "physics",
          author: "light",
          ISBN: 1235,
          id: "2",
          owner: null,
          status: Status.AVAILABLE,
        },
        {
          title: "coding",
          author: "alex",
          ISBN: 1236,
          id: "3",
          owner: null,
          status: Status.AVAILABLE,
        },
      ]):[];
    
    
    saveUser(obj:UserInterface): void {
        this.usersData.push(obj);
        localStorage.setItem("userslist", JSON.stringify(this.usersData));
        console.log("New user added.");
        alert("Your user id is " + obj.id + ". Your username is " + obj.name);
    }
    saveBook(obj:BookInterface):void{
        this.booksCollection.push(obj);
        localStorage.setItem("bookslist", JSON.stringify(this.booksCollection));
    }

    showBooks(){
        console.log(this.booksCollection);
    }

    borrowBook(u:UserInterface,b:BookInterface){
      b.owner = u.id;
      b.status = Status.BORROWED;
    }

    returnBook(b:BookInterface){
      b.owner = null;
      b.status = Status.AVAILABLE;
    }

}



// class UserDomain {
//     name: string;
//     id: string;
//   }


export const memoryInstance = new InMemoryRepository();