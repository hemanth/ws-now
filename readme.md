# [ws-now](https://ws.now.sh)

> A simple echo websocket hoster on now.

## EndPoint

```sh
wss://ws.now.sh
```

## Usage

```js
// Something like

const echoSock = new WebSocket("wss://ws.now.sh");

echoSock.onmessage = msg => console.log(msg.data);

echoSock.onopen =  () => echoSock.send("hello");
```


## License

MIT © [Hemanth.HM](https://h3manth.com)
