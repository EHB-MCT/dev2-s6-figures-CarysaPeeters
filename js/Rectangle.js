"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(name, width, height) {
		super(name);
		this.width = width;
		this.height = height;
	}
}
