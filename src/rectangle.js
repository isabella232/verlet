function Rectangle(left, top, right, bottom) {
  this.set.apply(this, arguments);
};

Rectangle.prototype = {
  set: function(left, top, right, bottom) {
    this.left = Math.min(left, right);
    this.top = Math.min(top, bottom);
    this.right = Math.max(right, left);
    this.bottom = Math.max(bottom, top);
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
    return this;
  },
  contains: function(x, y) {
    return (x >= this.left && x <= this.right && y >= this.top && y <= this.bottom);
  },
  overlaps: function(rect) {
    return !(rect.left > this.right || rect.right < this.left ||
        rect.top > this.bottom || rect.bottom < this.top);
  },
  expand: function(amount) {
    this.left -= amount;
    this.right += amount;
    this.top -= amount;
    this.bottom += amount;
    return this;
  }
}