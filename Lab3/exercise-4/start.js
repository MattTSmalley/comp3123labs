var handleCounter = function (result) {
    console.log('The callback count is ' + result);
}

function callbackLoop(count, functionCallback){
    if(count == 0){
        console.log('*** exiting callLoop *****')
    }
    if(count != 0){
        functionCallback(count);
        callbackLoop(--count, functionCallback);
    }
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);