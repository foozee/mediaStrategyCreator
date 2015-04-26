/**
 * Created by Mahmoud Fawzy on 4/26/15.
 */

(function(){
    var initialized = false;
    var current_step = 0;
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            if(request.message == "start_bs_helper"){
                if(initialized == false){
                    var container = document.createElement('div');
                    container.className= "_bs-animate";
                    container.id = "_bs-main-container";

                    var popup = document.createElement('div');
                    popup.id = "_bs-popup";
                    popup.innerHTML = '<div id="_bs-close-popup"><a href="javascript;;">[X]</a></div>';
                    container.appendChild(popup);

                    var popupbody = document.createElement('div');
                    popupbody.id = "_bs-popup-body";
                    popupbody.innerText = "Welcome to BS MediaStrategy Creator";
                    popup.appendChild(popupbody);


                    document.body.appendChild(container);
                    container.className += " _bs-shown"
                    //console.log(ret);
                    initialized = true;
                }
                else{
                    console.log("already initialized!")
                }
            }
        }
    )
})();