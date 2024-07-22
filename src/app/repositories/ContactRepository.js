const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Arthur',
    email: 'arthur@mail.com',
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
}

module.exports = new ContactRepository();
