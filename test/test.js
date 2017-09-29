"@fixture fixture";
"@page http://localhost:3002/";

"@test"["Try type"] = {
  "1.Type": function() {
    act.type("#minMlInput", "26", { replace: true });
  },

  "2.Check text": function() {
    eq($(".min-liquid").text(), "26");
  }
};
