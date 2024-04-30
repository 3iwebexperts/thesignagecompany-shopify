
$(document).ready(function () {
  console.log("app js loaded");

function getColumnPositionBasedOnVisibility(sectionVisibilityPercentage) {
    return (200 * sectionVisibilityPercentage) / 100;
}
  
function handleScroll() {
  console.log("hello");

  const $projectsList = $(".projects_list");

  if ($projectsList.length === 0) {
    return;
  }

  const top_of_element = $projectsList.offset().top;
  const bottom_of_element = top_of_element + $projectsList.outerHeight();
  const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  const top_of_screen = $(window).scrollTop();
  const sectionHeight = bottom_of_element - top_of_element;

  if (
    bottom_of_screen > top_of_element &&
    top_of_screen < bottom_of_element
  ) {
    const halfOfSectionHeight = sectionHeight * 5;
    const sectionVisibilityPercentage =
      ((bottom_of_screen - top_of_element) / halfOfSectionHeight) * 100;
    const columnPosition = getColumnPositionBasedOnVisibility(
      sectionVisibilityPercentage
    );

    $(".column_two").css(
      "transform",
      "translate3d(0px, " + columnPosition * 2 + "px, 0px)"
    );
  }
}

$(window).scroll(handleScroll);
$(window).on('load', handleScroll);
  
});
                  