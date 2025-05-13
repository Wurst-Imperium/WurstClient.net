---
title: My Account
permalink: /account/
google_adsense: false
---
<script src="https://unpkg.com/htmx.org@2.0.4"></script>
<meta name="htmx-config" content='{"selfRequestsOnly": false}'>
<script>
const token = new URLSearchParams(window.location.search).get("token");
</script>
<main id="account-main" hx-get="{{ site.api_url }}/account/" hx-trigger="load" hx-vals='js:{token: token}' hx-request='{"credentials": "include"}' style="height: 100%">
	<div class="align-center" style="text-align: center;align-content: center;height: 100%;">
		<span class="mif-ani-spin mif-spinner1 mif-2x fg-grayLight"></span>
	</div>
</main>
