import React from "react";

const ListContacts = props => {
  return (
    <ol className="contact-list">
      {this.contacts.map(contact => (
        <li key={contact.id} className="conact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
          />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button className="contact-remove">Remove</button>
        </li>
      ))}
    </ol>
  );
};

export default ListContacts;
