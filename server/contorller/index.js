const { User } = require('../models');


module.exports = {
  login: {
    post: async (req,res) => {
      const {id,pwd} = req.body;
      // console.log(req.body)
      const result = User.findAll()
      // const temp = await Model.findOne({ where: { userId: id}})
      // res.end();
      res.redirect('http://localhost:3000/')
    },
  }
};