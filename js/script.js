$(document).ready(function () {
  $("a").click((e) => e.preventDefault());
  $("form").submit((e) => {
    let name = $("#name").val();

    name
      ? alert(`Thank you for reaching out, ${name}! I will contact you soon.`)
      : alert("Thank you for reaching out! I will contact you soon.");

    e.preventDefault();
    return false;
  });
  $("[data-scroll]").click(function () {
    $("html, body").animate(
      { scrollTop: $($(this).data("scroll")).offset().top - 100 },
      750
    );
  });
});
