var yourname = "";

var textArea = document.getElementById('text_area1');

// Function to scroll to the bottom of the text area
function scrollToBottom() {
        textArea.scrollTop = textArea.scrollHeight;
      }

onEvent("button2", "click", function( ) {
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("text_input2") && (records[i]).password == getText("password")) {
        yourname = getText("text_input2");
        setScreen("screen1");
      }
    }
  });
});
function sendmessage(whisper, text) {
  createRecord("hi", {hi:(yourname + (": " + text)), to:whisper});
}
onEvent("button1", "click", function( ) {
  setScreen("screen3");
});
onEvent("button3", "click", function( ) {
  if (getText("text_input3") != "" && (getText("text_input4") != "" && getText("text_input5") != "")) {
    createRecord("username_password", {username:(getText("text_input3")), password:(getText("text_input4")), email:(getText("text_input5")), banned:"chatter"});
    setScreen("screen2");
  }
});
var rank = "";
timedLoop(5000, function() {
  setText("text_area1", "");
  readRecords("hi", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).to == "public") {
        if (!getChecked("checkbox1")) {
          setText("text_area1", getText("text_area1") + ("\n\n" + (records[i]).hi));
        }
      } else if (((records[i]).to == yourname)) {
        if (getChecked("checkbox1")) {
          setText("text_area1", getText("text_area1") + ("\n\n" + (records[i]).hi));
        }
      }
    }
    scrollToBottom()
  });
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (yourname == (records[i]).username) {
        setText("label1", "your rank is: "+(records[i]).banned);
        rank = (records[i]).banned;
      }
    }
  });
});
onEvent("send", "click", function( ) {
  if (!(rank == "Banned!!")) {
    sendmessage("public", getText("text_input1"));
    setText("text_input1", "")
  }
});
onEvent("button28", "click", function( ) {
  if (!(rank == "Banned!!")) {
    sendmessage(getText("text_input9"), getText("text_input10"));
    setText("text_input1", "")
  }
});
onEvent("button4", "click", function( ) {
  if (rank == "OP") {
    setScreen("screen4");
  }
});
onEvent("button11", "click", function( ) {
  setScreen("screen1");
});
onEvent("button9", "click", function( ) {
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("text_input6")) {
        updateRecord("username_password", {id:i+1, banned:"Banned!!", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
      }
    }
  });
});
onEvent("button10", "click", function( ) {
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("text_input6")) {
        updateRecord("username_password", {id:i+1, banned:"chatter", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
      }
    }
  });
});
onEvent("button5", "click", function( ) {
  setScreen("screen5");
});
onEvent("button13", "click", function( ) {
  setScreen("screen1");
});
onEvent("button14", "click", function( ) {
  createRecord("report", {by:yourname, details:(getText("text_input7") + (" " + getText("dropdown1")))});
});
onEvent("button12", "click", function( ) {
  if (rank == "demoter" || rank == "OP") {
    setScreen("screen6");
  }
});
onEvent("button6", "click", function( ) {
  setScreen("screen1");
});
timedLoop(2000, function() {
  setText("text_area3", "");
  readRecords(getText("dropdown3"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("dropdown3") == "hi") {
        setText("text_area3", getText("text_area3") + ("\n" + (records[i]).hi));
      } else if ((getText("dropdown3") == "report")) {
        setText("text_area3", getText("text_area3") + ("\n" + (records[i]).by) + (": " + (records[i]).details));
      } else {
        setText("text_area3", (((getText("text_area3") + ("\n" + (records[i]).username) + (" Password: " + (records[i]).password) + " Email: ") + records[i].email) + " Ranking: ") + (records[i]).banned);
      }
    }
  });
});
onEvent("button18", "click", function( ) {
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("text_input8")) {
        if ((records[i]).banned == "chatter") {
          updateRecord("username_password", {id:i+1, banned:"Banned!!", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
        if ((records[i]).banned == "emoji king") {
          updateRecord("username_password", {id:i+1, banned:"chatter", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
        if ((records[i]).banned == "demoter") {
          updateRecord("username_password", {id:i+1, banned:"emoji king", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
        if ((records[i]).banned == "OP") {
          if (yourname == "Hamish") {
            updateRecord("username_password", {id:i+1, banned:"demoter", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
          }
        }
      }
    }
  });
});
onEvent("button17", "click", function( ) {
  readRecords("username_password", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("text_input8")) {
        if ((records[i]).banned == "OP") {
          updateRecord("username_password", {id:i+1, banned:"OP", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
        if ((records[i]).banned == "demoter") {
          if (yourname == "Hamish") {
            updateRecord("username_password", {id:i+1, banned:"OP", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
          }
        }
        if ((records[i]).banned == "emoji king") {
          updateRecord("username_password", {id:i+1, banned:"demoter", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
        if ((records[i]).banned == "chatter") {
          updateRecord("username_password", {id:i+1, banned:"emoji king", username:((records[i]).username), password:(records[i]).password, email:(records[i]).email});
        }
      }
    }
  });
});
onEvent("button7", "click", function( ) {
  if (rank == "demoter" || rank == "OP") {
    setScreen("screen7");
  }
});
onEvent("button19", "click", function( ) {
  setScreen("screen1");
});
onEvent("button8", "click", function( ) {
  if (1 == 1) {
    setScreen("screen8");
  }
});
onEvent("button26", "click", function( ) {
  if (1 == 1) {
    setScreen("screen1");
  }
});
onEvent("button20", "click", function( ) {
  createRecord("hi", {hi:(yourname + (": " + "❤️")), to:"public"});
});
onEvent("button21", "click", function( ) {
  createRecord("hi", {hi:(yourname + (": " + "😄")), to:"public"});
});
onEvent("button22", "click", function( ) {
  createRecord("hi", {hi:(yourname + (": " + "🥺")), to:"public"});
});
onEvent("button24", "click", function( ) {
  if (rank == "emoji king" || rank == "demoter" || rank == "OP") {
    createRecord("hi", {hi:(yourname + (": " + "😂")), to:"public"});
  }
});
onEvent("button25", "click", function( ) {
  if (rank == "emoji king" || rank == "demoter" || rank == "OP") {
    createRecord("hi", {hi:(yourname + (": " + "💀")), to:"public"});
  }
});
onEvent("button23", "click", function( ) {
  setScreen("screen9");
});
onEvent("button27", "click", function( ) {
  setScreen("screen1");
});
