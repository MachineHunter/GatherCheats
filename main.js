window.onload = function() {

	 // teleport move
    document.getElementById("teleportmove_enable").onclick = function() {
			chrome.tabs.executeScript({
				 code: "window.dispatchEvent(new CustomEvent('teleportmove_enable'));"
			});
    }
    document.getElementById("teleportmove_disable").onclick = function() {
        chrome.tabs.executeScript({
            code: "window.dispatchEvent(new CustomEvent('teleportmove_disable'));"
        });
    }
    document.getElementById("changeboost").onclick = function() {
		  newboost = document.getElementById("boostinput").value.toString();
        chrome.tabs.executeScript({
			  code: "window.dispatchEvent(new CustomEvent('changeboost', {'detail':" + newboost + "}));"
        });
    }

	 // square dance
    document.getElementById("squaredance_enable").onclick = function() {
			chrome.tabs.executeScript({
				 code: "window.dispatchEvent(new CustomEvent('squaredance_enable'));"
			});
    }
    document.getElementById("squaredance_disable").onclick = function() {
        chrome.tabs.executeScript({
            code: "window.dispatchEvent(new CustomEvent('squaredance_disable'));"
        });
    }

	 // updown dance
    document.getElementById("updowndance_enable").onclick = function() {
			chrome.tabs.executeScript({
				 code: "window.dispatchEvent(new CustomEvent('updowndance_enable'));"
			});
    }
    document.getElementById("updowndance_disable").onclick = function() {
        chrome.tabs.executeScript({
            code: "window.dispatchEvent(new CustomEvent('updowndance_disable'));"
        });
    }

	 // rightleft dance
    document.getElementById("rightleftdance_enable").onclick = function() {
			chrome.tabs.executeScript({
				 code: "window.dispatchEvent(new CustomEvent('rightleftdance_enable'));"
			});
    }
    document.getElementById("rightleftdance_disable").onclick = function() {
        chrome.tabs.executeScript({
            code: "window.dispatchEvent(new CustomEvent('rightleftdance_disable'));"
        });
    }

    document.getElementById("changedancespeed").onclick = function() {
		  newdancespeed = document.getElementById("dancespeedinput").value.toString();
        chrome.tabs.executeScript({
			  code: "window.dispatchEvent(new CustomEvent('changedancespeed', {'detail':" + newdancespeed + "}));"
        });
    }

	 // ghost
    document.getElementById("ghost_enable").onclick = function() {
			chrome.tabs.executeScript({
				 code: "window.dispatchEvent(new CustomEvent('ghost_enable'));"
			});
    }
    document.getElementById("ghost_disable").onclick = function() {
        chrome.tabs.executeScript({
            code: "window.dispatchEvent(new CustomEvent('ghost_disable'));"
        });
    }

	 // single emote
    document.getElementById("outputsingleemote").onclick = function() {
		  emote = document.getElementById("singleemoteinput").value.toString();
        chrome.tabs.executeScript({
			  code: "window.dispatchEvent(new CustomEvent('outputsingleemote', {'detail':'" + emote + "'}));"
        });
    }

	 // multi emote
    document.getElementById("outputmultiemote").onclick = function() {
		  emote = document.getElementById("multiemoteinput").value.toString();
        chrome.tabs.executeScript({
			  code: "window.dispatchEvent(new CustomEvent('outputmultiemote', {'detail':'" + emote + "'}));"
        });
    }
}
