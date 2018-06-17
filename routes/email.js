var express = require('express');
var email = require('nodemailer');
var router = express.Router();

var emailOptions = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'docucaocuong.it@gmail.com',
        pass: 'Docucaocuong@123'
    }
  };
  
  var transporter = email.createTransport(emailOptions);
  
  transporter.verify(function(err,sucess) {
    if (err) {
        console.log(err);
    } else {
        console.log('Kết nối email thành công!');
    }
  });
  
  router.post('/sendEmail',function(req,res) {
    var info = req.body[0];
    var infoMailCustomer = {
    from: 'Đồ cũ Cao Cường <docucaocuong.it@gmail.com>',
    to: info.guestInfor.email,
    subject: 'Xác nhận đơn hàng',
    html: '<h1>Chào <font color="red">' + info.guestInfor.name +'</font>,</h1><br><h3>Bạn đã đặt thành công đơn hàng: <font color="blue">' + info._id +'</font></h3><br><p>Xin hãy chờ chúng tôi xử lý đơn hàng. </p><br><p>Chúc bạn một ngày vui vẻ!</p><p>Cửa hàng đồ cũ Cao Cường,</p>'
  };
  var infoMailOwner = {
    from: 'Đồ cũ Cao Cường <docucaocuong.it@gmail.com>',
    to: info.guestInfor.email,
    subject: 'Xác nhận đơn hàng',
    html: '<h1>Chào <font color="red">Lâm</font>,</h1><br><h3>Có người đã đặt thành công đơn hàng: <font color="blue">' + info._id +'</font></h3><br><p>Xin hãy xử lý đơn hàng. </p><br><p>Chúc cửa hàng phát đạt!</p><p>Cửa hàng đồ cũ Cao Cường,</p>'
  };
    transporter.sendMail(infoMailCustomer, function(err, info) {
    if(err) {
        console.log(err);
    } else {
        console.log('Gửi mail thành công!');
    }
    });
    transporter.sendMail(infoMailOwner, function(err, info) {
    if(err) {
        console.log(err);
    } else {
        console.log('Gửi mail thành công tới chủ hàng!');
    }
    });
    res.send(req.body);
  });

module.exports = router;