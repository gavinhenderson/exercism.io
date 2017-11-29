def word_count(phrase):
    phrase = phrase.replace(':',' ').replace('.',' ').replace(',',' ').replace('!',' ').replace('&',' ').replace('@',' ').replace('$',' ').replace('%',' ').replace('^',' ').replace('_',' ')
    phrase = phrase.lower()
    wordDict = {}
    for word in phrase.split():
        if (word[0]=="'" and word[len(word)-1]=="'"):
            word = word[1:-1]
        if word in wordDict:
            wordDict[word] += 1
        else:
            wordDict[word] = 1
    return wordDict
