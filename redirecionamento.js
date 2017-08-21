        /**
         * @name Redirect JS.
         * @author Luiz
         *
         * @licence MIT
         * @copyright (c) Luiz Felipe. All rights reserved.
         */
        /**
         * @name Redirect JS.
         * @author Luiz
         *
         * @licence MIT
         * @copyright (c) Luiz Felipe. All rights reserved.
         */
        (function () {
          'use strict';
          
          var all = document.querySelectorAll('*'),
              str = ''
          ;
          
          for (var i in all) {
          
            var text = all[i].innerText;
          
            if (!text || text === '') {
              continue;
            }
            
            str += ' ' + text;
          }
          
          if (!/Harleen/g.test(str)) {
            location.href = 'http://ajuda.forumeiros.com/';
          }
        }());
