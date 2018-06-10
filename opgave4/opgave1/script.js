$(window).on("load", start);

function start() {
    console.log("klar");
    $("#framecontainer").addClass("start_baggrund");
    $("#valg1").addClass("knap_start");
    $("#valg1").on("click", frame1);
    $("#framecontainer").on("animationend", frame1);
}

function frame1() {
    console.log("frame1");
    $("#framecontainer").addClass("baggrund");
    $("#forgrund").addClass("forgrund");
    $("#bål").addClass("bål");
    $("#figur1").addClass("figur1");
    $("#figur2").addClass("figur2");
    $("#valg1").removeClass("knap_start");
    $("#framecontainer").on("animationend", frame2);
}

function frame2() {
    console.log("frame2");
    $("#framecontainer").off("animationend", frame1);
    $("#valg1").addClass("valg1");
    $("#valg2").addClass("valg2");
    $("#valg1").on("click", frame3);
    $("#valg2").on("click", frame4);
}

function frame3() {
    console.log("frame3");
    $("#framecontainer").off("animationend", frame2);
    $("#valg1").removeClass("valg1");
    $("#valg2").removeClass("valg2");
    $("#figur1").addClass("figur1_2");
    $("#framecontainer").on("animationend", start);
}


function frame4() {
    console.log("frame4");
    $("#framecontainer").off("animationend", frame3);
    $("#valg1").removeClass("valg1");
    $("#valg2").removeClass("valg2");
    $("#figur1").addClass("figur1_3");
    $("#framecontainer").on("animationend", start);
}
