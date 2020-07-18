package acronym

import (
	"regexp"
	"strings"
)

// Abbreviate should have a comment documenting it.
func Abbreviate(input string) string {
	removeHyphens := strings.ReplaceAll(input, "-", " ")
	removeUnderscores := strings.ReplaceAll(removeHyphens, "_", "")

	r := regexp.MustCompile("[^\\s]+")
	words := r.FindAllString(removeUnderscores, -1)

	var acronym string

	for i := 0; i < len(words); i++ {
		currentWord := words[i]
		currentLetter := currentWord[0:1]

		acronym += currentLetter
	}

	return strings.ToUpper(acronym)
}
