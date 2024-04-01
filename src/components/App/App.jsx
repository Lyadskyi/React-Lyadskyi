// src/components/App.jsx

import Product from "../Product/Product";
import Mailbox from "../Mailbox/Mailbox";
import Card from "../Card/Card";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <hr /> <hr />
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
      <Mailbox name="King Artur" unreadMessages="Hello world!" />
      <hr /> <hr />
      {/* Колекції */}
      <div>
        {[1, 2, 3].map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <hr /> <hr />
      {/* Властивість props.children */}
      <Card text="Message as a text prop WITH MY REMARKS" />
      {/* Використання */}
      <Card>Text between opening and closing tag</Card>
      <hr /> <hr />
    </>
  );
}
