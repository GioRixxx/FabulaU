import FUItemSheet from "./module/sheets/FUItemSheet.js";

Hooks.once("init", function () {
  console.log("fabula-ultima | Initializing Fabula Ultima");

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("fabula-ultima", FUItemSheet, { makeDefault: true });
});
