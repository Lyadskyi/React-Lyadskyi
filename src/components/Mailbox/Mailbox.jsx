// src/components/Mailbox.jsx

// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <h1>Message</h1>
//       <p>Hello {username}</p>
//       {messages.length > 0 && (
//         <p>You have {messages.length} unread messages</p>
//       )}
//     </>
//   );
// };

export default function Mailbox({ name, unreadMessages }) {
  return (
    <>
      <p>Hello {name}</p>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
}
