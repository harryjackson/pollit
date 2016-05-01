module.exports = {
  nw: function(obj, callback) {  
    if(typeof global[obj] === 'undefined') {
      setTimeout(function () {
        module.exports.nw(obj, callback); 
      }, 
      1);
    }
    else {
      callback(global[obj]);
    }
  }
}
