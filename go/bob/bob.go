// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package bob should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package bob

import (
	"strings"
)

// Hey should have a comment documenting it.
func Hey(remark string) string {
	spacesStrippedRemark := strings.ReplaceAll(remark, " ", "")
	tabStrippedRemark := strings.ReplaceAll(spacesStrippedRemark, "\t", "")
	returnsStrippedRemark := strings.ReplaceAll(tabStrippedRemark, "\r", "")
	newLinesStrippedRemark := strings.ReplaceAll(returnsStrippedRemark, "\n", "")

	if len(newLinesStrippedRemark) == 0 {
		return "Fine. Be that way!"
	}

	noTrailingSpaces := strings.TrimSpace(newLinesStrippedRemark)
	finalLetter := noTrailingSpaces[len(noTrailingSpaces)-1:]
	upperCasedRemark := strings.ToUpper(noTrailingSpaces)
	lowerCasedRemark := strings.ToLower(noTrailingSpaces)

	if finalLetter == "?" && upperCasedRemark == noTrailingSpaces && lowerCasedRemark != noTrailingSpaces {
		return "Calm down, I know what I'm doing!"
	}

	if finalLetter == "?" {
		return "Sure."
	}

	if upperCasedRemark == noTrailingSpaces && lowerCasedRemark != noTrailingSpaces {
		return "Whoa, chill out!"
	}

	return "Whatever."
}
