$(window).on("load", start);

function start() {
    console.log("klar");
    $("#framecontainer").addClass("start_baggrund");
    $("#send").addClass("knap_start");
    $("#send").on("click", frame1);
    $("#framecontainer").on("animationend", frame1);
    $("#titelmusik")[0].play();
}

function frame1() {
    console.log("frame1");
    $("#titelmusik")[0].pause();
    $("#framecontainer").addClass("frame1");
    $("#send").removeClass("knap_start");
    $("#framecontainer").on("animationend", frame2);
    $("#keyboard_lyd")[0].play();
    $("#keyboard_lyd")[0].volume = 0;
    $("#keyboard_lyd").animate({
        volume: .3
    }, 10000);
}

function frame2() {
    console.log("frame2");
    $("#titelmusik")[0].pause();
    $("#smaske_lyd")[0].play();
    $("#framecontainer").off("animationend", frame2);
    $("#framecontainer").removeClass("frame1");
    $("#framecontainer").addClass("frame2");
    $("#framecontainer").on("animationend", frame3);

}

function frame3() {
    console.log("frame3");
    $("#titelmusik")[0].pause();
    $("#framecontainer").off("animationend", frame3);
    $("#framecontainer").removeClass("frame2");
    $("#framecontainer").addClass("frame3");
    $("#send").addClass("send_knap");
    $("#slet").addClass("slet_knap");
    $("#slet").on("click", frame11);
    $("#send").on("click", frame4_5);
}

function frame4_5() {
    console.log("frame4_5");
    $("#titelmusik")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#messenger_lyd")[0].play();
    $("#framecontainer").off("animationend", frame4_5);
    $("#framecontainer").removeClass("frame3");
    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").removeClass("frame2");
    $("#framecontainer").addClass("frame4_5");
    $("#framecontainer").on("animationend", frame9);
}

function frame9() {
    console.log("frame9");
    $("#titelmusik")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#power_down_lyd")[0].play();
    $("#framecontainer").off("animationend", frame9);
    $("#framecontainer").removeClass("frame4_5");

    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").addClass("frame9");
    $("#framecontainer").on("animationend", frame8);
}

function frame8() {
    console.log("frame8");
    $("#titelmusik")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#framecontainer").off("animationend", frame8);
    $("#framecontainer").removeClass("frame9");
    $("#framecontainer").removeClass("frame1");
    $("#framecontainer").removeClass("frame3");
    $("#framecontainer").removeClass("frame2");
    $("#framecontainer").removeClass("frame4_5");
    $("#framecontainer").removeClass("start_baggrund");
    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").addClass("frame8");
    $("#framecontainer").on("animationend", frame7);
}

function frame7() {
    console.log("frame7");
    $("#titelmusik")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#politi_lyd")[0].play();
    $("#politi_lyd")[0].volume = 0;
    $("#politi_lyd").animate({
        volume: .7
    }, 10000);
    $("#framecontainer").off("animationend", frame7);
    $("#framecontainer").removeClass("frame8");

    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").addClass("frame7");
    $("#framecontainer").on("animationend", frame10);
}

function frame10() {
    console.log("frame10");
    $("#titelmusik")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#dør_lyd")[0].play();
    $("#framecontainer").off("animationend", frame10);
    $("#framecontainer").removeClass("frame7");

    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").addClass("frame10");
    $("#framecontainer").on("animationend", frame11);
}

function frame11() {
    console.log("frame11");
    $("#titelmusik")[0].pause();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#titelmusik")[0].play();
    $("#framecontainer").off("animationend", frame11);
    $("#framecontainer").removeClass("frame3");
    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").removeClass("frame10");
    $("#framecontainer").addClass("frame11");
    $("#framecontainer").on("animationend", frame12);
}

function frame12() {
    console.log("frame12");
    $("#titelmusik")[0].play();
    $("#keyboard_lyd")[0].pause();
    $("#smaske_lyd")[0].pause();
    $("#framecontainer").off("animationend", frame12);
    $("#framecontainer").removeClass("frame11");
    $("#send").removeClass("send_knap");
    $("#slet").removeClass("slet_knap");
    $("#framecontainer").addClass("frame12");
    $("#framecontainer").on("animationend", frame8);
}
