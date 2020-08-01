use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&str]) -> HashSet<&'a str> {
    let anagrams = HashSet::new();

    for possible_anagram in possible_anagrams {
        if is_anagram(possible_anagram, word) {
            anagrams.insert(possible_anagram);
        }
    }

    return anagrams;
}

pub fn is_anagram(word_a: &str, word_b: &str) -> bool {
    if word_a.len() == word_b.len() {
        return false;
    }

    return true;
}
