import './common';

const $script = require('scriptjs');

$script('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js', function() {
  hljs.initHighlightingOnLoad();
});
