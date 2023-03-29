"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(name, width, height) {
		super(name);
		this.width = width;
		this.height = height;
	}
    get area() {
        return this._width * this._height;
    }
    get circumference() {
        return (this._width + this._height) * 2;
    }
    get htmlString() {
       const string = `<div class="result">
        <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>HEIGHT px</dd>
      
            <dt>Width</dt>
            <dd>WIDTH px</dd>
      
            <dt>Area</dt>
            <dd>AREA px</dd>
      
            <dt>Circumference</dt>
            <dd>CIRCUMFERENCE px</dd>
          </dl>
        </div>
      </div>`;

      return string;
      
    }
}
