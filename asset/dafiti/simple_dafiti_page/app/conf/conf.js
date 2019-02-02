/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {}
}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://127.0.0.1';
conf['dev']['port'] = '3100';
conf['dev']['apiServer'] = 'http://662b8b39.ngrok.io';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaApi'] = 'http://127.0.0.1:3100/dist/';
/* firebase */
conf['dev']['fireConnect'] = {
  apiKey: 'AIzaSyApg5oLg5pspItdyh5lB-eh7EUtfcS9UFQ',
  authDomain: 'chat-bot-stg.firebaseapp.com',
  databaseURL: 'https://chat-bot-stg.firebaseio.com',
  projectId: 'chat-bot-stg'
};

/* Enviroment on production */
conf['prod']['base_url'] = 'http://localhost';
conf['prod']['port'] = '3100';
conf['prod']['apiServer'] = '';
conf['prod']['fileName'] = 'bundle';
conf['prod']['minify'] = true;

/* Export constants */
module.exports = conf[global.enviroment];
