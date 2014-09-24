var correctAnswers = 0;
var a=0;
var i=0;
var j=0;
var k=1;
var aLength;



function generateTest(QA, answers){
    while(i<=QA.length-1){             //loops all the questions array

        document.write('<section class=\"questions\">');  //Questions
        document.write('<div id=\"questionsDiv' + i + '\"  data-answer=\"'+ answers[a] +'\" >' );
        document.write('<br/>');
        document.write('<h4>'+ QA[i ]+ '</h4>');
        document.write('<br/>');

        for(j=0;j<=3;j++){             //loops 4 time for each radio button and label
            var id = i+j;
            var radio = "radioId"  + id;

            document.write("<br/>");   //radio buttons and labels
            document.write('<input id=\"' + radio + '\" type=\"radio\" name=\" Answer'+i+'\" value=\" '+ j +'\">');
            document.write('<label for=\"' + radio + '\">' + QA[k] + '</label>');
            document.write("<br/>");
            k++;                       //k gives index for the answers
        }

        document.write('</div>');      //result (temporary alert to show if answer correct or incorrect)
        document.write('<div id="result'+ i +'" class="result"><p></p></div>');
        document.write("</section>");
        document.write("</br></br>");

        k=k+1;
        i=i+4;
        i++;
        a++;
    }

    aLength = answers.length;
    return aLength;
}


// =================== jQuery Checks Answers =================== //
$(function () {

    for(a=0;a<=aLength;a++) {
        var questionId = '#questionsDiv' + (a * 5);    //questionId is the questionsDiv #
        $(questionId).find('input').change(function (){

            //finds the id of the results div and stores it to resultId
            var resultId = '#' + $(this).parent().next().attr('id');
            var answer = $(this).parent().data('answer');

            if ($(this).val() != answer) {
                //incorrect answer
                $(resultId).removeClass('correct')
                    .addClass('incorrect')
                    .find('p').empty()
                    .append("Sorry, answer is incorrect");
                $(resultId).slideDown().animate({'opacity':'1'}, 'slow');
            } else if ($(this).val() == answer) {
                //correct answer
                $(resultId).css('display', 'block')
                    .removeClass('incorrect')
                    .addClass('correct')
                    .find('p').empty()
                    .append("YOU ROCK! The answer is correct");
                $(resultId).slideDown().animate({'opacity':'1'}, 'slow');
                correctAnswers +=1;
            }
            $(this).siblings().attr('disabled',true);
        });
    }
});


// =================== Percentage Correct Answers =================== //
$(function(){
    $('#btn').on('click', function(){
        var percent = (correctAnswers * 100)/aLength;
        if(percent >= 75){
            $(this).parent()
                   .find('#showAnswer > h4')
                   .addClass('correct')
                   .text('You Pass: ' + percent + '% correct' );
        }else{
            $(this).parent()
                   .find('#showAnswer > h4')
                   .addClass('incorrect')
                   .text('You Fail: ' + percent + '% correct');
        }
        $('.answers > div').slideDown().animate({'opacity': '1'} , 'fast');
    });
});



