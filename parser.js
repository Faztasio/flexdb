var flex = {};
var data = {};

var delimiter = ";";

flex.setDelimiter = function(str) {
  delimiter = str;
}

flex.parse = function(string) {
  var methods = string.split(delimiter)
  methods.forEach(method) {
    var words = method.split(" ");
    var finals = []
    words.forEach(function(f) {
      finals.push(f.toLowercase())
    })
    
    // Parse
    if(finals[0] == "set") {
      var varType = finals[1] // variable type
      var varName = finals[2] // variable name
      var varVal = finals[3] // variable value
      
      var state = 0
      if(varType == "string") {
        data[varName] = varVal;
      } else if(varType == "int") {
        data[varName] = varVal.toString();
      } else if(varType == "list") {
        
      }
    }
  }
}
