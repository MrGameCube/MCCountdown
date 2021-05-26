let open = false;
const date = new Date();
const OPEN_HOUR_UTC = 16;
const CLOSE_HOUR_UTC = 2;
const curHours = new Date().getUTCHours();
if(curHours >= OPEN_HOUR_UTC || curHours <= CLOSE_HOUR_UTC) {
    open = true;
    if(curHours >= OPEN_HOUR_UTC) {
        date.setUTCDate(date.getUTCDate()+1);
    }
    date.setUTCHours(CLOSE_HOUR_UTC);
} else {
    date.setSeconds(0);
    date.setMinutes(0);
    date.setUTCHours(OPEN_HOUR_UTC);
}

const closedMessage = "Minecraft Server wieder aus in:";
const openMessage = "Minecraft Server wieder offen in:";


document.querySelector('#app').innerHTML = `
<h1>${open ? closedMessage : openMessage}</h1>
<countdown-time autostart datetime="${date.getTime()}"></countdown-time>
`
