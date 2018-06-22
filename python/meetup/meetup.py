from datetime import date

from calendar import monthrange

def meetup_day(year, month, day_of_the_week, which):
    dateDay = {}
    daysOfTheWeek = {}
    daysOfTheWeek["Monday"] = 0
    daysOfTheWeek["Tuesday"] = 1
    daysOfTheWeek["Wednesday"] = 2
    daysOfTheWeek["Thursday"] = 3
    daysOfTheWeek["Friday"] = 4
    daysOfTheWeek["Saturday"] = 5
    daysOfTheWeek["Sunday"] = 6
    day_of_the_week = daysOfTheWeek[day_of_the_week]
    for x in range(monthrange(year, month)[0]+1,monthrange(year, month)[1]-1):
        dateDay[x] = date(year,month,x).weekday()
    if(which == "1st" or which == "2nd" or which == "3rd" or which == "4th"):
        which = int(which[0])
        seen = 0
        x = monthrange(year, month)[0]
        while(seen!=which):
            if(dateDay[x]==day_of_the_week):
                seen+=1
                continue
            x+=1
        return date(year,month,x)
    elif(which=="teenth"):
            for x in range(10,20):
                if(dateDay[x]==day_of_the_week):
                    return date(year,month,x)
