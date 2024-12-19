async function addNumbersAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Both arguments must be numbers.'));
        } else {
            resolve(a + b);
        }
    });
}

addNumbersAsync(5, 10)
    .then(result => {
        console.log('Addition result:', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

addNumbersAsync(5, 'hello')
    .then(result => {
        console.log('Addition result:', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
