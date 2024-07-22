const ContactRepository = require ('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request,response) {
    //obter UM registro]
    const{id} = request.params;
    const contact = await ContactRepository.findById(id);
    if(!contact) {
      return response.status(404).json({error: 'User Not Found'});
    }

    response.json(contact);
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
