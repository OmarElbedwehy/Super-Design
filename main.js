let burger_menu = document.querySelector(".burger_ico");
let nav_menu = document.querySelector("header .container ul");

burger_menu.addEventListener("click", ()=>{
    nav_menu.classList.toggle("open");
    burger_menu.classList.toggle("trans")
})

let settings_box = document.querySelector(".settings-box");
let settings_toggle = document.querySelector(".settings-toggle");
let close_setting_box = document.querySelector(".close_setting_box");

settings_toggle.addEventListener("click", ()=>{
    settings_box.classList.toggle("drag");
    settings_box.style.overflowX = "hidden";
    setTimeout(()=>{
        close_setting_box.classList.add("_display");
    }, 500)
})

close_setting_box.addEventListener("click", ()=>{
    settings_box.classList.toggle("drag");
    settings_box.style.overflow = "unset";
    close_setting_box.classList.remove("_display");
})

const addMsg = (msg)=>{
    let msg_text = document.querySelector(".msg_text");
    let msg_ele = document.querySelector(".msg");
    msg_text.innerHTML = msg;
    msg_ele.style.animation = "show_msg 1s linear forwards";
    let msg_time_out = setTimeout(()=>{
        msg_ele.style.animation = "hide_msg 1s linear forwards";
    }, 6000)
}

let li_colors = document.querySelectorAll(".colors-list li")

li_colors.forEach((ele)=>{
    let color = ele.dataset.color;
    ele.style.backgroundColor = color;
    ele.addEventListener("click", (e)=>{
        li_colors.forEach((el)=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active")
        let set_color = e.target.dataset.color;
        document.documentElement.style.setProperty("--main-color", set_color);
        addMsg(`<span style="color: ${set_color}">${set_color}</span> set as main color`);
    })
})

document.querySelector("#color").addEventListener("input", (e)=>{
    let set_color = e.target.value;
    document.documentElement.style.setProperty("--main-color", set_color);
    addMsg(`<span style="color: ${set_color}">${set_color}</span> set as main color`)
})

const Random_imgs = ()=>{
    let imgs = ["./imgs/01.jpg", "./imgs/02.jpg", "./imgs/03.jpg", "./imgs/04.jpg", "./imgs/05.jpg"]
    let random_num = Math.floor(Math.random() * 5);
    document.querySelector(".landing").style.backgroundImage = `url(${imgs[random_num]})`;
}

let random_interval = setInterval(()=>{
    Random_imgs();
}, 5000)

let btns_bg = document.querySelectorAll(".landing .settings-box .option-box .btns_bg a");

btns_bg.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        btns_bg.forEach((el)=>{
            el.classList.remove("active_btn")
        })
        e.target.classList.add("active_btn")
        let choose = e.target.dataset.choose;
        if (choose == "yes"){
            const Random_imgs = ()=>{
                let imgs = ["./imgs/01.jpg", "./imgs/02.jpg", "./imgs/03.jpg", "./imgs/04.jpg", "./imgs/05.jpg"]
                let random_num = Math.floor(Math.random() * 5);
                document.querySelector(".landing").style.backgroundImage = `url(${imgs[random_num]})`;
            }
            let random_interval = setInterval(()=>{
                Random_imgs();
            }, 5000);
            addMsg(`Random Background <span class="green">Activated</span>`)
        }else{
            clearInterval(random_interval)
            addMsg(`Random Background <span class="red">Disabled</span>`)
        }
    })
})

let btns_bullets = document.querySelectorAll(".landing .settings-box .option-box .btns_bullets a");

btns_bullets.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        btns_bullets.forEach((el)=>{
            el.classList.remove("active_btn")
        })
        e.target.classList.add("active_btn");
        let choose = e.target.dataset.choose;
        if (choose == "yes"){
            document.querySelector(".bullets").style.display = "block";
            addMsg(`Bullets <span class="green">Shown</span>`)
        }else{
            document.querySelector(".bullets").style.display = "none";
            addMsg(`Bullets <span class="red">Hidden</span>`)
        }
    })
})

// ACCORDIONS EVENTS

document.querySelectorAll(".accord").forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        let target_ele = e.target.parentElement.parentElement.querySelector(".option");
        target_ele.classList.toggle("_display");
        setTimeout(()=>{
            target_ele.classList.toggle("active-option");
            if (target_ele.classList.contains("active-option")){
                target_ele.style.height = `${target_ele.scrollHeight}px`;
            }else{
                target_ele.style.height = 0;
            }
        }, 100)
        
        e.target.parentElement.parentElement.querySelector(".fa-caret-down").classList.toggle("rotate")
    })
})

// EDIT TEXT IN PAGE

// LOGO

document.querySelector("#logo_input").addEventListener("input", (e)=>{
    document.querySelector("header h3").textContent = e.target.value;
    addMsg(`Logo text changed to <span style="color: var(--main-color)">${e.target.value}`);
})

// INTO HEADING

document.querySelector("#intro_heading_input").addEventListener("input", (e)=>{
    document.querySelector(".introduction-txt h1").textContent = e.target.value;
    addMsg(`Intro heading text changed to <span style="color: var(--main-color)">${e.target.value}`)
})

// INTRO TEXT

document.querySelector("#intro_text_input").addEventListener("input", (e)=>{
    document.querySelector(".introduction-txt p").textContent = e.target.value;
    addMsg(`Intro text changed to <span style="color: var(--main-color)">${e.target.value}`)
})

// ABOUT TEXT

document.querySelector("#about_text_input").addEventListener("input", (e)=>{
    document.querySelector(".about .text p").textContent = e.target.value;
    addMsg(`About text changed to <span style="color: var(--main-color)">${e.target.value}`)
})

