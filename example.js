
var cart = {};
function addToCart(product){
	var productName = product.getAttribute("data-name");
	var price = product.getAttribute("data-price");

	cart[productName] = price;
	alert(productName + " successfully added to cart");


	console.log(cart);
	sessionStorage.setItem("myCart", JSON.stringify(cart));
}

function getCart(){
	var test = sessionStorage.getItem("myCart");
	console.log(JSON.parse(test));
}

function clearCart(){
	sessionStorage.removeItem("myCart");
}

function display(){
	var cart = JSON.parse(sessionStorage.getItem("myCart"));

	var content='';
	for (var key in cart) {
		var name = key; //B
		var price = cart[key];	 //15
	 	content += '<tr><td>'+name+'</td><td>'+price+'</td></tr>';
	}

	document.getElementById("cartTable").innerHTML = content;

}