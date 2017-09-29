"@fixture fixture";
"@page https://ulrikstrid.github.io/testcafe-text-input-repro/";

"@test"["Try type"] = {
  "1.Type": function() {
    act.type("#min-liquid-input", "26", { replace: true });
  },

  "2.Check text": function() {
    eq($(".min-liquid").text(), "26");
  }
};
