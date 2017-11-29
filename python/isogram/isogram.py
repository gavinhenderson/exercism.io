def is_isogram(string):
    occurrences = {'a': 0 }
    for c in string:
        occurrences[c.lower()] = 0;

    for c in string:
        occurrences[c.lower()] += 1;

    for key, value in occurrences.items():
        if(key==" " or key=="-"):
            continue
        else:
            if(value>1):
                return False
    return True
