function event_loop() {
    const btn = document.getElementById('test-btn');
    btn.onclick = () => {
        document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
    const div = document.getElementById('event-loop');
    const start = Date.now();
    let end;
    let i = 0;
    function count() {
        do {
            i++;
        } while (i%1e6 !== 0);
        if (i === 1e9) {
            end = Date.now() - start;
            div.innerHTML = `${i} - Time to complete: ${end}`;
            return;
        } else {
            div.innerHTML = `${i}`;
            setTimeout(count);
        }
    }
    count();
}

event_loop();