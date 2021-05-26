
const date = new Date();
date.setSeconds(0);
date.setMinutes(0);
date.setHours(18);

document.querySelector('#app').innerHTML = `
<h1>Minecraft Server wieder offen in:</h1>
<countdown-time autostart datetime="${date.getTime()}"></countdown-time>
`
