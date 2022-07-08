$(function(){
  const width = 1200; // slider 크기
  let img_num = 0;  // 이미지 재생 변수
  const img_length = $('.sliders img').length;
  console.log(img_length);

  function playSlider (num) {
    // 위치조정 공식: width * 이미지 번호(0,1,2...)
    let x = -(width * num);
    
    $('.sliders').css({
      transform: `translateX(${x}px)`
    })
  }

  // 자동재생
  setInterval(function(){
    img_num++; // 다음 이미지 번호
    if(img_num > 2) img_num = 0;
    console.log(img_num);
    playSlider(img_num);
    showCounter();
  }, 4000);

  function showCounter() {
    $('.slider .counter .current').text(img_num + 1);
    $('.slider .counter .total').text(img_length);
  }

  showCounter();

});