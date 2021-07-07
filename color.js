var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
  }
}
var Links = {
  setColor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i < alist.length){
      //     alist[i].style.color = color;
      //     i = i + 1;
      //   }
      $('a').css('color', color);
      }
    }
function darkModeSwitch(self){
  var target = document.querySelector('body');
  if(self.value === '다크모드ON'){
    Body.setBackgroundColor('black');
    Body.setColor('white')
    self.value ='다크모드OFF';
    alert('다크모드를 활성화 했습니다.')
    Links.setColor('white');
  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '다크모드ON';
    alert('다크모드를 취소 했습니다.')
    Links.setColor('black');
    }
  }
