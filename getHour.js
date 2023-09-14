var run = false;
var time = '';

const scheduleDaysWeek = ['08:00', '13:00'];
const scheduleWeekend  = ['08:00'];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const daysWeekend = ['Saturday'];

const now = new Date();

const dayOfWeek = getDayOfWeek(now);

const isDayWeek = days.includes(dayOfWeek);
const isDayWeekend = daysWeekend.includes(dayOfWeek);

function isShouldRun() {
  return isDayWeekend && isTime(scheduleWeekend) || isDayWeek && isTime(scheduleDaysWeek);
} 

function isTime(schedules) {
  let [hours, minutes] = getCurrentTime();

  if (schedules.includes(`${hours}:${minutes}`)) {
    time = Number(hours);
    return true;
  }
  return false;
}

function getCurrentTime() {
  const START_HOUR = 0;
  const END_HORA = 2;
  const START_MINUTES = 3;

  const currentDate = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: "2-digit" });
  const hours = currentDate.slice(START_HOUR, END_HORA);
  const minutes = currentDate.slice(START_MINUTES);

  return [hours, minutes];
}

function getDayOfWeek(date) {
  const day = date.getDay();
  switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
  }
}

if (isShouldRun()) {
 run = true;
}

exports.data = {
    run: isShouldRun(),
    time
}