// TIMELINE TEXT CONTENT

document.querySelectorAll("#timeline_inputs input").forEach((ele)=>{
    ele.addEventListener("input", (e)=>{
        let content_id = e.target.dataset.contentid;
        if (e.target.id == "heading"){
            document.querySelector(`#content-${content_id} h3`).textContent = e.target.value;
        }else{
            document.querySelector(`#content-${content_id} p`).textContent = e.target.value;
        }
    })
})

// PRECENTAGE WIDTH ON SCROLL

window.onscroll = ()=>{
    if (window.scrollY >= document.querySelector(".skills").offsetTop-300){
        document.querySelectorAll(".skills .skill .precent span").forEach((ele)=>{
            let precent = ele.dataset.width;
            ele.style.width = precent;
        })
    }else{
        document.querySelectorAll(".skills .skill .precent span").forEach((ele)=>{
            ele.style.width = 0;
        })
    }
    // SHOW SCROLL TO TOP
    if (window.scrollY >= document.querySelector(".about").offsetTop){
        document.querySelector(".scroll_to_top").style.right = "15px";
    }else{
        document.querySelector(".scroll_to_top").style.right = "-60px";
    }
}

// SHOW CLICKED IMAGE

let imgs_cards = document.querySelectorAll(".gallery .card");

imgs_cards.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        let img_title = e.target.parentElement.querySelector("h3").textContent;
        let img_src = e.target.parentElement.querySelector("img").src;
        document.querySelector(".img_pop_up .content h2").textContent = img_title;
        document.querySelector(".img_pop_up .content img").src = img_src;
        document.querySelector(".img_pop_up").classList.add("active");
    })
})

// CLOSE IMG POP UP

document.querySelector(".img_pop_up .close").addEventListener("click", ()=>{
    document.querySelector(".img_pop_up").classList.remove("active")
})

// LOOP ON BULLETS ELEMENTS TO GO TO DATA SECTION

document.querySelectorAll(".bullets li").forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        let section = e.target.dataset.section;
        window.scrollTo({
            top: document.querySelector(`${section}`).offsetTop,
            behavior: "smooth",
        })
    })
})

document.querySelectorAll(".nav-links li a").forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        let section = e.target.dataset.section;
        window.scrollTo({
            top: document.querySelector(`${section}`).offsetTop,
            behavior: "smooth",
        })
    })
})

const saveChanges = ()=>{
    window.localStorage.setItem("mainColor", window.getComputedStyle(document.documentElement).getPropertyValue("--main-color"));
    window.localStorage.setItem("randomBg", document.querySelector(".btns_bg .active_btn").dataset.choose);
    window.localStorage.setItem("stopingBg", document.querySelector(".landing").style.backgroundImage)
    window.localStorage.setItem("bullets", document.querySelector(".btns_bullets .active_btn").dataset.choose);
}

window.addEventListener("beforeunload", ()=>{
    saveChanges();
})

if (window.localStorage.getItem("mainColor")){
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("mainColor"))
}

if (window.localStorage.getItem("randomBg")){
    let choose = window.localStorage.getItem("randomBg");
    document.querySelectorAll(".btns_bg a").forEach((ele)=>{
        ele.classList.remove("active_btn");
        if (ele.dataset.choose == choose){
            ele.classList.add("active_btn")
        }
    })
    if (choose == "yes"){
        const Random_imgs = ()=>{
            let imgs = ["./imgs/01.jpg", "./imgs/02.jpg", "./imgs/03.jpg", "./imgs/04.jpg", "./imgs/05.jpg"]
            let random_num = Math.floor(Math.random() * 5);
            document.querySelector(".landing").style.backgroundImage = `url(${imgs[random_num]})`;
        }
        Random_imgs()
    }else{
        document.querySelector(".landing").style.backgroundImage = window.localStorage.getItem("stopingBg")
        clearInterval(random_interval);
    }
}

if (window.localStorage.getItem("bullets")){
    let choose = window.localStorage.getItem("bullets");
    document.querySelectorAll(".btns_bullets a").forEach((ele)=>{
        ele.classList.remove("active_btn");
        if (ele.dataset.choose == choose){
            ele.classList.add("active_btn");
        }
    })
    if (choose == "yes"){
        document.querySelector(".bullets").style.display = "block";
    }else{
        document.querySelector(".bullets").style.display = "none";
    }   
}

// RESET OPTIONS

document.querySelector(".reset_options").addEventListener("click", () =>{
    window.localStorage.clear();
    document.documentElement.style.setProperty("--main-color", "#FF9800");
    document.querySelectorAll(".btns_bg a").forEach((ele)=>{
        ele.classList.remove("active_btn")
    })
    document.querySelector(".btns_bg a:first-child").classList.add("active_btn");
    const Random_imgs = ()=>{
        let imgs = ["./imgs/01.jpg", "./imgs/02.jpg", "./imgs/03.jpg", "./imgs/04.jpg", "./imgs/05.jpg"]
        let random_num = Math.floor(Math.random() * 5);
        document.querySelector(".landing").style.backgroundImage = `url(${imgs[random_num]})`;
    }
    const random_interval = setInterval(()=>{
        Random_imgs();
    }, 5000)
    document.querySelectorAll(".btns_bullets a").forEach((ele)=>{
        ele.classList.remove("active_btn")
    })
    document.querySelector(".btns_bullets a:first-child").classList.add("active_btn");
    document.querySelector(".bullets").style.display = "block";
})

// SCROLL TO TOP

document.querySelector(".scroll_to_top").addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

