namespace Messagespace {
    export type Environment = "development" | "production" | "test";
    
    export class Messenger {
        port: number;
        environment: Environment;
    
        constructor(port: number, environment: Environment) {
            this.port = port;
            this.environment = environment;
        }
    
        messagePrint() {
            return `Messenger is running on port ${this.port} in ${this.environment} environment`;
        }
    }
    
    
}

export default Messagespace;