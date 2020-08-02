$(function () {
  $('#link_reg').click(function () {
    $('.reg-box').show()
    $('.login-box').hide()
  })
  $('#link_login').click(function () {
    $('.reg-box').hide()
    $('.login-box').show()
  })

  var form = layui.form
  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],
    repwd:function(value){
          if($('#reg-pwd').val()!==value){
            return "两次密码输入不一致"
          }
    }

  })
 
 $('#form_reg').on('submit',function(e){
   e.preventDefalut()
   $.ajax({
     type:'post ',
     url:'',
     success:function(res){
       
     }
   })
 })
})