// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

// Hide Company Tags LinkedIn Google Facebook Twitter Microsoft Bloomberg Yelp
// Hide Tags Array Sort
// Hide Similar Problems (H) Insert Interval (E) Meeting Rooms (M) Meeting Rooms II

 /**
  * Definition for an interval.
  * function Interval(start, end) {
  *     this.start = start;
  *     this.end = end;
  * }
  */
 /**
  * @param {Interval[]} intervals
  * @return {Interval[]}
  */


var merge = function(intervals) {
  var res = [];

  // 1.1 排序
  intervals.sort((i1, i2) => i1.start > i2.start ? 1 : -1 );

  // 1.2 只有一个区间，无法比较，故先存进 res
  if(intervals.length) {
    res.push(intervals[0]);
  }

  // 2 循环 index 从 1 开始
  for(var i = 1; i < intervals.length; i++) {
    var interval = intervals[i];
    var last = res.pop();

    if(interval.start > last.end) {
      res.push(last);
      res.push(interval);
    } else {
      // 2.1 符合区间合并条件，取大的 end
      last.end = Math.max(last.end, interval.end);
      res.push(last);
    }
  }

  return res;
};


// test
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
console.log(merge([new Interval(1, 4), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)]))
