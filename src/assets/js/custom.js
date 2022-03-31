// $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     $(".page-title-opacity").css({
//         opacity: function () {
//             var elementHeight = $(this).height();
//             return 1 - (elementHeight - scrollTop) / elementHeight;
//         },
//     });
// });
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 350) {
//         $(".page-title-fix").addClass("d-none");
//     } else {
//         $(".page-title-fix").removeClass("d-none");
//     }
// });
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 400) {
//         $("#page-title-image-inner").addClass("section-full-width");
//     } else {
//         $("#page-title-image-inner").removeClass("section-full-width");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var drivemoreimgbox = $("#drive-more-img").offset().top;
//     var drivemoreimg = $(".drive-more-img");
//     if (scrollPosition >= drivemoreimgbox) {
//         drivemoreimg.addClass("drive-more-img-fixed");
//     } else {
//         drivemoreimg.removeClass("drive-more-img-fixed");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var drivemoreimgdown = $(".drive-more-detail-box-last").offset().top;
//     var drivemoreimg = $(".drive-more-img");
//     if (scrollPosition >= drivemoreimgdown) {
//         drivemoreimg.removeClass("drive-more-img-fixed");
//         $(".drive-more-img").addClass("end-scroll");
//         $(".drive-more-section-left").addClass("end-scroll-outer");
//     } else {
//         $(".drive-more-img").removeClass("end-scroll");
//         $(".drive-more-section-left").removeClass("end-scroll-outer");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasessection = $(".use-cases-section-inner").offset().top;
//     if (scrollPosition >= usecasessection) {
//         $(".use-cases-right-inner").addClass("use-video-fix");
//     } else {
//         $(".use-cases-right-inner").removeClass("use-video-fix");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasesdetaillast = $(".use-cases-detail-four").offset().top;
//     if (scrollPosition >= usecasesdetaillast) {
//         $(".use-cases-right-inner").removeClass("use-video-fix");
//         $(".use-cases-video").addClass("end-video-scroll");
//         $(".use-cases-right-inner").addClass("end-video-scroll-outer");
//     } else {
//         $(".use-cases-video").removeClass("end-video-scroll");
//         $(".use-cases-right-inner").removeClass("end-video-scroll-outer");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var pagetitleimageinner = $(".page-title-image-inner").offset().top;
//     var drivemoresection = $(".drive-more-section").offset().top;
//     var robustvideosection = $(".robust-video-section").offset().top;
//     var usecasessection = $(".use-cases-section").offset().top;
//     if (scrollPosition >= pagetitleimageinner) {
//         $(".header-section").addClass("light-header");
//     } else {
//         $(".header-section").removeClass("light-header");
//     }
//     if (scrollPosition >= drivemoresection) {
//         $(".header-section").removeClass("light-header");
//         $(".header-section").addClass("dark-header-with-border");
//     } else {
//         // $(".header-section").removeClass("dark-header-with-border");
//     }
//     if (scrollPosition >= robustvideosection) {
//         $(".header-section").addClass("light-header");
//         $(".header-section").removeClass("dark-header-with-border");
//     } else {
//         $(".header-section").removeClass("light-header");
//     }
//     if (scrollPosition >= usecasessection) {
//         $(".header-section").removeClass("light-header");
//         $(".header-section").addClass("dark-header-with-border");
//     } else {
//         $(".header-section").removeClass("dark-header-with-border");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasesdetailfour = $(".use-cases-detail-four").offset().top;
//     if (scrollPosition >= usecasesdetailfour) {
//         $(".video-for-one").addClass("d-none");
//         $(".video-for-two").addClass("d-none");
//         $(".video-for-three").addClass("d-none");
//         $(".video-for-four").removeClass("d-none");
//     } else {
//         $(".video-for-one").removeClass("d-none");
//         $(".video-for-two").removeClass("d-none");
//         $(".video-for-three").removeClass("d-none");
//         $(".video-for-four").addClass("d-none");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasesdetailthree = $(".use-cases-detail-three").offset().top;
//     if (scrollPosition >= usecasesdetailthree) {
//         $(".video-for-one").addClass("d-none");
//         $(".video-for-two").addClass("d-none");
//         $(".video-for-three").removeClass("d-none");
//         $(".video-for-four").addClass("d-none");
//     } else {
//         $(".video-for-one").removeClass("d-none");
//         $(".video-for-two").removeClass("d-none");
//         $(".video-for-three").addClass("d-none");
//         $(".video-for-four").removeClass("d-none");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasesdetailtwo = $(".use-cases-detail-two").offset().top;
//     if (scrollPosition >= usecasesdetailtwo) {
//         $(".video-for-one").addClass("d-none");
//         $(".video-for-two").removeClass("d-none");
//         $(".video-for-three").addClass("d-none");
//         $(".video-for-four").addClass("d-none");
//     } else {
//         $(".video-for-one").removeClass("d-none");
//         $(".video-for-two").addClass("d-none");
//         $(".video-for-three").removeClass("d-none");
//         $(".video-for-four").removeClass("d-none");
//     }
// });
// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     var usecasesdetailone = $(".use-cases-detail-one").offset().top;
//     if (scrollPosition >= usecasesdetailone) {
//         $(".video-for-one").removeClass("d-none");
//         $(".video-for-two").addClass("d-none");
//         $(".video-for-three").addClass("d-none");
//         $(".video-for-four").addClass("d-none");
//     } else {
//         $(".video-for-one").addClass("d-none");
//         $(".video-for-two").removeClass("d-none");
//         $(".video-for-three").removeClass("d-none");
//         $(".video-for-four").removeClass("d-none");
//     }
// });