require('@zeanium/core');
var node_path = require('path');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.example('development', function (config) {
    console.log(config);
    return {
        resolve: {
            alias: {
                "znui-react": node_path.resolve(__dirname, '../../znui-react'),
                "znui-react-input": node_path.resolve(__dirname, '../../znui-react-input'),
                "znui-react-loader": node_path.resolve(__dirname, '../../znui-react-loader'),
                "znui-react-popup": node_path.resolve(__dirname, '../../znui-react-popup')
            }
        }
    };
});