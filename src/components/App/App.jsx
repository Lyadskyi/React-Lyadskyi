// src/components/App.jsx

// Import Components
import Product from "../Product/Product";
import Mailbox from "../Mailbox/Mailbox";
import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import BookList from "../BookList/BookList";
import Button from "../Button/Button";
import LoginButton from "../LoginButton/LoginButton";
import FollowButton from "../FollowButton/FollowButton";

// Import assets
import HiUser from "../HiUser/HiUser";
import naturePhoto from "../../assets/nature.jpg";

// Import files.json
import favouriteBooks from "../../favouriteBooks.json";

export default function App() {
  return (
    <>
      <hr /> <hr />
      <h2>Best selling</h2>
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
      <h2>Message</h2>
      <Mailbox name="King Artur" unreadMessages="Hello world!" />
      <hr /> <hr />
      {/* Колекції */}
      <h2>Books of the week</h2>
      <BookList books={favouriteBooks} />
      <hr /> <hr />
      {/* Властивість props.children */}
      <Card text="Message as a text prop WITH MY REMARKS" />
      {/* Використання компонента <Card> */}
      <Card>
        <h2>Card title</h2>
        <p>Text between opening and closing tag</p>
      </Card>
      <hr /> <hr />
      {/* Вбудовані стилі <Alert> */}
      {/* <Alert /> */}
      {/* <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert> */}
      <h2>Dynamic styles</h2>
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
      <h2>Button</h2>
      <Button />
      <LoginButton />
      <FollowButton />
      <hr /> <hr />
      <h2>Photo nature</h2>
      <img src={naturePhoto} alt="Nature" width="500" />
      <hr />
      <img
        src="https://assets-global.website-files.com/5fe0d678b18d7e19e32c3389/5fe47fac541e6e361f91eb6d_hero.jpg"
        alt="Hero"
        width="500"
      />
      <hr /> <hr />
      <HiUser name="GitHub & Businessman" />
      <hr /> <hr />
    </>
  );
}
