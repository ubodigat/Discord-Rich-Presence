const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on('ready', () => {
    rpc.setActivity({
        details: '',
        state: '',
        startTimestamp: '',
        largeImageKey: '',
        largeImageText: '',
        smallImageKey: '',
        smallImageText: '',
        buttons: [{
            label: 'Button 1',
            url: ''
        }, {
            label: 'Button 2',
            url: ''
        }]
    })
})