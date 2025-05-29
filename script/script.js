$(document).ready(function(){

// menu_bar 배경색 변경 --------------------------------------------
    $('.list_box li').hover(
      function () {
        $(this).closest('.menu_bar').css('background-color', '#00704A');
      },
      function () {
        $(this).closest('.menu_bar').css('background-color', '');
      }
    );

    $('.sub_list_box').on('mouseenter', function () {
      $(this).closest('.menu_bar').css('background-color', '#00704A');
    });

    $('.sub_list_box').on('mouseleave', function () {
      $(this).closest('.menu_bar').css('background-color', '');
    });


// menu_bar 텍스트, 아이콘 색 변경 -----------------------------
    $('.list_box').hover(
      function () {
        // 글자 색 변경
        $('.list_box li').css('color', '#fff');

        // 아이콘 색 변경
        $('.icon_box svg').css('color', '#fff');
      },
      
      function () {
        // 글자 색 원래대로
        $('.list_box li').css('color', '');

        // 아이콘 색 원래대로
      $('.icon_box svg').css('color', '');
      }
    );

    const $header = $('header.menu_bar');


// 메뉴 항목 hover 시 상태 변경 --------------------------------------
    $('.list_box li').hover(
      function () {
        $header.addClass('active');
      },
      function () {
      }
    );

    // sub_list_box hover 유지
    $('.sub_list_box').on('mouseenter', function () {
      $header.addClass('active');
    });

    // header hover 해제
    $header.on('mouseleave', function () {
      $header.removeClass('active');
    });

    // after 별모양 유지
    $('.list_box ul > li').hover(function(){
      $(this).addClass('show');
    }, function(){
      if (!$('.sub_list_box:hover').length) {
        $(this).removeClass('show');
      }
    });

    $('.sub_list_box').mouseleave(function(){
      $('.list_box ul > li').removeClass('show');
    });


// sub_menu 슬라이드 -------------------------------------------------
    const $menuItems = $('.list_box ul li');
    const $subBoxes = $('.sub_list_box');

    $menuItems.each(function (index) {
      $(this).on('mouseenter', function () {
        $subBoxes.hide();
        $('.sub_' + (index + 1)).stop(true, true).slideDown(300);
      });
    });

    // 메뉴 벗어나면 원래대로
    $('.menu_bar').on('mouseleave', function () {
      $subBoxes.stop(true, true).slideUp(400);
    });

    // sub_list_box hover 유지
    $('.sub_list_box').on('mouseenter', function () {
      $(this).stop(true, true).show();
    }).on('mouseleave', function () {
      $(this).stop(true, true).slideUp(300);
    });


// banner 이미지 스와이퍼 슬라이드 ------------------------------------
    var swiper = new Swiper(".main_banner", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".banner_next",
            prevEl: ".banner_prev"
        }
    });


// notice 공지사항 텍스트 슬라이드 ---------------------------------
    const $slide = $('.notice_slide');
    const $items = $slide.find('a');
    const itemHeight = 20;
    const delay = 2000;
    let currentIndex = 0;

    // 무한 루프
    const $firstClone = $items.eq(0).clone();
    $slide.append($firstClone);

    function slideUp() {
      currentIndex++;
      $slide.css({
        transition: 'transform 0.5s ease',
        transform: `translateY(-${itemHeight * currentIndex}px)`
      });

      if (currentIndex === $items.length) {
        setTimeout(function () {
          $slide.css({
            transition: 'none',
            transform: 'translateY(0)'
          });
          currentIndex = 0;
        }, 500); // 리셋
      }
    }

    setInterval(slideUp, delay + 500); // 2.5초마다 실행


// pick안에 라인 애니메이션 ----------------------------------------
    // function checkLineVisibility() {
    //   $('.pick_line').each(function () {
    //     const $line = $(this);
    //     const lineTop = $line.offset().top;
    //     const lineBottom = lineTop + $line.outerHeight();
    //     const winTop = $(window).scrollTop();
    //     const winBottom = winTop + $(window).height();

    //     // 화면에 보이는 경우
    //     if (lineBottom > winTop + $(window).height() * 0.2 &&
    //         lineTop < winBottom - $(window).height() * 0.2) {
    //       $line.addClass('animate-in').removeClass('animate-out');
    //     } else {
    //       $line.removeClass('animate-in').addClass('animate-out');
    //     }
    //   });
    // }

    // // 초기 체크 + 스크롤 시 체크
    // checkLineVisibility();
    // $(window).on('scroll resize', checkLineVisibility);
});