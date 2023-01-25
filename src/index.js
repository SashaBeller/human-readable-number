module.exports = function toReadable(number) {
    const nums = new Map();
    nums.set(0, "zero");
    nums.set(1, "one");
    nums.set(2, "two");
    nums.set(3, "three");
    nums.set(4, "four");
    nums.set(5, "five");
    nums.set(6, "six");
    nums.set(7, "seven");
    nums.set(8, "eight");
    nums.set(9, "nine");
    nums.set(10, "ten");
    nums.set(11, "eleven");
    nums.set(12, "twelve");
    nums.set(13, "thirteen");
    nums.set(14, "fourteen");
    nums.set(15, "fifteen");
    nums.set(16, "sixteen");
    nums.set(17, "seventeen");
    nums.set(18, "eighteen");
    nums.set(19, "nineteen");
    nums.set(20, "twenty");
    nums.set(30, "thirty");
    nums.set(40, "forty");
    nums.set(50, "fifty");
    nums.set(60, "sixty");
    nums.set(70, "seventy");
    nums.set(80, "eighty");
    nums.set(90, "ninety");
    if (number < 21) {
        return nums.get(number);
    } else if (number >= 21 && number < 100) {
        let int = Math.floor(number / 10) * 10;
        let reminder = number % 10;
        return reminder == 0 ? nums.get(int) : nums.get(int + " " + reminder);
    } else if (number >= 100 && number < 1000) {
        let hundred = Math.floor(number / 100);
        let reminder2 = number % 100;
        return reminder2 == 0
            ? nums.get(hundred + " hundred ")
            : nums.get(hundred + " hundred ") + calcReminder(reminder2, nums);
    }
};

let calcReminder = function (number, nums) {
    if (number < 21) {
        return nums.get(number);
    } else if (number >= 21 && number < 100) {
        let int = Math.floor(number / 10) * 10;
        let reminder = number % 10;
        return reminder == 0 ? nums.get(int) : nums.get(int + " " + reminder);
    }
};
