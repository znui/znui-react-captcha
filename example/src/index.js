require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var captcha = require('../../src/index');

znui.react.createApplication({
    render: <div className="components">
        <captcha.RandomCaptcha onChange={(event)=>console.log(event.checked)} />
    </div>
});