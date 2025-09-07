const mainFunction = () => {
    let lastSnowTime = 0;

    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - lastSnowTime < 50) return; 
        lastSnowTime = now;

        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        document.body.appendChild(snowflake);

        snowflake.style.left = e.pageX + "px";
        snowflake.style.top = e.pageY + "px";

        snowflake.style.fontSize = (Math.random() * 10 + 10) + "px";
        snowflake.style.animationDuration = (Math.random() * 1.5 + 1) + "s";

        setTimeout(() => {
            snowflake.remove();
        }, 2000);
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mainFunction)
} else {
    mainFunction();
}