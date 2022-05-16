let cont;

const runCountDown = (second, kindEgg) => {
    changeImages(kindEgg)

    const minute = document.getElementById("minute")
    const seconds = document.getElementById("second")
    const imgEgg = document.getElementById("imgEgg")
    const start_timer = document.getElementById("start_timer")
    const stop_timer = document.getElementById("stop_timer")
    const kind_egg = document.getElementById("kind_egg")

    kind_egg.innerHTML = "Telur "+kindEgg
    start_timer.style.display = "none"
    stop_timer.style.display = "block"
    count = setInterval(() => {
        let secondCount = second--
        const conv_min = Math.floor(second/60)
        const conv_sec = secondCount-conv_min*60
        
        minute.innerHTML = conv_min.toString().length > 1 ? conv_min : '0'+conv_min
        seconds.innerHTML = conv_sec.toString().length > 1 ? conv_sec : '0'+conv_sec
        if(secondCount === 0) {
            clearInterval(count)

            const notif = new Audio("../assets/sound/notif.wav")
            notif.loop=true
            notif.play()

            Swal.fire({
                icon: 'success',
                title: `Telur ${kindEgg} Sudah Siap !`,
                confirmButtonText: "Stop!",
                confirmButtonColor: "#1abc9c"

            }).then((result) => {
                if (result.isConfirmed) {
                    notif.pause()
                    imgEgg.setAttribute("src", "./assets/images/mentah.png")
                    start_timer.style.display = "flex"
                    stop_timer.style.display = "none"
                }
            })

            minute.innerHTML = "00"
            seconds.innerHTML = "00"
        }

    }, 1000)
}

const changeImages = (eggs) => {
    const imgEgg = document.getElementById("imgEgg")

    if(eggs === "3/4 matang") {
        imgEgg.setAttribute("src", "./assets/images/3_4.png")
    } else if(eggs === "1/2 matang") {
        imgEgg.setAttribute("src", "./assets/images/1_2.png")
    } else {
        imgEgg.setAttribute("src", "./assets/images/mateng.png")
    }
}

const stopTimer = () => {
    const imgEgg = document.getElementById("imgEgg")
    const minute = document.getElementById("minute")
    const seconds = document.getElementById("second")
    const start_timer = document.getElementById("start_timer")
    const stop_timer = document.getElementById("stop_timer")

    imgEgg.setAttribute("src", "./assets/images/mentah.png")
    minute.innerHTML = "00"
    seconds.innerHTML = "00"
    start_timer.style.display = "flex"
    stop_timer.style.display = "none"

    clearInterval(count)
}

const randomTips = () => {
    const random_tips = document.getElementById("random_tips")
    const text = ["pilih kematangan telur pada saat air mendidih dan telur sudah di masukan...", "izinkan suara untuk mendengarkan notifikasi ketika timer selesai..."]
    let random = 0

    setInterval(() => {
        random_tips.innerHTML = text[random]
        if(random === 1) {
            random=0
        } else {
            random=1
        }
    }, 5000)
}

randomTips()