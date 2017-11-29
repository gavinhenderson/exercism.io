import time
from datetime import datetime, timedelta

def add_gigasecond(birth_date):
    return birth_date + timedelta(0, 10**9)
