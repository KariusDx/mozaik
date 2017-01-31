export const guessWSURL = (config = {}) => {
    //return 'ws://localhost:5000'

    let proto = 'ws'
    if (config.useWssConnection === true) {
        proto = 'wss'
    }

    let port = window.document.location.port
    if (config.wsPort !== undefined) {
        port = config.wsPort
    }

    let host = window.document.location.hostname
    if (config.apiHost) {
        host = config.apiHost
    }

    let wsUrl = `${proto}://${host}`
    if (port && port !== '') {
        wsUrl = `${wsUrl}:${port}`
    }

    return wsUrl
}
