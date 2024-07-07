---
layout: none
permalink: "/js/wi-v2024.07.07.js"
---
/* Wurst-Imperium JS */

/* Custom Plausible events */
let links = document.querySelectorAll("a[data-analytics]");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkEvent);
    links[i].addEventListener('auxclick', handleLinkEvent);
}
function handleLinkEvent(event) {
    var link = event.target;
    var middle = event.type == "auxclick" && event.which == 2;
    var click = event.type == "click";
    while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
        link = link.parentNode;
    }
    if (middle || click) {
        let eventName = link.getAttribute('data-analytics');
        let eventProps = {};
        let eventPropsAttrs = link.attributes;
        for (var i = 0; i < eventPropsAttrs.length; i++) {
            if(eventPropsAttrs[i].name.startsWith("data-analytics-")){
                let propName = eventPropsAttrs[i].name.replace("data-analytics-","");
                eventProps[propName] = eventPropsAttrs[i].value;
            }
        }
        plausible(eventName, {props: eventProps});
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) || "file:" === window.location.protocol)
            console.log(eventName, {props: eventProps});
    }
    if (!link.target) {
        if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
            setTimeout(function () {
                location.href = link.href;
            }, 150);
            event.preventDefault();
        }
    }
}

/* Custom header navbar */
const menuToggle = document.querySelector(".wi-menu-toggle");
const navList = document.querySelector(".wi-nav-list");
const navItems = document.querySelectorAll(".wi-nav-item");

menuToggle.addEventListener("click", function() {
	navList.classList.toggle("active");
});

navItems.forEach(item => {
	item.addEventListener("click", function() {
		if (window.innerWidth > 640)
			return;
		if (this.classList.contains("active")) {
			this.classList.remove("active");
		} else {
			navItems.forEach(i => i.classList.remove("active"));
			this.classList.add("active");
		}
	});
});
