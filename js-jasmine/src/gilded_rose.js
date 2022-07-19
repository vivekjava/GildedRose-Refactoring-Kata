/**
 *  GitHub source Path : https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/js-jasmine/src/gilded_rose.js
 */

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Conjured') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'REDUCE');
          }
        }
      } else if (this.items[i].name != 'Conjured') {
        // New task has been added here
        this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'TWISE_REDUCE')
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'INCREMENT');
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'INCREMENT');
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'INCREMENT');
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'REDUCE');
              }
            }
          } else {
            this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'SELF_REDUCE');
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = updateQuality(this.items[i], notmalQualityConst, 'INCREMENT');
          }
        }
      }
    }

    return this.items;
  }
  /**
   * @description this function keep the quality value changes in place
   * 
   * @param {*} item 
   * @param {*} notmalQualityConst 
   * @param {*} flag 
   * @returns updateQuality
   */
  updateQuality(item, notmalQualityConst, flag = '') {
    switch (flag) {
      case 'REDUCE': return (item.quality - notmalQualityConst); break;
      case 'SELF_REDUCE': return (item.quality - item.quality); break;
      case 'TWISE_REDUCE': return (item.quality - (notmalQualityConst * 2)); break;
      case 'INCREMENT': return (item.quality + notmalQualityConst); break;
      default: return (item.quality + notmalQualityConst); break;
    }
  }
}

module.exports = {
  Item,
  Shop
}
