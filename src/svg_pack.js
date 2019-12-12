import svgs from "./_js/svgs"
{
  function init() {
    for (const v of document.querySelectorAll('.svgp')) {
      svg_pack(v)
    }
  }
  function svg_pack(svgp) {
    const class_names = svgp.className.match(/svgp-(.+?)( |$)/)
    if (!class_names || class_names.length < 2 || !class_names[1]) return;
    const name = class_names[1];
    svgp.insertAdjacentHTML('beforeend', svgs[name]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}
