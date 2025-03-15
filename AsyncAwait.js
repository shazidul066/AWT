console.log("Start");

async function a() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log(sum);
}

async function main() {
    await a();
    console.log("End");
}

main();