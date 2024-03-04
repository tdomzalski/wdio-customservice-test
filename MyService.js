export default class MyService {
    constructor (serviceOptions, capabilities, config) {
        console.log('MyService constructor', serviceOptions);
        this.options = serviceOptions;
    }

    async before(config, capabilities, browser) {
        console.log('MyService before');
        this.browser = browser;
    }

    async onPrepare(config, capabilities) {
        console.log('MyService onPrepare');
    }

    onComplete(exitCode, config, capabilities) {
        console.log('MyService onComplete');
    }
}
