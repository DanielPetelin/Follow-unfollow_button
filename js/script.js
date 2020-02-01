var k = 0;

document.getElementById('button').onclick = function() { 
    if (k <= 100000000000000)
        console.log(k);
        k++;
    if (k % 2 == 0) {
        button.setAttribute('value', 'Follow');
    } else {
        button.setAttribute('value', 'Unfollow');
    };
};