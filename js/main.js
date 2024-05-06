jQuery(".navbarmenu").on('click', function() {
    jQuery(".navbarmenu").toggleClass("change");
    jQuery("header .logo").toggleClass("sided");
    jQuery(".main_container").toggleClass("blurred");
    jQuery("header .rightbtn").toggleClass("active");
    jQuery("header nav").toggleClass("active");
    jQuery('.mobile-overlay').toggleClass('active');
    jQuery("body").toggleClass("overflow-hidden");
});
jQuery('.mobile-overlay').on('click', function () {
    jQuery('.mobile-overlay').removeClass('active');
    jQuery("header nav").removeClass("active");
    jQuery(".navbarmenu").removeClass("change");
    jQuery("header .rightbtn").removeClass("active");
    jQuery("header .logo").removeClass("sided");
    jQuery(".main_container").removeClass("blurred");
    jQuery("body").removeClass("overflow-hidden");
});
 $(document).ready(function() {
    $(document).on('click', function(event)         {
        if (!$(event.target).closest('.dropdown-menu').length) {
            $(".dropdown .dropdown-toggle").removeClass("show").siblings(".dropdown-menu").hide();
        }
    });
    $(".dropdown .dropdown-toggle").on('click',function(e) {
        e.stopPropagation();
        $(this).addClass("show");
        $(this).siblings(".dropdown-menu").show();
    });
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        $('#email-error').text('');
        var email = $('#email').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '' || !emailPattern.test(email)) {
            $('#email-error').text('Please enter a valid email address.');
            return;
        }
        console.log('Email:', email);
    });

});
 $(document).ready(function(){
        var totalAmounts = [];
        $(".add-to-cart").click(function(){
            var itemName = $(this).data("name");
            var itemPrice = parseFloat($(this).data("price"));
            var itemImg = $(this).data("img");
            var $cartItems = $(".shopping-cart-items");
            
           
            var $existingItem = $cartItems.find("li:contains('"+ itemName +"')");
            if ($existingItem.length) {            
                var quantity = parseInt($existingItem.find(".item-quantity").text()) + 1;
                $existingItem.find(".item-quantity").text(quantity);
                $existingItem.find(".item-price").text((itemPrice).toFixed(2));
                $existingItem.siblings().find(".item-summary").text("Total: " + (quantity * itemPrice).toFixed(2));
            } else {
                var newItem = `
                    <li>
                        <div class="item-thumb">
                            <div class="image">
                                <img class="img-fluid" src="${itemImg}" alt="Product Image">
                            </div>
                        </div>
                        <div class="item-detail">
                            <h3>${itemName}</h3>
                            <div class="item-s">
                            <span class="item-quantity">1</span>
                            <span>x</span>
                            <span class="item-s item-price">${itemPrice.toFixed(2)}</span>
                            </div>                            
                        </div>
                    </li>
                    
                `;
                $cartItems.prepend(newItem);
            }
            var totalAmount = 0;
            var cartitemlength =0;
            $cartItems.find("li:contains('"+ itemName +"')").each(function() {
                var quantity = parseInt($(this).find(".item-quantity").text());
                var price = parseFloat($(this).find(".item-price").text());
                totalAmount += quantity * price;
               
            });
            cartitemlength = $(".shopping-cart-items li:lt(-2)").length;
            $(".dropdown-toggle .badge").text(cartitemlength);
            totalAmounts.push(totalAmount); 
            console.log("totalAmounts",totalAmounts);
            var total = totalAmounts.reduce((acc, curr) => acc + curr, 0);
            var itemCount = parseInt($(".cart-count").text()) + 1;
            $(".cart-count").text(itemCount);
            $(".total-amount").text("Total: " + total.toFixed(2));
        });
});

AOS.init({
  duration: 1200,
})

