var Messagespace;
(function (Messagespace) {
    class Messenger {
        port;
        environment;
        constructor(port, environment) {
            this.port = port;
            this.environment = environment;
        }
        messagePrint() {
            return `Messenger is running on port ${this.port} in ${this.environment} environment`;
        }
    }
    Messagespace.Messenger = Messenger;
})(Messagespace || (Messagespace = {}));
export default Messagespace;
