$(document).ready(function()
	{
	$("#funnymeme").hide();
	$("#showimg").click(function()
		{
		$("#funnymeme").toggle();
		<!--wow im hilarious-->
	}
	);
	$("#audio").stop("true").delay('2000').queue(function()
		{
		$(this).html('<audio loop autoplay id="music"><source src="hauntu.mp3" type="audio/mp3" /></audio>');
		music=document.getElementById("music")music.volume=0.5
	}
	)
}
);
