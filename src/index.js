module.exports = function toReadable (number) {
const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tenths = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const round_tenths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (number >=0 && number <10) {
    return units[number];
}
if (number >= 10 && number < 20) {
    return tenths[number - 10];
}
}
