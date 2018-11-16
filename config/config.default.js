

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542346743523_9458';

  // add your config here
  config.middleware = [];
  //多模板引擎配置
  config.view = {
    mapping: {
      '.html': 'ejs',

      '.nj': 'nunjucks'
    },
  };

  return config;
};
