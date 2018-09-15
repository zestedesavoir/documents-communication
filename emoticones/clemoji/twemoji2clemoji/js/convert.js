const files = `1f47f.svg  1f600.svg  1f601.svg  1f602.svg  1f603.svg  1f604.svg  1f605.svg  1f606.svg
1f607.svg  1f608.svg  1f609.svg  1f60a.svg  1f60b.svg  1f60c.svg  1f60d.svg  1f60e.svg
1f60f.svg  1f610.svg  1f611.svg  1f612.svg  1f613.svg  1f614.svg  1f615.svg  1f616.svg
1f617.svg  1f618.svg  1f619.svg  1f61a.svg  1f61b.svg  1f61c.svg  1f61d.svg  1f61e.svg
1f61f.svg  1f620.svg  1f621.svg  1f622.svg  1f623.svg  1f624.svg  1f625.svg  1f626.svg
1f627.svg  1f628.svg  1f629.svg  1f62a.svg  1f62b.svg  1f62c.svg  1f62d.svg  1f62e.svg
1f62f.svg  1f630.svg  1f631.svg  1f632.svg  1f633.svg  1f634.svg  1f635.svg  1f636.svg
1f637.svg  1f641.svg  1f642.svg  263a.svg  1f643.svg  1f644.svg  1f910.svg  1f911.svg
1f912.svg  1f913.svg  1f914.svg  1f915.svg  1f917.svg  1f922.svg  1f923.svg  1f924.svg
1f925.svg  1f927.svg  1f928.svg  1f929.svg  1f92a.svg  1f92b.svg  1f92c.svg  1f92d.svg
1f92e.svg  1f92f.svg  1f970.svg  1f973.svg  1f974.svg  1f975.svg  1f976.svg  1f97a.svg
2639.svg`.replace(/\n/g, "  ").split("  ");

const gfeuilleTristePATHS = `
<path id="path4138-2" fill="#479F00" d="M35.842,42.028c-7.072,2.898-15.156-0.481-18.056-7.555c-0.056-0.147-0.112-0.295-0.166-0.445c0.273-0.141,0.552-0.27,0.833-0.391c7.072-2.902,15.156,0.48,18.056,7.552c0.002,0,0.002,0,0.002,0.002c0.058,0.147,0.112,0.295,0.164,0.444C36.402,41.775,36.123,41.906,35.842,42.028L35.842,42.028z"/>
<path id="path4138-2-5" fill="#479F00" d="M5.883,38.317c5.113,2.886,11.597,1.081,14.484-4.03c0.058-0.106,0.112-0.214,0.167-0.325c-0.195-0.131-0.394-0.258-0.597-0.377c-5.111-2.888-11.596-1.084-14.482,4.03c-0.002,0-0.002,0-0.002,0c-0.058,0.106-0.112,0.214-0.166,0.322C5.482,38.07,5.68,38.197,5.883,38.317z"/>
`.replace("\n", "");

const gfeuillePATHS = `
<path id="path4138-2" fill="#479F00" d="M-80.758-0.674c-7.478-0.001-13.541-6.064-13.539-13.541c0.003-0.155,0.009-0.31,0.017-0.464c0.297-0.026,0.597-0.041,0.897-0.045c7.478-0.001,13.541,6.062,13.542,13.54c0,0.001,0,0.001,0,0.002c-0.005,0.154-0.009,0.308-0.017,0.462C-80.156-0.696-80.458-0.68-80.758-0.674L-80.758-0.674z"></path>
<path id="path4138-2-5" fill="#479F00" d="M-106.123-3.933c5.744,0,10.4-4.658,10.4-10.402c-0.003-0.12-0.006-0.238-0.013-0.357c-0.23-0.02-0.461-0.03-0.691-0.034c-5.745-0.001-10.402,4.656-10.402,10.4c0,0.002,0,0.002,0,0.002c0.002,0.119,0.006,0.237,0.013,0.355C-106.584-3.949-106.355-3.937-106.123-3.933L-106.123-3.933z"></path>
`.replace("\n", "");

