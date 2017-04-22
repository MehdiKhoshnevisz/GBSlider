(function() {

  // constructor function
  var GB_Horizontal = function(slidername) {
    this.slidername = slidername;
    this.element();
    this.translate();
    this.bindEvents();
    this.responsive();
  }



  // element
  GB_Horizontal.prototype.element = function() {
    this.$item = $(this.slidername + ' .item-slider');
    this.twice = false;
    this.count = 1;
  }




  // translate
  GB_Horizontal.prototype.translate = function() {
    this.x = this.$item.width();
    this.y = this.x;
    this.twidth = [];

    for (var i = 1; i <= this.$item.length; i++) {
      this.$item.eq(i).css({
        'left': this.x
      });

      this.x += this.y;
      this.twidth[i - 1] = this.$item.eq(i - 1).position().left;
    }
  }



  // bindEvents
  GB_Horizontal.prototype.bindEvents = function() {
    $(this.slidername + ' .next').click(this.nextEvent.bind(this));
    $(this.slidername + ' .prev').click(this.prevEvent.bind(this));
    $(this.slidername + ' .first').click(this.firstEvent.bind(this));
  }



  // nextEvent
  GB_Horizontal.prototype.nextEvent = function() {
    if (this.count >= this.$item.length - (this.part - 1)) {
      this.count = this.$item.length - (this.part - 1);
      $(this.slidername + ' .next').prop("disabled", true);
    } else {
      this.count++;
      $(this.slidername + ' .dot').removeClass('active');
      $(this.slidername + ' .dot').eq(this.count - 1).addClass('active');
      $(this.slidername + ' .prev').prop("disabled", false);
      $(this.slidername + ' .content').css({
        'left': -this.twidth[this.count - 1]
      });
    }
  }



  // prevEvent
  GB_Horizontal.prototype.prevEvent = function() {

    if (this.count <= 1) {
      this.count = 1;
      $(this.slidername + ' .prev').prop("disabled", true);
    } else {
      this.count--;
      $(this.slidername + ' .dot').removeClass('active');
      $(this.slidername + ' .dot').eq(this.count - 1).addClass('active');
      $(this.slidername + ' .next').prop("disabled", false);

      $(this.slidername + ' .content').css({
        'left': -this.twidth[this.count - 1]
      });
    }
  }



  // firstEvent
  GB_Horizontal.prototype.firstEvent = function() {

    this.count = 1;
    $(this.slidername + ' .dot').removeClass('active');
    $(this.slidername + ' .dot').eq(0).addClass('active');
    $(this.slidername + ' .content').css({
      'left': 0
    });
    $(this.slidername + ' .next').prop("disabled", false);
    $(this.slidername + ' .prev').prop("disabled", false);
  }



  // setParts
  GB_Horizontal.prototype.setParts = function(int) {
    this.part = int;
    this.limit = $(this.$item).eq(this.$item.length - this.part).position().left;
    this.limit *= -1;
  }



  // setDots
  GB_Horizontal.prototype.setDots = function() {
    var This = this;

    This.dot_numbers = This.$item.length - This.part;

    for (var i = 0; i <= This.dot_numbers; i++) {
      $(This.slidername + ' .dots').append('<span class="dot"></span>');
    }
    $(This.slidername + ' .dot').first().addClass('active');

    $(This.slidername + ' .dot').click(function(e) {
      This.twice = true;
      var index = $(e.target).index();
      This.count = index + 1;
      $(This.slidername + ' .dot').removeClass('active');

      $(e.target).addClass('active');

      $(This.slidername + ' .content').css({
        'left': -This.twidth[index]
      });

    });

  }

  // timer
  GB_Horizontal.prototype.timer = function(second) {

    if (second == 0) {
      return false;
    }
    var c = 0;
    var t = setInterval(() => {
      c++;
      if (this.twice) {
        c = this.count - 1;
        clearInterval(t);
      }

      if ($(this.slidername + ' .content').position().left <= (this.limit)) {
        $(this.slidername + ' .content').css({
          'left': 0
        });
        c = 0;
        $(this.slidername + ' .dot').removeClass('active');
        $(this.slidername + ' .dot').eq(c).addClass('active');
        return 0;
      } else {

        $(this.slidername + ' .dot').removeClass('active');
        $(this.slidername + ' .dot').eq(c).addClass('active');

        $(this.slidername + ' .content').css({
          'left': -this.twidth[c]
        });
      }
    }, second);

  }


  // responsive
  GB_Horizontal.prototype.responsive = function() {

    if ( $(window).width() <= 1080) {
      this.part = this.$item.length + 1;
        this.setDots();
    }
     if ($(window).width() <= 768) {
       this.part = this.$item.length ;
         this.setDots();
    }
     if ($(window).width() <= 500) {
       this.part = this.$item.length ;
      this.setDots();
    }
  }



  window.GB_Horizontal = GB_Horizontal;


})()
