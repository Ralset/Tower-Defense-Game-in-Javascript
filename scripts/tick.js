class Tick {
    constructor(ticksPerSecond = 100){
        this.ticksPerSecond = ticksPerSecond;
        this.delay = 1000 / ticksPerSecond; 
        this.subscribers = new Set();
        this.timerId = null;
        this.tickCount = 0;
    }

    Start(){
        this.Stop();
        this.timerId = setInterval(() => {
            this.tickCount++;
            this._notify(this.tickCount);
        }, this.delay);
    }

    Stop(){
        if (this.timerId === null) return;
        clearInterval(this.timerId);
        this.timerId = null;
    }

    Subscribe(func, freq){
        const sub = { func, freq };
        this.subscribers.add(sub);
        return () => this.subscribers.delete(sub);
    }

    _notify(tick){
        for (const sub of Array.from(this.subscribers)){
            if(tick % sub.freq === 0)
                sub.func();
        }
    }
}