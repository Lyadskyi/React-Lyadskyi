// src/components/App.jsx

import Product from "../Product/Product";
import Mailbox from "../Mailbox/Mailbox";
import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import BookList from "../BookList/BookList";

// Import files.json
import favouriteBooks from "../../favouriteBooks.json";

export default function App() {
  return (
    <>
      <hr /> <hr />
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://www.loveandoliveoil.com/wp-content/uploads/2020/11/steak-street-tacos-FEAT-1200x800.jpg"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Fish and meat"
        imgUrl="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/iStock-1165495226-1200x628.jpg"
        price={29.84}
      />
      <hr /> <hr />
      <h1>Message</h1>
      <Mailbox name="King Artur" unreadMessages="Hello world!" />
      <hr /> <hr />
      {/* Колекції */}
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <hr /> <hr />
      {/* Властивість props.children */}
      <Card text="Message as a text prop WITH MY REMARKS" />
      {/* Використання компонента <Card> */}
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
      <hr /> <hr />
      {/* Вбудовані стилі <Alert> */}
      {/* <Alert /> */}
      {/* <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert> */}
      <h1>Dynamic styles</h1>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <hr /> <hr />
    </>
  );
}
