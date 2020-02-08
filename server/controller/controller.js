
module.exports = {

  getInfo: (req, res) => {
    // res.status(200).send('IT WORKED!!!')
    const db = req.app.get('db');

    db.get_inventory().then(inventory => {
      res.status(200).send(inventory);
      console.log(inventory);
    });
  },

  postItem: (req,res) => {
    const db = req.app.get('db');
    const {name, price, image_url} = req.body; 
    // console.log('postItems',name, price, image_url);

    db.create_product([name, price, image_url]).then(product => {
        res.status(200).send(product)
    })
  },

  deleteItem: (req, res) => {
    const db =req.app.get('db');
    const {id} = req.params;
    // console.log(id);
    
    db.delete_product([id]).then(product => {
        res.status(200).send(product)
    })
  },

  updateItem: (req, res) => {
    const db =req.app.get('db');
    const{name} = req.body;
    const{id} = req.params; 
    db.edit_product([name,id]).then(product => {
        res.status(200).send(product)
    })
  }



};

