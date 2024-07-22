const ContactRepository = require ('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request,response) {
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

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({error: 'User Not Found to Delete'});
    }

    await ContactRepository.delete(id);
    response.sendStatus(204);
  }
}
module.exports = new ContactController();
