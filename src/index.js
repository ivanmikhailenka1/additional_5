class BracketPair {

    constructor(startBracket, endBracket) {
        this.startBracket = startBracket;
        this.endBracket = endBracket;
    }

}


module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(value => new BracketPair(value[0], value[1]));
    let bracketQueue = [];
    str.split("").forEach(value => {
        let bracketPair = brackets.find(brackets => brackets.startBracket === value || brackets.endBracket === value);
        if (!bracketPair) {
            return false;
        }
        if (bracketPair.startBracket === bracketQueue[bracketQueue.length - 1] && bracketPair.endBracket === value && bracketQueue.length !== 0) {
            bracketQueue.pop();
        } else if (bracketPair.startBracket === value || bracketQueue.length === 0) {
            bracketQueue.push(value);
        }
    });
    return bracketQueue.length === 0;
};

