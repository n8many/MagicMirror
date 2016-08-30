var music = {
    mpd: null,
    client: null,
    port: config.music.port,
    ip:  config.music.ip,
    updateInterval: 1000,
    intervalId: undefined,
};

music.connect = function(){
    this.client = this.mpd.connect({
        port: this.port,
        host: this.ip
    });
    
}

music.checkConnection = function() {


}

music.updateSong = function() {
    this.client.sendCommand(this.mpd.cmd("status",[]), function(err, msg){
        if (err) throw err;
        console.log(msg);
    });
}

music.init = function () {
    
    if (this.mpd == null){
        this.mpd = require('mpd');
    }

    if (this.client == null){
        this.connect();
    }

    this.intervalId = 0;
    this.updateSong();

};
