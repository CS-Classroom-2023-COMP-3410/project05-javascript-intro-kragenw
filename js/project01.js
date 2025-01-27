const clockElement = document.getElementById('clock');
const timeFormatSelect = document.getElementById('timeFormat');
const colorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSize');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');

let alarmTime = null;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    
    

    if (timeFormatSelect.value === '12') {
        hours = hours % 12 || 12;
        if (alarmTime) { 
            alarmTime[0] = alarmTime[0] % 12 || 12;
        }

    }

    
    

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clockElement.textContent = formattedTime;

  

    if (alarmTime[0] == hours && alarmTime[1] == minutes) {
        alert('Alarm! Wake the hell up!');
        alarmTime = null;
    }
}

function savePreferences() {
    localStorage.setItem('timeFormat', timeFormatSelect.value);
    localStorage.setItem('clockColor', colorPicker.value);
    localStorage.setItem('fontSize', fontSizeInput.value);
    localStorage.setItem('alarmTime', alarmTimeInput.value);
}

timeFormatSelect.addEventListener('change', savePreferences);
colorPicker.addEventListener('input', () => {
    clockElement.style.color = colorPicker.value;
    savePreferences();
});
fontSizeInput.addEventListener('input', () => {
    clockElement.style.fontSize = `${fontSizeInput.value}px`;
    savePreferences();
});
setAlarmButton.addEventListener('click', () => {
    alarmTime = alarmTimeInput.value.toString().split(':');
    console.log(alarmTime);
});

function loadPreferences() {
    timeFormatSelect.value = localStorage.getItem('timeFormat') || '24';
    colorPicker.value = localStorage.getItem('clockColor') || '#ffffff';
    fontSizeInput.value = localStorage.getItem('fontSize') || '48';
    clockElement.style.color = colorPicker.value;
    clockElement.style.fontSize = `${fontSizeInput.value}px`;
}

loadPreferences();
setInterval(updateClock, 1000);
updateClock();
