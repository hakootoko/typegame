// console.log("hello");


const a = '吾輩は猫である。名前はまだない。';
let splited = a.split('');

console.log(splited.length);

i = 0

function apper() {
    document.getElementById('script').insertAdjacentText('beforeend', (splited[i]));
    i ++;
    console.log(i);
    if (i === splited.length) {
        document.location.href = "result.html"
    }
}

    

addEventListener('keydown', apper);

