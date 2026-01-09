PAUSED = false;

let globalTickCount = 0;
setInterval(() => {
    if (PAUSED) return;
    globalTickCount++;
    // svake sekunde valjda
    if (globalTickCount % 60 === 0){
        globalTickCount = 0;
    }
}, 16.67);