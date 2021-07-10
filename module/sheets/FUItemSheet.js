export default class FUItemSheet extends ItemSheet {
  get template() {
    return `systems/fabula-ultima/templates/sheets/${this.item.data.type}-sheet.html`;
  }
}
