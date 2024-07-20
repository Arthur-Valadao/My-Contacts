const ContactRepository = require ('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    // Listar todos os registros
    const contacts = ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    //obter UM registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete(){
    // deletar um registro
  }
}
module.exports = new ContactController();
