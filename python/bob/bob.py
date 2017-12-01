def testQuestion(phrase):
    if (phrase[-1:]=='?'):
        return True
    else:
        return False

def testYell(phrase):
    if(phrase == phrase.upper() and phrase!=phrase.lower()):
        return True
    else:
        return False

def testAddress(phrase):
    if(phrase == ""):
        return True
    else:
        return False

def hey(phrase):
    phrase = phrase.replace(" ","").replace('\n',"").replace('\t',"").replace('\r',"")
    if(testYell(phrase)):
        return "Whoa, chill out!"
    elif(testQuestion(phrase)):
        return "Sure."
    elif(testAddress(phrase)):
        return "Fine. Be that way!"
    else:
        return "Whatever."
