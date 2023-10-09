var l = 1000; 
    var c = 0;

    while (c <= l) {
        var numString = c.toString();
        var isPalindrome = true;

        for (var i = 0; i < Math.floor(numString.length / 2); i++) {
            if (numString[i] !== numString[numString.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome) {
            var palindromeList = document.getElementById('hr');
            var li = document.createElement('li');
            li.textContent = c;
            palindromeList.appendChild(li);
        }

        c++;
}