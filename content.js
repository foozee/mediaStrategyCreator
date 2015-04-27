/**
 * Created by Mahmoud Fawzy on 4/26/15.
 */

(function(){
    var initialized = false;
    var current_step = 0;
    var container, popup, popupbody, popupbuttons;
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            if(request.message == "start_bs_helper"){
                if(initialized == false){
                    container = document.createElement('div');
                    container.classList.add("_bs-animate");
                    container.id = "_bs-main-container";

                    popup = document.createElement('div');
                    popup.id = "_bs-popup";
                    popup.innerHTML = '<div id="_bs-close-popup"><a onclick="this.parentNode.parentNode.parentNode.classList.remove(\'_bs-shown\')">[X]</a></div>';
                    container.appendChild(popup);

                    popupbody = document.createElement('div');
                    popupbody.id = "_bs-popup-body";
                    updatePopupBody(current_step);
                    popup.appendChild(popupbody);

                    popupbuttons = document.createElement('div');
                    popupbuttons.id = "_bs-popup-buttons";
                    popupbuttons.innerHTML = '<input type="submit" value="Next" class="_bs-button">';
                    popup.appendChild(popupbuttons);


                    document.body.appendChild(container);
                    container.classList.add("_bs-shown");
                    //console.log(ret);
                    initialized = true;

                    document.addEventListener('click', function(e){
                        clickHandler(e)
                    }, false);
                }
                else{
                    container.classList.toggle('_bs-shown');
                }
            }
        }
    );


    function clickHandler(e) {
        if(container.classList.contains("_bs-shown")){
            e = e || window.event;
            var target = e.target || e.srcElement,
                text = target.textContent || target.innerText;
            target.classList.add('_bs-highlighted');
        }

    }

    function updatePopupBody(step){
        switch (step) {
            case 1:
                popupbody.innerText = "Please Click the Play button on the website's player";
                break;
            case 2:
                popupbody.innerText = "Please Click the Next button on the website's player";
                break;
            case 3:
                popupbody.innerText = "Please Click the Previous button on the website's player";
                break;
            case 4:
                popupbody.innerText = "Please Click the Pause button on the website's player";
                break;
            case 5:
                popupbody.innerText = "Please Click the Favorite/Like/Love button on the website's player";
                break;
            default:
                popupbody.innerHTML = "<div>Welcome to BS MediaStrategy Creator</div>";


        }
    }
})();