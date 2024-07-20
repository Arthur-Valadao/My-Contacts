const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Arthur',
    email: 'arthur@mail.com',
    phone: '123123123123',
    category_id: uuid(),
  },
]

class ContactRepository {
  findAll(){
    return contacts;
  }
}

module.exports = new ContactRepository();
