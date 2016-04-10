var msg = ["In a meeting, will call you later", "Sorry, I am out of town", "Sorry I cannot talk at the moment", "I don't wanna talk to you"];

console.log("***Auto-reply messages***")

var blocked_caller = ["Emma", "Eva", "Andrea", "Amy", "Janet"];

var reply = function(call_id) {
    for(i=0; i< blocked_caller.length; i++){
        if (call_id == blocked_caller[i]) {
            console.log(msg[Math.floor(Math.random() * msg.length)]);
            break;
    }
    else if(i == (blocked_caller.length)-1){
        console.log("Unknown Caller ID");
        break;
    }
    else {
        continue;
    }
    }
}

reply("Amy");
