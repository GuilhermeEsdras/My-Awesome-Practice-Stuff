const primeOrNot = (arr: number[]): void => {
    arr.forEach(
        n => {
            let prime: boolean = false;
            for (let i = 2; i <= n/i; i++) {
                if (n % i == 0) {
                    prime = !prime;
                    break;
                }
            }
            if (prime) console.log('Not prime');
            else console.log('Prime');
            // if (prime) console.log(n + ' is Not prime');
            // else console.log(n + ' is Prime');
        }
    )
}

primeOrNot([2, 31, 33]);
