export default class Speaker {
    constructor () {
        const AudioContext = window.AudioContext;

        this.AudioCtx = new AudioContext();

        this.gain = this.AudioCtx.createGain();
        this.finish = this.AudioCtx.destination;

        this.gain.connect(this.finish);
    }

    muteAudio () {
        this.gain.setValueAtTime(0, this.AudioCtx.currentTime);
    }
    unMuteAudio () {
        this.gain.setValueAtTime(1, this.AudioCtx.currentTime);
    }

    play(fre) {
        if(this.AudioCtx && !this.oscillator){
            this.oscillator = this.AudioCtx.createOscillator();

            this.oscillator.frequency.setValueAtTime( fre || 440, this.AudioCtx.currentTime )
            
            this.oscillator.type="square";

            this.oscillator.connect(this.gain);
            this.oscillator.start()
        }
    }

    stop () {
        if(this.oscillator){
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null
        }
    }
}