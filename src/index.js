const $ = require('jquery');
require('./style.css');
$('#target').html('Hello Sathya Vakacharla');

function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../icons/', true, /\.svg$/));
