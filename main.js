import { Launcher } from '@wdio/cli';
import MyService from './MyService.js';

/*
async function run() {
    console.log('---------------- run');
    let wdio = new Launcher('./wdio.conf.js', {
        services: [
            [MyService, {}]
        ]
    });

    await wdio.run();
}

await run();
*/

const wdio = new Launcher('./wdio.conf.js', {
    services: [
        [MyService, { timestamp: Date.now() }]
    ]
});

wdio.run().then(function (code) {
    process.exit(code);
}, function (error) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});
