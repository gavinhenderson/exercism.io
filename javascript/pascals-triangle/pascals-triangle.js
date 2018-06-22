module.exports = class{
  constructor(levels){
    this.rows = (this.pascalRecursive(levels, [[1]]));
    this.lastRow = this.rows[this.rows.length-1]
  }

  pascalRecursive(n, a) {
      if (n < 2) return a;
      let prevRow = a[a.length-1];
      let curRow = [1];

      for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i-1];
      }
      curRow.push(1);
      a.push(curRow);

      return this.pascalRecursive(n-1, a); // Call the function recursively
    }
}
