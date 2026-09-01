// MathJax 3 全局配置（tex-svg 渲染器）
// 用法：在需要公式的页面 <head> 中先引入本文件，再引入
//   <script id="MathJax-script" src="../assets/vendor/mathjax/tex-svg.js" async></script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],
    tags: 'none'
  },
  options: {
    enableMenu: false,
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  startup: {
    typeset: true
  },
  svg: {
    fontCache: 'global'
  }
};
