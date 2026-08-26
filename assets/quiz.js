/* Quiz widget — shared component.
   Markup contract (see lessons/0001-*.html for a live example):

   <div class="quiz" data-quiz>
     <ol>
       <li data-q data-answer="B">
         <p class="q-text">问题</p>
         <div class="options">
           <button data-opt="A">选项 A</button>
           <button data-opt="B">选项 B</button>
           <button data-opt="C">选项 C</button>
           <button data-opt="D">选项 D</button>
         </div>
         <p data-feedback hidden>为什么对 / 错</p>
       </li>
     </ol>
     <p data-score hidden></p>
   </div>

   Behaviour: one click per question; correct option turns green,
   wrong pick turns red + correct one highlighted; feedback shown;
   final score printed when all questions answered.
*/
(function () {
  'use strict';
  document.querySelectorAll('[data-quiz]').forEach(function (quiz) {
    var items = quiz.querySelectorAll('[data-q]');
    var score = 0;
    var done = 0;
    var scoreOut = quiz.querySelector('[data-score]');

    quiz.querySelectorAll('button[data-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('[data-q]');
        if (!item || item.classList.contains('answered')) return;
        item.classList.add('answered');

        var answer = item.getAttribute('data-answer');
        if (btn.getAttribute('data-opt') === answer) {
          score += 1;
          btn.classList.add('right');
        } else {
          btn.classList.add('wrong');
          var rightBtn = item.querySelector('button[data-opt="' + answer + '"]');
          if (rightBtn) rightBtn.classList.add('right');
        }

        done += 1;
        var fb = item.querySelector('[data-feedback]');
        if (fb) fb.hidden = false;

        if (done === items.length && scoreOut) {
          scoreOut.hidden = false;
          var pass = score >= Math.ceil(items.length * 0.8);
          scoreOut.textContent = '得分：' + score + ' / ' + done +
            (pass ? ' — 很好，可以进入下一课喵！' : ' — 建议回顾上方知识点再答一遍。');
        }
      });
    });
  });
})();
