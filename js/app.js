export default class countdown {
    constructor(launch){
        this.launch = launch;
    }

    get _actualDate() {
        return new Date();
    }

    get _launch(){
        return new Date (this.launch);
    }

    get _timeToLaunch(){
        return this._launch.getTime() - this._actualDate.getTime();
    }

    get days(){
        return Math.floor(this._timeToLaunch / (24 * 60 * 60 * 1000))
    }
    get hours(){
        return Math.floor(this._timeToLaunch / ( 60 * 60 * 1000))
    }
    get minutes(){
        return Math.floor(this._timeToLaunch / (60 * 1000))
    }
    get seconds(){
        return Math.floor(this._timeToLaunch / 1000)
    }

    get total (){
        const days = this.days
        const hours = this.hours % 24
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return [days, hours, minutes, seconds]
    }
}

