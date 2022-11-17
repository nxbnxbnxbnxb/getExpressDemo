var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express123' });
});
router.post('/auth',function(req,res){
  const {username,pwd} = req.body;
  console.log(req.body);
  console.log('用户名：'+username,'密码：'+pwd);
  res.send("this is system author is nxb!",username,pwd);
})
module.exports = router;
