var counter = 1;
var color = "";
var lider = "";
var clickHandler = ("ontouchstart" in window ? "touchend" : "click")
        $(document).ready(function() {

          var erroEle = $('.error-message'),
            focusInput = $('.questions').find('.active');

          $('.navigation a').click(function() {
            nextMaster('navi');

            var thisInput = $('#' + $(this).attr('data-ref'));
            $('.active').removeClass('active');
            thisInput.focus().addClass('active')
            thisInput.closest('li').animate({
              marginTop: '0px',
              opacity: 1
            }, 200);
            thisInput.closest('li').prevAll('li').animate({
                marginTop: '-150px',
                opacity: 0
              }, 200)
              //                     .AddClass('done');

            thisInput.closest('li').nextAll('li').animate({
                marginTop: '150px',
                opacity: 0
              }, 200)
              //                    .RemoveClass('done');
            errorMessage(erroEle, '', 'hidden', 0);

          });


          $(document).keypress(function(event) {
            if (event.which == 13) {
              nextMaster('keypress');
              event.preventDefault();
            }
/*
            $('#next-page').click(function() {
              console.log('clic next');
              var focusInput = $('.questions').find('.active');
              nextMaster('nextpage');

            })
*/
          });

          $('#next-page').on('mousedown touchstart',function(){
            console.log('clic next');
            var focusInput = $('.questions').find('.active');
            nextMaster('nextpage');
          });

          function nextMaster(type) {
            
            color = $('#uname').val();
            lider = $('#name').val();
            var focusInput = $('.questions').find('.active');
            if (focusInput.val() != '') {
              console.log('if val not empty '+type);
              if ((focusInput.attr('name') == 'name' || focusInput.attr('name') == 'username') && focusInput.val().length < 2) {
                errorMessage(erroEle, "isn't your " + focusInput.attr('name') + " bit small. ", 'visible', 1);
              } else if (focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) {
                errorMessage(erroEle, "It doesn't look like a " + focusInput.attr('name'), 'visible', 1);
              } else if (focusInput.attr('name') == 'phone' && !validatePhone(focusInput.val())) {
                errorMessage(erroEle, "It doesn't look like a " + focusInput.attr('name'), 'visible', 1);
              } else {
                //console.log ("type "+focusInput);
                if (type != 'navi') showLi(focusInput);
                /*$('#next-page').css('opacity', 0);/*/
                errorMessage(erroEle, '', 'hidden', 0);
              }
            } else if (type == 'keypress') {
              //console.log('if kkeypress');
              errorMessage(erroEle, 'please enter your ' + focusInput.attr('name'), 'visible', 1);
            }
            //console.log('fin');
          }
/*
          $("input[type='text']").keyup(function(event) {
            var focusInput = $(this);
            if (focusInput.val().length > 1) {
              if ((focusInput.attr('name') == 'email' && !validateEmail(focusInput.val())) ||
                (focusInput.attr('name') == 'phone' && !validatePhone(focusInput.val()))) {
                $('#next-page').css('opacity', 0);
              } else {
                $('#next-page').css('opacity', 1);
              }

            } else {
              $('#next-page').css('opacity', 0);
            }
          });
*/
          $("#password").keyup(function(event) {
            var focusInput = $(this);
            $("#viewpswd").val(focusInput.val());
            if (focusInput.val().length > 1) {
              $('#next-page').css('opacity', 1);
            }
          });

          $('#signup').click(function() {
            $('.navigation').fadeOut(400).css({
              'display': 'none'
            });
            $('#sign-form').fadeOut(400).css({
              'display': 'none'
            });
            $(this).fadeOut(400).css({
              'display': 'none'
            });
            $('#wf').animate({
              opacity: 1,
              marginTop: '1em'
            }, 500).css({
              'display': 'block'
            });
          });

          $('#show-pwd').mousedown(function() {
            $(this).toggleClass('view').toggleClass('hide');
            $('#password').css('opacity', 0);
            $('#viewpswd').css('opacity', 1);
          }).mouseup(function() {
            $(this).toggleClass('view').toggleClass('hide');
            $('#password').css('opacity', 1);
            $('#viewpswd').css('opacity', 0);
          });

        });

        function showLi(focusInput) {

     

          
          var li = document.getElementById("uno").style.opacity;
          var li2 = document.getElementById("dos").style.opacity;
          console.log("li "+li+" `/ l2"+li2);
          if (li == "1") {
          
            
            document.getElementById("uno").animate({
              marginTop: '-150px',
              opacity: 0
            }, 200);

            document.getElementById("dos").animate({
              marginTop: '0px',
              opacity: 1
            }, 200);

            
            var width = $(window).width()
            console.log ('width:'+width);
            if (width <= 980) {
              console.log('mobile');
              document.getElementById("uno").style.opacity =0;
              document.getElementById("uno").style.marginTop =  '-150px';

              document.getElementById("dos").style.opacity =1;
              document.getElementById("dos").style.marginTop =  '0px';
              document.getElementById("dos-texto").style.marginTop =  '-375px';

              $('#lider').before(lider.toUpperCase()+" : ");
              $('#color').after("Líder "+color);
              
              document.getElementById("fondo").style.padding =  '15em 2em';
            }
            else{
              console.log('pc');
              document.getElementById("uno").style.opacity =0;
              document.getElementById("uno").style.marginTop =  '-150px';

              document.getElementById("dos").style.opacity =1;
              document.getElementById("dos").style.marginTop =  '0px';
              document.getElementById("dos-texto").style.marginTop =  '-220px';

              $('#lider').before(lider.toUpperCase()+" : ");
              $('#color').after("Líder "+color);
              
              document.getElementById("fondo").style.padding =  '10em 2em';
              document.getElementById("fondo").focus();
            }

          }
          else if (li2 == "1" && li == "0") {

          //  console.log("l2 "+li2+ " counter "+counter);
            document.getElementById("dos").animate({
              marginTop: '-150px',
              opacity: 0
            }, 200);
            document.getElementById("dos").style.opacity =0;
            document.getElementById("dos").style.marginTop =  '-150px';
          
            document.getElementById("wf").animate({
              marginTop: '0px',
              opacity: 1
            }, 200);
  
            document.getElementById("wf").style.opacity =1;
            document.getElementById("wf").style.display = 'block';
            $('#next-page').css('opacity', 0);
          }
          else {
            focusInput.closest('li').animate({
              marginTop: '-150px',
              opacity: 0
            }, 200);

            focusInput.removeClass('active');
            
         //   alert('furulo');
  
            var nextli = focusInput.closest('li').next('li');
  
            nextli.animate({
              marginTop: '0px',
              opacity: 1
            }, 200);
  
            nextli.find('input').focus().addClass('active');

          }
          counter++;
          /*
          if (focusInput.attr('id') == 'viewpswd') {
            $("[data-ref='" + focusInput.attr('id') + "']")
              .addClass('done').html('password');
            //                    .html(Array(focusInput.val().length+1).join("*"));
          } else {
            $("[data-ref='" + focusInput.attr('id') + "']").addClass('done').html(focusInput.val());
          }
          */


        }

        function errorMessage(textmeg, appendString, visib, opaci) {
          textmeg.css({
            visibility: visib
          }).animate({
            opacity: opaci
          }).html(appendString)
        }

        function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }

        function validatePhone(phone) {
          var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
          return re.test(phone);
        }