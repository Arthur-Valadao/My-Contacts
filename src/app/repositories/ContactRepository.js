const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Arthur',
    email: 'arthur@mail.com',
    phone: '123123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Avila',
    email: 'avila@mail.com',
    phone: '123123123123',
    category_id: v4(),
  },
]

class ContactRepository {
  findAll(){
    //não se usa Reject aqui pq a responsabilidade de
    // verificar a conexão é do Controller, o Repository APENAS conecta
    return new Promise((resolve) => {
      resolve(contacts)
    });
  }

  findById(id){
    return new Promise((resolve) => {
      resolve(contacts.find(contact => contact.id === id ))
    });
  }

  findByEmail(email){
    return new Promise((resolve) => {
      resolve(contacts.find(contact => contact.email === email ))
    });
  }

  delete(id){
    return new Promise((resolve) =>{
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  }

  create({ name, email, phone, category_id }){
    return new Promise((resolve) =>{
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    })
  }
}

module.exports = new ContactRepository();
