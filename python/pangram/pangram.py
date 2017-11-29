def is_pangram(sentence):
    sentence = sentence.lower().replace("_", "").replace(" ", "")
    sentence = filter(str.isalnum, sentence)
    sentence = ''.join([i for i in sentence if not i.isdigit()])
    print sentence
    characterSet = set()
    for c in sentence:
        characterSet.add(c)
    if (len(characterSet)!=26):
        return False
    else:
        return True
