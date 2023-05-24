import { Status } from "./enums.js";

interface BookInterface {
  title: string;
  author: string;
  ISBN: number;
  id: string;
  owner?: string | null;
  status : Status;
}

interface UserInterface {
  name: string;
  id: string;
}


interface RepositoryContract {
  usersData: UserInterface[];
  booksCollection: BookInterface[];
  saveUser(obj: UserInterface): void;
  saveBook(obj: BookInterface): void;
  borrowBook(objA:UserInterface,objB:BookInterface):void;
  returnBook(obj:BookInterface):void;
}



export { RepositoryContract, BookInterface, UserInterface };
