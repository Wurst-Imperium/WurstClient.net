---
layout: none
permalink: "/js/wi-v2026.03.14.js"
---
/* Wurst-Imperium JS */

/* Custom Plausible events */
let links = document.querySelectorAll("a[data-analytics]");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkEvent);
    links[i].addEventListener('auxclick', handleLinkEvent);
}
function sendPlausibleEvent(eventName, eventProps) {
    let script = document.querySelector('script[data-domain][src*="/js/script"]');
    if (!script || !script.getAttribute("data-domain")) {
        plausible(eventName, {props: eventProps});
        return;
    }

    let endpoint = script.getAttribute("data-api");
    if (!endpoint)
        endpoint = new URL(script.src).origin + "/api/event";

    let payload = {
        n: eventName,
        u: location.href,
        d: script.getAttribute("data-domain"),
        r: document.referrer || null,
        p: eventProps,
        v: 33
    };
    let body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
        let blob = new Blob([body], {type: "text/plain"});
        navigator.sendBeacon(endpoint, blob);
        return;
    }

    if (window.fetch) {
        fetch(endpoint, {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: body,
            keepalive: true
        }).catch(function() {});
        return;
    }

    plausible(eventName, {props: eventProps});
}
function handleLinkEvent(event) {
    var link = event.currentTarget;
    var middle = event.type == "auxclick" && event.button == 1;
    var click = event.type == "click";
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
        sendPlausibleEvent(eventName, eventProps);
        if (/^localhost$|(^|\.)wurstclient\.local$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) || "file:" === window.location.protocol)
            console.log(eventName, {props: eventProps});
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
