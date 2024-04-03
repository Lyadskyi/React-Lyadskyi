// src/components/FavouriteBooks.jsx

export default function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
}

//* Another variant *//

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// export default BookList;
