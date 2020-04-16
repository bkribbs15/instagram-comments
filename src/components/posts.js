import React from 'react'

    const Posts = ({ contacts }) => {
      return (
        <div>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Posts