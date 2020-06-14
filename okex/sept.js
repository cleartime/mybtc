import { listenKey } from './axios.js'
import { initWs } from './ws.js'
import config from './config.js'
export default {
  config,
  init: function(){
    listenKey(this.config.baseurl + this.config.listenKey)
    // initWs(this.config.basewsurl + this.config.ping)
  }
}