$(window).on("load", function() {
	let fileN = 0;

	function getSVG(num) {
		if (!files[num])
			return;

		$.get("svg/" + files[num], function(data) {
			const $clemoji = $("<div></div>")
				.attr("id", files[num].split(".")[0])
				.appendTo("body")
				.append(new XMLSerializer().serializeToString(data.documentElement));

			if (fileN < 60) {
				if (["1f610", "1f611", "1f612", "1f613", "1f614", "1f615", "1f616", "1f61e", "1f61e", "1f61f", "1f620",
					 "1f621", "1f622", "1f623", "1f624", "1f625", "1f626", "1f627", "1f628", "1f629", "1f62a", "1f62b",
					 "1f630", "1f632", "1f635", "1f641"].indexOf(files[num].split(".")[0]) !== -1) { // triste
					$clemoji.find("#g14").html(`<g id="gfeuille" transform="translate(0,1)">${gfeuilleTristePATHS}</g>
						${$clemoji.find("#g14").html()}`);
			 	} else {
					$clemoji.find("#g14").html(`${$clemoji.find("#g14").html()}
						<g id="gfeuille" transform="translate(113.91075,50.659)">${gfeuillePATHS}</g>`);
				}

				$clemoji.find("#g14").removeAttr("clip-path");
				$clemoji.find("#g10").html($clemoji.find("#g14").html());
				
				$clemoji.find("defs").remove();
				$clemoji.find("metadata").remove();
				$clemoji.find("#path18").attr("d", "M 0,58 38,58 38,0 0,0 0,38 Z");
				$clemoji.find("#g10").attr("transform", "matrix(1.25,0,0,-1.25,-2.5,62.5)");
				$clemoji.find("svg").attr("viewBox", "0 0 42.5 63");
				$clemoji.find("path").each(replaceColor);

				if (["1f47f.svg", "1f608.svg"].indexOf(files[num]) !== -1) { // 👿 😈
					$clemoji.find("#gfeuille").remove();
					$clemoji.find("#g10").attr("transform", "matrix(1.18,0,0,-1.18,-1.2,61.2)");
				}

 				if (files[num] === "1f60d.svg") { // 😍
					$clemoji.find("#g28").attr("transform", "translate(18.1499,33.7192)");
					$clemoji.find("#g32").attr("transform", "translate(19.8496,33.7192)");
				}

				if (files[num] === "1f618.svg") // 😘
					$clemoji.find("#g44").attr("transform", "translate(35.75,9.7783)");

				if (["1f625.svg", "1f630.svg"].indexOf(files[num]) !== -1) //😢 😥
					$clemoji.find("#g36").attr("transform", "translate(12,8)");

				if (files[num] === "1f62a.svg") // 😪
					$clemoji.find("#g44").attr("transform", "translate(23,14)");

				if (files[num] === "1f62d.svg") { // 😭
					$clemoji.css({
						width: "calc(19px * 44.5 / 42)",
						"margin": "calc(-19px * (44.5 - 42) / 42 / 2)",
						"border-bottom": "2px solid #ed4ad5",
						"margin-bottom": "-2px"
					});
					$clemoji.find("svg").attr("viewBox", "0 0 44.5 63");
					$clemoji.find("#g10").attr("transform", "matrix(1.25,0,0,-1.25,-1.5,62.5)");
				}

				// Hand
				if (files[num] === "1f631.svg") // 😱
					$clemoji.find("#path42, #path46").css("fill", "#479F00");

				if (files[num] === "263a.svg") { // ☺
					$clemoji.find("#path34, #path38, #path42, #path46, #path54").css("stroke", "#992500");
					// Transplantation
					let $1f642 = $("#1f642");
					$clemoji.find("#g20").attr("transform", $1f642.find("#g20").attr("transform"));
					$clemoji.find("#path22").attr("d", $1f642.find("#path22").attr("d"));
				}


				if (files[num] === "1f61c.svg") // 😜
					$clemoji.find("#path34").css("fill", "#992500");

				if (files[num] === "1f621.svg") { // 😡
					$clemoji.find("#path26, #path30, #path34").css("fill", "#992500");
					$clemoji.find("#path22").css("fill", "#f98634");
				}
			} else { //v2
				if (["1f644", "1f912", "1f915", "1f925", "1f927", "1f92c", "1f92e", "1f974",
					 "1f97a", "2639", "1f975", "1f976"].indexOf(files[num].split(".")[0]) !== -1) { // triste
					//113.91075,50.659
					$clemoji.find("svg").html(`<g id="g10" transform="matrix(0.895,0,0,0.895,0,12.6)">
						<g id="gfeuille" transform="matrix(1.03,0,0,-1.03,-1.7,-20) translate(0,-54.049)">${gfeuilleTristePATHS}</g>
						${$clemoji.find("svg").html()}
					</g>`);
			 	} else {
					$clemoji.find("svg").html(`<g id="g10" transform="matrix(0.895,0,0,0.895,0,12.6)">
						${$clemoji.find("svg").html()}
						<g id="gfeuille" transform="matrix(1,0,0,-1,-1.19,-18) translate(113.91075,-3.4)">${gfeuillePATHS}</g>
					</g>`);
				}

				$clemoji.find("svg").attr("viewBox", "0 0 33 47.25");
				$clemoji.find("path, ellipse, circle").each(replaceColor);

				if (["1f92f.svg", "1f973.svg"].indexOf(files[num]) !== -1) // 🤯 🥳
					$clemoji.find("#gfeuille").remove();

				if (files[num] === "1f913.svg") // 🤓
					$clemoji.find("path[fill='#595959']").attr("fill", "#ad0dff");

				if (files[num] === "1f975.svg") // 🥵
					$clemoji.find("#gfeuille path").attr("fill", "#987c37");

				if (files[num] === "1f976.svg") // 🥶
					$clemoji.find("#gfeuille path").attr("fill", "#b8b800");

				//>> Hand
				if (["1f917.svg", "1f92d.svg"].indexOf(files[num]) !== -1) { // 🤗 🤤
					$clemoji.find("path[fill='#F4900C']").attr("fill", "#479F00");
					$clemoji.find("path[fill='#B55005']").attr("fill", "#3E721D");
				}

				if (["1f914.svg", "1f92b.svg"].indexOf(files[num]) !== -1) { // 🤔 🤫
					$clemoji.find("path[fill='#F19020']").attr("fill", "#479F00");
					$clemoji.find("path[fill='#B55005']").attr("fill", "#3E721D");

					if (files[num] === "1f914.svg") { // 🤔
						$clemoji.find("#gfeuille").attr("transform", "rotate(10 18 18)" + $clemoji.find("#gfeuille").attr("transform"));
					}

					if (files[num] === "1f92b.svg") { // 🤫
						const $path = $clemoji.find("path[fill='#992500']"),
							attrD = $path.attr("d");
						$path.attr("d", "M22.409 30.743zm-3.259 4.73z" + attrD.substr(757));
						$clemoji.find("#g10").html(`${$clemoji.find("#g10").html()}
							<path fill="#3E721D" d="${attrD.substr(0, 757)}"></path>`);
					}
				}
				//<<

				if (files[num] === "1f92c.svg") { // 🤬
					$clemoji.find("path[fill='#595959']").attr("fill", "#992500");
					$clemoji.find("path[fill='#DA2F47']").attr("fill", "#f98634");
				}

				if (files[num] === "1f643.svg") { // 🙃
					$clemoji.find("#g10").attr("transform", "matrix(0.895,0,0,0.895,0,0)");
					$clemoji.find("#gfeuille").attr("transform", "matrix(1,0,0,1,-1.19,54) translate(113.91075,-3.4)");
				}

				if (files[num] === "1f923.svg") { // 🤣
					$clemoji.css({
						width: "calc(19px * 46 / 36)",
						"margin-left": "calc(-19px * (46 - 36) / 36)",
						"border-bottom": "2px solid #ed4ad5",
						"margin-bottom": "-2px"
					});
					$clemoji.find("svg").attr("viewBox", "0 0 42.5 48.3");
					$clemoji.find("#g10").attr("transform", "matrix(0.895,0,0,0.895,10,13.6)");
					$clemoji.find("#gfeuille").attr("transform", "rotate(-45 18 18)" + $clemoji.find("#gfeuille").attr("transform"));
				}

				if (files[num] === "1f925.svg") { // 🤥 pinocchio
					$clemoji.find("#gfeuille").attr("transform", "matrix(1,0,0,-1,-4,-17.5) translate(0,-54.049)");
				}

				if (files[num] === "1f92a.svg") { // 🤪 idiot incliné
					$clemoji.css({
						width: "calc(19px * 35 / 33)",
						"margin-left": "calc(-19px * (35 - 33) / 33)",
						"border-bottom": "2px solid #ed4ad5",
						"margin-bottom": "-2px"
					});
					$clemoji.find("svg").attr("viewBox", "0 0 35 49.875");
					$clemoji.find("#g10").attr("transform", "matrix(0.895,0,0,0.895,2.5,15.1)");
					$clemoji.find("#gfeuille").attr("transform", "rotate(-18 18 18)" + $clemoji.find("#gfeuille").attr("transform"));
					$clemoji.find("ellipse[fill='#595959'], circle[fill='#595959']").attr("fill", "#992500");
				}
			}

			$clemoji.find("svg").attr("style", "enable-background: new " + $clemoji.find("svg").attr("viewBox"));
			$clemoji.find("svg").attr("width", $clemoji.find("svg").width()+"px");
			$clemoji.find("svg").attr("height", $clemoji.find("svg").height()+"px");
			fileN++;
			getSVG(fileN);
		});
	};
	getSVG(fileN);
});

function replaceColor() {
	let attrcss,
		boolRGB = false;

	if ($(this).attr("fill")) {
		attrcss = "attr";
	} else if ($(this).css("fill")) {
		attrcss = "css";
		boolRGB = true;
	} else {
		return;
	}

	const fill = (boolRGB) ? rgb2hex($(this).css("fill")) : $(this).attr("fill");

	if (["#FFCC4D", "#FDCB58", "#FFCB4C"].indexOf(fill) !== -1) {
		$(this)[attrcss]("fill", "#FAAC2C");
	} else if (["#664500", "#65471B"].indexOf(fill) !== -1) {
		$(this)[attrcss]("fill", "#992500");
	} else if (["#5DADEC", "#64AADD"].indexOf(fill) !== -1) {
		$(this)[attrcss]("fill", "#3DAEFF");
		$(this)[attrcss]("fill-opacity", 0.64);
	} else if (["#292F33"].indexOf(fill) !== -1) {
		$(this)[attrcss]("fill", "#595959");
	}
}

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return (rgb) ? "#" + (hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase() : null;
}