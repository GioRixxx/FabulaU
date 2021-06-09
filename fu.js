import FUItemSheet from "./module/sheets/FUItemSheet.js";
Hook.once("init", function() {
  console.log("FabulaU | Initializing Fabula Ultima");

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("FabulaU", "FUItemSheet", {makeDefault: true })
});
