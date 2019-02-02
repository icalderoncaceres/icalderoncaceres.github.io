/* import actions */
import axios from 'axios';


class Server {

  /* firt entry */
  constructor() {
    this.req = axios.create({
      baseURL: global.conf.apiServer
    });
  }

}

//Export default
export default Server;
