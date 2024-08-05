// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;


export function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else if(input === 'string') {
        return input.split(''); // string[]
    }
}

const myArr = parseStr('Nico');
// myArr.reverse();
myArr.reverse();
console.log('myArr', 'Nico =>', myArr);

const myStr = parseStr(['N', 'i', 'c', 'o']);
// myStr.toLowerCase();
myStr.toLowerCase();
console.log('myStr', "['N','i','c','o'] =>", myStr);