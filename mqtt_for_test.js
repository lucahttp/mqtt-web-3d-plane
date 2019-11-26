//const client = new Paho.MQTT.Client("192.168.0.23", Number(9001), "myClientId" + new Date().getTime());
//const client = new Paho.MQTT.Client("186.18.69.174", Number(789), "myClientId" + new Date().getTime());
const client = new Paho.MQTT.Client("mqtt.eclipse.org", Number(80), "myClientId" + new Date().getTime());

const myTopic = "megaTopicX8";

coordinatesX = 0,0;
coordinatesY = 0,0;
coordinatesZ = 0,0;

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({ onSuccess: onConnect });

let count = 0;
function onConnect() {
  console.log("onConnect");
  client.subscribe(myTopic);
  /*
  setInterval(() => { publish(myTopic, `The count is now ${count++}`) }, 1000)
  */
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
  client.connect({ onSuccess: onConnect });
}

const publish = (dest, msg) => {
  console.log('desint :', dest, 'msggg', msg)
  let message = new Paho.MQTT.Message(msg);
  message.destinationName = dest;
  client.send(message);
}

function onMessageArrived(message) {

  //let el = document.createElement('div')
  //el.innerHTML = message.payloadString
  //document.body.appendChild(el)

  superString = message.payloadString;
  splitSuperString = superString.split(",");
/*
  const originalString = "How are you?";
  // Split string by whitespace character
  const splitString = originalString.split(" ");
  console.log(splitString);
  splitString[1];
*/
var gg = "";

coordinatesX = splitSuperString[0]; 
console.log(coordinatesX);
coordinatesY = splitSuperString[1];
console.log(coordinatesY);
coordinatesZ = splitSuperString[2];
console.log(coordinatesZ);


  gg = coordinatesX +" "+ coordinatesX +" "+ coordinatesX;
  let el = document.createElement('div')
  el.innerHTML = gg
  document.body.appendChild(el)


}



