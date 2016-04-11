function search() {
    var str = "3423 SDFSSDD Efd Eric, OdjfFEPs sddhh eric lljjdfd. W#84dfd e#Ric ?? Eric djn$%qdd";
    var myName = "Eric";
    var str_temp = str.toUpperCase();
    var myName_temp = myName.toUpperCase();
    var re = new RegExp(myName_temp, 'g');
    var hits = str_temp.match(re);
}
