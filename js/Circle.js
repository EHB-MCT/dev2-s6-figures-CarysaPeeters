"use strict";

import Figure from "./Figure.js";

export default class Circle extends Figure {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}
	get diameter() {
		return this._radius * 2;
	}
	get area() {
		return Math.PI * this._radius * this._radius;
	}
	get circumference() {
		return 2 * Math.PI * this._radius;
	}
	get htmlString() {
		const string = `<div class="result">
        <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
        <div class="infoBox">
          <h3>Circle</h3>
          <dl>
            <dt>Radius</dt>
            <dd>RADIUS px</dd>
      
            <dt>Diameter</dt>
            <dd>DIAMETER px</dd>
      
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
