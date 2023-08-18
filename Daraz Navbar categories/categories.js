function changeSubSideNav(category) {
    var subSideNav = document.getElementById('subSideNav');
    var subSideNavItems = '';

    switch (category) {
        case 'groceries':
            subSideNavItems += '<li><a>Fresh Produce</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Breakfast, Choco & Snacks</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Beverages</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Food Staples</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Laundary & Household</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Frozen Food</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Cat</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Dog</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Fish</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            // Add more sub-items for Groceries & Pets
            break;
        case 'health':
            subSideNavItems += '<li><a>Make up</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Beauty tools</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Skincare</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Hair Care</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            subSideNavItems += '<li><a>Bath & Body</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
            // Add more sub-items for Health & Beauty
            break;
        // Add more cases for other categories
case 'fashion':
    subSideNavItems += '<li><a>T-Shirts & Tanks</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Shirts & Polo</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Pants & Jeans</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Shorts, Joggers & Sweats</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Kurtas & Shalwar Kameez</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Winter Clothing</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Inner Wear</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Assecories</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Shoes</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
    subSideNavItems += '<li><a>Boy Clothing</a><span ><i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>';
break;
        default:
            subSideNavItems += '<li><a>No sub-items available</a></li>';
            break;
    }

    subSideNav.innerHTML = '<ul class="side-nav-sub">' + subSideNavItems + '</ul>';
}

$(document).ready(function() {
    $('.menu li').mouseenter(function() {
      $('.sub-menu').show();
    });


    $('.sub-menu').mouseleave(function() {
         $('.sub-menu').hide();
      });

     


  });


  

  
  