$(document).ready(function () {
    const owl = $('.main-carousel');
    $('.main-carousel').owlCarousel({
        items: 1,
        margin: 15
    })
    $('.prev-carousel--btn').click(function () {
        owl.trigger('prev.owl.carousel')
    })
    $('.next-carousel--btn').click(function () {
        owl.trigger('next.owl.carousel')
    })
    AOS.init();
})

$(document).ready(function () {
    $('.blog__post').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            992: {
                items: 3,
                margin: 30
            }
        },
    })
})

$(document).ready(function () {
    const accessToken = 'pk.eyJ1IjoiYW56YWxsYWRkIiwiYSI6ImNrdnkxbW02cDB5N2Mydm8xNTFqN3ByY24ifQ.35219SExEhssb02yrVSBOg';
    // Mapbox Configuration
    const mapboxConfig = {
        accessToken,
        map: {
            container: "map",
            style: "mapbox://styles/mapbox/dark-v10",
            zoom: 1,
        },
    };

    mapboxgl.accessToken = mapboxConfig.accessToken;

    const map = new mapboxgl.Map(mapboxConfig.map);

    map.addControl(
        new mapboxgl.NavigationControl({
            showCompass: false
        }),
        "bottom-right"
    );

    const elSwitchMap = document.getElementById("switch-map");
    const elInputFromMenu = elSwitchMap.getElementsByTagName("input");

    for (const input of elInputFromMenu) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle("mapbox://styles/mapbox/" + layerId);
        };
    }

    const markerJSON = [
        {
            user: {
                name: "Aakash Lohchab",
                role: "Executive Evaluator",
            },
            image: "assets/images/maps-location/person/person_7.png",
            geometry: {
                type: "Point",
                coordinates: [75.7873, 26.9124],
            },
        },
        {
            user: {
                name: "Dushyant Singh",
                role: "CEO",
            },
            image: "assets/images/maps-location/person/person_1.png",
            geometry: {
                type: "Point",
                coordinates: [-81.5308110865, 28.3361762024],
            },
        },
        {
            user: {
                name: "Stelios Kiliaris",
                role: "PKCY",
            },
            image: "assets/images/maps-location/person/person_5.png",
            geometry: {
                type: "Point",
                coordinates: [33.4299, 35.1264],
            },
        },
    ];

    markerJSON.forEach((marker, idx) => {
        const el = document.createElement("div");
        el.innerHTML = `
        <div class="marker">
            <img src="${marker.image}" alt="${marker.image}">
            <div class="marker__arrow">
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292893 12.6698C-0.0976309 13.0604 -0.097631 13.6935 0.292893 14.0841C0.683417 14.4746 1.31658 14.4746 1.70711 14.0841L0.292893 12.6698ZM7 7.37695L7.70711 8.08406L8.41421 7.37695L7.70711 6.66985L7 7.37695ZM1.70711 0.669846C1.31658 0.279321 0.683418 0.279321 0.292895 0.669846C-0.0976299 1.06037 -0.09763 1.69354 0.292894 2.08406L1.70711 0.669846ZM1.70711 14.0841L7.70711 8.08406L6.29289 6.66985L0.292893 12.6698L1.70711 14.0841ZM7.70711 6.66985L1.70711 0.669846L0.292894 2.08406L6.29289 8.08406L7.70711 6.66985Z" fill="#CCD2E3"/>
                </svg>
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292893 12.6698C-0.0976309 13.0604 -0.097631 13.6935 0.292893 14.0841C0.683417 14.4746 1.31658 14.4746 1.70711 14.0841L0.292893 12.6698ZM7 7.37695L7.70711 8.08406L8.41421 7.37695L7.70711 6.66985L7 7.37695ZM1.70711 0.669846C1.31658 0.279321 0.683418 0.279321 0.292895 0.669846C-0.0976299 1.06037 -0.09763 1.69354 0.292894 2.08406L1.70711 0.669846ZM1.70711 14.0841L7.70711 8.08406L6.29289 6.66985L0.292893 12.6698L1.70711 14.0841ZM7.70711 6.66985L1.70711 0.669846L0.292894 2.08406L6.29289 8.08406L7.70711 6.66985Z" fill="#5B657C"/>
                </svg>
            </div>
            <div class="marker__text">
                <h3 class="text-body-1 fw-bold">${marker.user.name}</h3>
                <p class="text-body-3 text-color-secondary">${marker.user.role}</p>
            </div>
        </div>
    `;

        const markerConfig = {
            element: el,
            anchor: "left",
        };

        new mapboxgl.Marker(markerConfig)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

})


$("#menuNavbar").click(function () {
    if ($('.wrapper-nav').hasClass('active-nav-mobile')) {
        $('.wrapper-nav').removeClass('active-nav-mobile')
    } else {
        $('.wrapper-nav').addClass('active-nav-mobile')
    }
});

$(function () {
    $(document).scroll(function () {
        const $nav = $(".wrapper-nav");
        const $floatingButton = $("#button-floating")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $floatingButton.toggleClass('active', $(this).scrollTop() > $nav.height())
    });
});

$(document).ready(function() {
    $("#button-floating").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
      });
})

function openModal(nameFile){
    $('body').addClass('stop-scrolling')
    $('body').bind('touchmove', function(e){e.preventDefault()})
    $('.main-modal').addClass('active')
    const video = document.getElementsByTagName('video')[0];
    var sources = video.getElementsByTagName('source');
    sources[0].src = `./assets/video/${nameFile}.mp4`;
    video.load();
}

function closeModal(){
    $('body').removeClass('stop-scrolling')
    $('.main-modal').removeClass('active')
    const video = document.getElementsByTagName('video')[0];
    video.pause();
    video.currentTime = 0;
    $('body').unbind('touchmove')
}

function openImage(src){
    window.open(src, "_blank",)
}