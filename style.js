var field=documentgetElementById("result_field");

numbers = documentgetElementByClassName("display");
for (i=0;i<numbers.length;i++){
numbers[1].setAttribute("onclick","post(this)");
};

function back(){
field.value="";
};

function post(me){
field.value += me.innerHTML;
}

function answer(){
var input = field.value;
result_field.value = eval(input);
}
