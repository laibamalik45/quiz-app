
var questions = [
    {
        question:"The main board of the computer is called?",
        option1:"Mother Board",
        option2:"Father Board",
        option3:"keyboard",
        correctAns:"Mother Board"
    },
    {
        question:"The hardware used to read the disc is?",
        option1:"CPU",
        option2:"Floppy Disk",
        option3:"Disk Drive",
        correctAns:"CPU"
    },{
        question:"The most common types of storage devices are?",
        option1:"Optical",
        option2:"Magnetic",
        option3:"Magnetic",
        correctAns:"Magnetic"
    },{
        question:"What is the process of dividing a disk into tracks and sectors?",
        option1:"Formatting",
        option2:"Crashing",
        option3:"Tracking",
        correctAns:"Formatting"
    },{
        question:"File system is permanently stored in??",
        option1:"Device",
        option2:"Primary",
        option3:"Secondary",
        correctAns:"Secondary"
    }
    ,{
        question:"Performs simple math for CPU?",
        option1:"ALU",
        option2:"DIMM",
        option3:"BUS",
        correctAns:"ALU"
    },
    {
        question:"MS-Word is an example of ?",
        option1:"An operating system",
        option2:"A processing device",
        option3:"Application software",
        correctAns:"Application software"
    }


]
    var currentQues = document.getElementById("currentQues");
    var totalQues = document.getElementById("totalQues");
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    
    
    function nextQuestion(){
        min= 1;
        sec = 59;
        var getOptions = document.getElementsByName("options");
        currentQues.innerHTML = index+1;
        totalQues.innerHTML =  questions.length+1;
        for(var i = 0;i<getOptions.length;i++)
        {
            // currentQues.innerHTML = index;
           
        // totalQues.innerHTML =  questions.length;
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
       
                // console.log(selectedValue)
                var selectedQues = questions[index-1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index-1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
        }
        else{
    
            
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++
        }
    }
    
    // nextQuestion()
    
    
    function clicked()
    {
        button.disabled = false
    }
