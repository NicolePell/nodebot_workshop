// Blink an LED
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("board on");
  var led = new five.Led(13);

  led.blink(1000);
});
