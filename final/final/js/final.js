$(() => {

    console.log('JS 正常執行')
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var answer = [];
    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * num.length);
        answer.push(num[index]);
        num.splice(index, 1);
    }

    var times = 0;


    $('#submit').on('click', () => {

        if (times <= 9) {

            var a = 0
            var b = 0;
            var x = $('#input').val();
            $('#input').val('');

            for (var i = 0; i < 4; i++) {
                var index = answer.indexOf(x[i]);
                if (index != -1) {
                    if (index == i) {
                        a++;
                    } else {
                        b++;
                    }
                }
            }
            if (a == 4) {
                alert('You Got It！');
            }
            times += 1;
            $('tbody').append('<tr><td>' + times + '</td><td>' + x + '</td><td>' + 'a:' + a + '  ' + 'b:' + b + '</td></tr>');
        } else { if (times == 10) { alert('10次結束了，沒機會了，正確答案是' + answer) } }

    })


})