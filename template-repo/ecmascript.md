# Introduction to javascript

* A sense og what a good program looks like is developed in practice, not learned from a list of rules.

## why language matters

At the beginning of computing, programming languages where non existence. So programs looked like this:

| 00110001 | 00000000 | 00000000 |
| ---------| :--------| --------:|
| 00110001 | 00000001 | 00000001 |
| 00110011 | 00000001 | 00000010 |
| 01010001 | 00001011 | 00000010 |
| 00100010 | 00000010 | 00001000 |
| 01000011 | 00000001 | 00000000 |
| 01000001 | 00000001 | 00000001 |
| 00010000 | 00000010 | 00000000 |
| 01100010 | 00000000 | 00000000 |

All these numbers were manually entered. Nowadays, since the rise of different programming languages like Javascript these numbers can be
written in a much tidier way with more improvements:

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// -> 55
