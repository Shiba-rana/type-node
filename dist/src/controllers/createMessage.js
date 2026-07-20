class Messenger {
    port;
    constructor(port) {
        this.port = port;
    }
    messagePrint() {
        return `Messenger is running on port ${this.port}`;
    }
}
export default Messenger;
