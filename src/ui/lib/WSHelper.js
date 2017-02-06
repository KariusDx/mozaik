export const guessWSURL = (config = {}) => {
    //return 'ws://localhost:5000'
    
    if(config.wsUrl !== undefined){
        return config.wsUrl;
    }
    
    let wsUrl = `${proto}://${host}`;
    let proto = 'ws'
    if (config.useWssConnection === true) {
        proto = 'wss'
    }

    let port = window.document.location.port
    if (config.wsPort !== undefined) {
        port = config.wsPort
    }

    let host = window.document.location.hostname
    if (config.proxyHost) {
        host = config.proxyHost
    }

    let wsUrl = `${proto}://${host}`
    if (port && port !== '') {
        wsUrl = `${wsUrl}:${port}`
    }

    return wsUrl
}
