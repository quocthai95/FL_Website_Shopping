import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as fromAppReducer from '../store/app.reducer';
import * as ProductActions from '../store/product.action';
import { Injectable } from '@angular/core';


declare let jQuery: any;
export const DOMAINAPI = '';

export function showLoadingScreen() {
  jQuery('body').append('<div id="loader"><div class="loader"></div></div>');
  jQuery('body').css('overflow', 'hidden');
}

export function hideLoadingScreen() {
  jQuery('#loader').remove();
  jQuery('body').css('overflow', 'auto');
}

@Injectable()
export class InitService {

  constructor(private httpClient: HttpClient, private store: Store<fromAppReducer.AppState>) {
    this.store.dispatch(new ProductActions.GetDataFromServer());
  }

  change_Unicode(alias) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\'|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    return str;
}

  setupStuff() {
    (function ($) {
      $(document).ready(function() {
        if ($.cookie('theme_csspath')) {
          $('link#theme-stylesheet').attr('href', $.cookie('theme_csspath'));
      }
      $(function() {
          animations();
          productDetailGallery(0);
          utils();
      });
      $(window).on('load', function() {
          $(this).alignElementsSameHeight();
      });
      $(window).resize(function() {
          setTimeout(function() {
        $(this).alignElementsSameHeight();
          }, 150);
      });
      /* product detail gallery */
      function productDetailGallery(confDetailSwitch) {
          $('.thumb:first').addClass('active');
          // let timer = setInterval(autoSwitch, confDetailSwitch);
          $('.thumb').click(function(e) {
        switchImage($(this));
        // clearInterval(timer);
        // timer = setInterval(autoSwitch, confDetailSwitch);
        e.preventDefault();
          }
          );
          $('#mainImage').hover(function() {
        // clearInterval(timer);
          }, function() {
        // timer = setInterval(autoSwitch, confDetailSwitch);
          });
          function autoSwitch() {
        let nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb');
        if (nextThumb.length === 0) {
            nextThumb = $('.thumb:first');
        }
        switchImage(nextThumb);
          }
          function switchImage(thumb) {
        $('.thumb').removeClass('active');
        const bigUrl = thumb.attr('href');
        thumb.addClass('active');
        $('#mainImage img').attr('src', bigUrl);
          }
      }
      function utils() {
          /* click on the box activates the radio */
          $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function(e) {
        const radio = $(this).find(':radio');
        radio.prop('checked', true);
          });
          /* click on the box activates the link in it */
          $('.box.clickable').on('click', function(e) {
        window.location.href = $(this).find('a').attr('href');
          });
          /* external links in new window*/
          $('.external').on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr('href'));
          });
          /* animated scrolling */
          $('.scroll-to, .scroll-to-top').click(function(event) {
        const full_url = this.href;
        const parts = full_url.split('#');
        if (parts.length > 1) {
            scrollTo(full_url);
            event.preventDefault();
        }
          });
          function scrollTo(full_url) {
        const parts = full_url.split('#');
        const trgt = parts[1];
        const target_offset = $('#' + trgt).offset();
        let target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }
        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
          }
      }
      /* animations */
      function animations() {
          let delayTime = 0;
          $('[data-animate]').css({opacity: '0'});
          $('[data-animate]').waypoint(function(direction) {
        delayTime += 150;
        $(this).delay(delayTime).queue(function(next) {
            $(this).toggleClass('animated');
            $(this).toggleClass($(this).data('animate'));
            delayTime = 0;
            next();
            // $(this).removeClass('animated');
            // $(this).toggleClass($(this).data('animate'));
        });
          },
            {
          offset: '90%',
          triggerOnce: true
            });
          $('[data-animate-hover]').hover(function() {
        $(this).css({opacity: 1});
        $(this).addClass('animated');
        $(this).removeClass($(this).data('animate'));
        $(this).addClass($(this).data('animate-hover'));
          }, function() {
        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-hover'));
          });
      }
      $.fn.alignElementsSameHeight = function() {
          $('.same-height-row').each(function() {
        let maxHeight = 0;
        let children = $(this).find('.same-height');
        children.height('auto');
        if ($(document).width() > 768) {
            children.each(function() {
          if ($(this).innerHeight() > maxHeight) {
              maxHeight = $(this).innerHeight();
          }
            });
            children.innerHeight(maxHeight);
        }
        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function() {
            if ($(this).innerHeight() > maxHeight) {
          maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
          });
      };
      });
    })(jQuery);
  }

}
