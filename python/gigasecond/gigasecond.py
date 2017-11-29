import time
from datetime import datetime


def add_gigasecond(birth_date):
    ageInSecs = time.mktime(birth_date.timetuple())
    gigaAnswer = ageInSecs + 1000000000
    return datetime.fromtimestamp(gigaAnswer)
    pass
