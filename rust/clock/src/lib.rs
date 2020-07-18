use std::fmt;

#[derive(Eq, PartialEq, Debug)]
pub struct Clock {
    minutes: i32,
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let hours = self.minutes / 60;
        let mins = self.minutes % 60;
        write!(f, "{:02}:{:02}", hours, mins)
    }
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        return Clock::calc_mintues(hours * 60 + minutes);
    }

    pub fn calc_mintues(total_minutes: i32) -> Self {
        let minutes_in_day = 60 * 24;
        let wrapped_minutes = total_minutes % minutes_in_day;
        let negative_accounted = minutes_in_day + wrapped_minutes;
        let rewrapped = negative_accounted % minutes_in_day;
        let clock = Clock { minutes: rewrapped };
        return clock;
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        return Clock::calc_mintues(self.minutes + minutes);
    }
}
