from re import sub

def decode(string):
    return sub(r'(\d+)(\D)', lambda m: m.group(2) * int(m.group(1)),
               string)


def encode(string):
    newString = ""

    if(len(string)>0):
        currentChar = string[0]
    currentCounter = 0
    for c in string:
        if(c == currentChar):
            currentCounter += 1
        else:
            if (currentCounter!=0):
                if(currentCounter==1):
                    newString += currentChar
                else:
                    newString += str(currentCounter)+currentChar
            currentCounter=1
            currentChar = c

    if (currentCounter!=0):
        if(currentCounter==1):
            newString += currentChar
        else:
            newString += str(currentCounter)+currentChar

    return newString
