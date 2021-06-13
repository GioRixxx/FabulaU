import FUItemSheet from "./module/sheets/item-sheet.js";
Hook.once("init", function() {
  console.log("fabula-ultima | Initializing Fabula Ultima");

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("fabula-ultima", "item-sheet", {makeDefault: true })
});
