// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package gigasecond should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package gigasecond

// import path for the time package from the standard library
import "time"

// AddGigasecond should have a comment documenting it.
func AddGigasecond(t time.Time) time.Time {
	giga := time.Duration(1e9 * time.Second)
	return t.Add(giga)
}

/*
module.exports = class {
	constructor(initDate){
	  this.startDate = initDate;
	}

	date(){
	  var startTime = this.startDate.getTime();
	var endDate = new Date(startTime + 1000000000000);
		return endDate;
	}
  }
*/
