function wpb_add_googleanalytics() { ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7QJMM8RPV8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QJMM8RPV8');
</script>
<?php }
add_action('wp_head', 'wpb_add_googleanalytics');
function listen_javascript() {
  if (is_page ('179')) { 
    ?>
        <script type="text/javascript">
			// Code from podnews.net
			var iTunesUrl="https://podcasts.apple.com/us/podcast/beers-in-the-lot/id1528896738?uo=4";
			var GooglePodcastsUrl="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zMjAzNWFmYy9wb2RjYXN0L3Jzcw==";
			var SpotifyUrl="https://open.spotify.com/show/2ncx2k2QtMWol6tv0W0SjH";
			var WebsitePlayerUrl="https://beersinthelot.com/listen-subscribe";
			// The WebsitePlayerUrl is the web page for your podcast. We link here to our own.
			// You can adjust the WebsitePlayerUrl above to point to your own website

			if (navigator.userAgent.includes("Android")) {window.location=SpotifyUrl;}
			else if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad") || navigator.userAgent.includes("iPod")) {window.location=iTunesUrl;}
			else {window.location=WebsitePlayerUrl;}
        </script>
		<NOSCRIPT>Your browser does not support JavaScript. Oh no! But you can search for "Beers in The Lot" in your favorite podcast app.</NOSCRIPT>
    <?php
  }
}
add_action('wp_head', 'listen_javascript');
function discord_javascript() {
  if (is_page ('204')) { 
    ?>
        <script type="text/javascript">
			var DiscordUrl="https://discord.gg/wMH46Bd";
			{window.location=DiscordUrl;}
	</script>
	<noscript>Your browser does not support JavaScript. Oh no! But you can still search for "Beers in The Lot" in your favorite podcast app.</noscript>
    <?php
  }
}
add_action('wp_head', 'discord_javascript');
function patreon_javascript() {
	if (is_page ('237')) {
		?>
			<script type="text/javascript">
				var PatreonUrl="https://www.patreon.com/beersinthelot";
				{window.location=PatreonUrl;}
			</script>
			<noscript>Your browser does not support JavaScript. Oh no! But you can still search for "Beers in The Lot" in you favorite podcast app.</noscript>
		<?php
	}
}
add_action('wp_head', 'patreon_javascript');
function bay2bay_javascript() {
	if (is_page ('298')) {
		?>
			<script type="text/javascript">
				var bay2bayUrl="https://charity.pledgeit.org/t/U0c0O8qVfr";
				{window.location=bay2bayUrl;}
			</script>
			<noscript>Your browser does not support JavaScript. Oh no! But you can still search for "Beers in The Lot" in you favorite podcast app.</noscript>
		<?php
	}
}
add_action('wp_head', 'bay2bay_javascript');
