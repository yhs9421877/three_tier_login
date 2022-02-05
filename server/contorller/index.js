const { User } = require('../models');


module.exports = {
  login: {
    post: async (req,res) => {
      const {id,pwd} = req.body;
      console.log(req.body);
      try{
        const result = User.findAll();
       } catch(err) {
        console.error("error: ", err);
       }
      // const temp = await Model.findOne({ where: { userId: id}})
      // res.end();
      res.redirect('http://localhost:3000/')
    },
  }
};