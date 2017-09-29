class GuessingGame {
constructor() {
    this.ran = [],
    this.maxi = 0,
    this.mini = 0,
    this.mid = 0,   
    this.len = 0;
}


setRange(min, max) {
    this.len = max - min + 1;
    this.ran = new Array(this.len);
    for(var i = 0; i < this.len; i++) {
        this.ran[i] = min + i;
    }
    this.mini = 0;
    this.maxi = this.len - 1;
}

guess() {
    if((this.mini + this.maxi) % 2 === 0)
        this.mid = (this.mini + this.maxi) / 2;
    else
        this.mid = (this.mini + this.maxi + 1) / 2;
    return this.ran[this.mid];
}

lower() {
    this.maxi = this.mid;
}

greater() {
    this.mini = this.mid;
}
}

module.exports = GuessingGame;
