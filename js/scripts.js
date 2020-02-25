function clickThis(name) {
    var name = document.getElementById("name").value;
    if(name !== null){
        alert(name   + "  we've recieved your message.we will check on you later.Thank you"); 
    };
    return name;
};
function whatWeDoClick(div_class,item_clicked) {
    if (item_clicked=="icon") {
      $('.'+div_class).hide();
      $('#'+div_class+'_text').show();
        
    } else {
      $('.'+div_class).show();
      $('#'+div_class+'_text').hide();
        
    }
    
}