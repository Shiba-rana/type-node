class Messenger {
    port: number;

    constructor(port: number) {
        this.port = port;
    }

    messagePrint() {
        return `Messenger is running on port ${this.port}`;
    }
}

export default Messenger;