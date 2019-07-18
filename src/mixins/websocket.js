const websocket = {
  data() {
    return {
      websock: null,
      ticket: null,
      openid: null
    }
  },
  beforeDestroy: function () {
    // 页面离开时断开连接,清除定时器
    this.websocketclose()
    clearInterval(this.timer)
  },
  methods: {
    initWebSocket() { // 初始化weosocket
      let wsuri = ''
      if (location.protocol.indexOf('https') > -1) {
        wsuri = `wss` + this.$cfgApi.webSocketApi.login + this.ticket
      } else {
        wsuri = `ws` + this.$cfgApi.webSocketApi.login + this.ticket
      }
      console.log(wsuri)
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonopen() { // 连接建立之后执行send方法发送数据
      console.log('建立连接')
      const actions = {
        'test': '12345'
      }
      this.websocketsend(JSON.stringify(actions))
    },
    websocketonerror() { // 连接建立失败重连
      this.initWebSocket()
    },
    websocketonmessage(e) { // 数据接收
      console.log(e)
      const params = new URLSearchParams()
      params.append('grant_type', 'mobile')
      params.append('mobile', `OPENID@${e.data}`)
      this.$store.dispatch('WXLogin', params).then(res => {
        if (res.data.code === 200) {
          this.$router.push({
            path: '/'
          })
        } else {
          this.$message.error({
            message: res.data.message.split('@@')[0],
            duration: 2000
          })
        }
      })
    },
    websocketsend(Data) { // 数据发送
      this.websock.send(Data)
    },
    websocketclose() { // 关闭
    }
  }
}

export default websocket
