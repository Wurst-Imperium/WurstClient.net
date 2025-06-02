---
title: My Account
permalink: /account/
google_adsense: false
---
<script src="/js/htmx-2.0.4-min.js"></script>
<meta name="htmx-config" content='{"selfRequestsOnly": false}'>
<main id="account-main" hx-get="{{ site.api_url }}/account/" hx-trigger="load" hx-request='{"credentials": "include"}' style="height: 100%">
	<div class="align-center" style="text-align: center;align-content: center;height: 100%;">
		<span class="mif-ani-spin mif-spinner1 mif-2x fg-grayLight"></span>
	</div>
</main>
