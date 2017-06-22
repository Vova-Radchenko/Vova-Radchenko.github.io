var app = angular.module('registration', []);

app.controller('RegistrController', RegistrController);

function Information (name, email, country, city, facebook, vk, twitter, od, cat) {
    this.name = name;
    this.email = email;
    this.country = country;
    this.city = city;
    this.facebook = facebook;
    this.vk = vk;
    this.twitter = twitter;
    this.od = od;
    this.cat = cat;
}

function RegistrController () {

    // this.inform = {
    //     name: "",
    //     email: ""
    // };


    // this.editorAction = "Create";

    // this.editor = {
    //     name: "",
    //     email: "",
    //     country: "",
    //     city: "",
    //     facebook: "",
    //     vk: "",
    //     twitter: "",
    //     od: "",
    //     cat: ""
    // }

    this.editor1 = {
        name: "",
        email: ""
    }
    this.name = "";
    this.email = "";
    this.addData1 = function (data1) {
        // imform.name = data1.name;
        // inform.email = data1.email;
        name = data1.name;
        email = data1.email;
        // console.log(name);
        // console.log(email);
    }
    this.submit1 = function () {
        this.addData1(this.editor1);
    }

    this.editor2 = {
        country: "",
        city: ""
    }
    this.country;
    this.city;
    this.addData2 = function (data2) {
        country = data2.country;
        city = data2.city;
        // console.log(country);
        console.log(city);
        // console.log('name: ' + name);
    }
    this.submit2 = function () {
        this.addData2(this.editor2);
    }

    this.editor3 = {
        facebook: "",
        vk: "",
        twitter: "",
        od: ""
    }
    this.facebook;
    this.vk;
    this.twitter;
    this.od;
    this.addData3 = function (data3) {
        facebook = data3.facebook;
        vk = data3.vk;
        twitter = data3.twitter;
        od = data3.od;
        // console.log(facebook);
        // console.log(vk);
        // console.log(twitter);
        // console.log(od);
    }
    this.submit3 = function () {
        this.addData3(this.editor3);
    }

    // this.name = 'Vova';
    // this.name;
    // this.addData = function (data) {
    //     name = data.name;
    //     var email = data.email;
    //     var country = data.country;
    //     var city = data.city;
    //     var facebook = data.facebook;
    //     var vk = data.vk;
    //     var twitter = data.twitter;
    //     var od = data.od;
    //     var cat = data.cat;

    //     console.log(name);
    //     // console.log(email);
    //     // console.log(country);
    //     // console.log(city);
    // }

    // this.submit = function () {
    //     this.addData(this.editor);
    // }

    // this.addCat = function (cat) {
    //     // var cat = document.getElementById().src;
    //     var cat = $(cat).attr('src');
    //     console.log(cat);
    // }

    // this.src;
    mas = [1];
    this.masiv = mas;
    // masiv = mas;
    // this.image{
    //     link: ""
    // }
    this.addCat = function () {
        var src;
        var a = function () {
            $('img').click(function () {
                src = $(this).attr('src');
                mas[0] = src;
                console.log('mas: ' + mas[0]);
            });
        }
        a();
        // $('img').click(function () {
        //     src = $(this).attr('src');
        //     // console.log(src);
        //     mas[0] = src;
        //     // this.mas.unshift(src);
        //     console.log('mas: ' + mas[0])
        //     // console.log(mas[0]);
        //     // console.log('link = ' + mas[0]);
        //     // image.link = src;
        //     // console.log('link: ' + image.link);
        //     // return src;
        // });
        // this.mas.unshift(link);
        console.log('masiv: ' + this.masiv[0])
    }
    // $('.findCat .imgCat img')click(function () {
    //     var src = $(this).attr('src');
    //     mas[0] = src;
    //     console.log(src);
    // });
    
}

var Ukraine = ['Kyiv', 'Львов', 'Николаев', 'Переяслав-Хмельницкий','Каменец-Подольский',
 'Donetsk', 'Kharkov', 'Луцк', 'Poltava', 'Черновцы', 'Чернигов'];
var Germany = ['Berlin'];
var France = ['Paris'];
var Spain = ['Madrid'];
var Sweden = ['Stockholm'];
var USA = ['Houston'];
var Canada = ['Montreal'];
var Moldova = ['Кишинев'];
var Belarus = ['Minsk'];
var Poland = ['Warsaw'];


function showNames(v){
    var mas = eval(v);
    var el = document.getElementById('cities');
    while(el.childNodes.length > 0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    }
    for(var i = 0; i < mas.length; i++){
        var opt = document.createElement("option");
        opt.innerHTML = mas[i];
        el.appendChild(opt);
    }
}



$(document).ready(function() {
    $('#cat1').click(function () {

        $('#noDog').removeClass('imgCatDiv');
        $('#noDog').addClass('imgCatDivNo');

        if($(this).attr('class') == 'shadow') {
            $(this).removeClass('shadow');
            $(this).addClass('orangeShadow');
            if ($('#cat2').attr('class') == 'orangeShadow'){
                $('#cat2').removeClass('orangeShadow');
                $('#cat2').addClass('shadow');
            }
            if ($('#cat3').attr('class') == 'orangeShadow'){
                $('#cat3').removeClass('orangeShadow');
                $('#cat3').addClass('shadow');
            }
            if ($('#dog').attr('class') == 'orangeShadow'){
                $('#dog').removeClass('orangeShadow');
                $('#dog').addClass('shadow');
            }
        } else {
            if ($(this).attr('class') == 'orangeShadow') {
                $(this).removeClass('orangeShadow');
                $(this).addClass('shadow');
            }
        }
    });
    $('#cat2').click(function () {

        $('#noDog').removeClass('imgCatDiv');
        $('#noDog').addClass('imgCatDivNo');

        if($(this).attr('class') == 'shadow') {
            $(this).removeClass('shadow');
            $(this).addClass('orangeShadow');
            if ($('#cat1').attr('class') == 'orangeShadow'){
                $('#cat1').removeClass('orangeShadow');
                $('#cat1').addClass('shadow');
            }
            if ($('#cat3').attr('class') == 'orangeShadow'){
                $('#cat3').removeClass('orangeShadow');
                $('#cat3').addClass('shadow');
            }
            if ($('#dog').attr('class') == 'orangeShadow'){
                $('#dog').removeClass('orangeShadow');
                $('#dog').addClass('shadow');
            }
        } else {
            if ($(this).attr('class') == 'orangeShadow') {
                $(this).removeClass('orangeShadow');
                $(this).addClass('shadow');
            }
        }
    });
    $('#cat3').click(function () {

        $('#noDog').removeClass('imgCatDiv');
        $('#noDog').addClass('imgCatDivNo');

        if($(this).attr('class') == 'shadow') {
            $(this).removeClass('shadow');
            $(this).addClass('orangeShadow');
            if ($('#cat2').attr('class') == 'orangeShadow'){
                $('#cat2').removeClass('orangeShadow');
                $('#cat2').addClass('shadow');
            }
            if ($('#cat1').attr('class') == 'orangeShadow'){
                $('#cat1').removeClass('orangeShadow');
                $('#cat1').addClass('shadow');
            }
            if ($('#dog').attr('class') == 'orangeShadow'){
                $('#dog').removeClass('orangeShadow');
                $('#dog').addClass('shadow');
            }
        } else {
            if ($(this).attr('class') == 'orangeShadow') {
                $(this).removeClass('orangeShadow');
                $(this).addClass('shadow');
            }
        }
    });
    $('#dog').click(function () {
        if ($('#noDog').attr('class') == 'imgCatDivNo') {
            $('#noDog').removeClass('imgCatDivNo');
            $('#noDog').addClass('imgCatDiv');
        } else {
            if ($('#noDog').attr('class') == 'imgCatDiv') {
                $('#noDog').removeClass('imgCatDiv');
                $('#noDog').addClass('imgCatDivNo');
            }
        }

        if($(this).attr('class') == 'shadow') {
            $(this).removeClass('shadow');
            $(this).addClass('orangeShadow');
            if ($('#cat2').attr('class') == 'orangeShadow'){
                $('#cat2').removeClass('orangeShadow');
                $('#cat2').addClass('shadow');
            }
            if ($('#cat3').attr('class') == 'orangeShadow'){
                $('#cat3').removeClass('orangeShadow');
                $('#cat3').addClass('shadow');
            }
            if ($('#cat1').attr('class') == 'orangeShadow'){
                $('#cat1').removeClass('orangeShadow');
                $('#cat1').addClass('shadow');
            }
        } else {
            if ($(this).attr('class') == 'orangeShadow') {
                $(this).removeClass('orangeShadow');
                $(this).addClass('shadow');
            }
        }
    });
});

$(document).ready(function () {

    var cat;
    $('.findCat .imgCat img').click(function () {
        // var a = $(this).attr('src');
        cat = $(this).attr('src');
        $('.catImg img').attr('src', $(this).attr('src'));
        // console.log($(''));
    });

    var country;
    var city;
    var facebook;
    var vk;
    var twitter;
    var od;
    

    // Скрипт для перехода по нажатию на цифру
    $('#fromTwoToOne').click(function () {
        $('#second_step').removeClass('block');
        $('#second_step').addClass('none');
        $('#index').removeClass('none');
        $('#index').addClass('block');
    });
    $('#fromThreeToOne').click(function () {
        $('#third_step').removeClass('block');
        $('#third_step').addClass('none');
        $('#index').removeClass('none');
        $('#index').addClass('block');
    });
    $('#fromThreeToTwo').click(function () {
        $('#third_step').removeClass('block');
        $('#third_step').addClass('none');
        $('#second_step').removeClass('none');
        $('#second_step').addClass('block');
    });
    $('#fromFourToOne').click(function () {
        $('#fourth_step').removeClass('block');
        $('#fourth_step').addClass('none');
        $('#index').removeClass('none');
        $('#index').addClass('block');
    });
    $('#fromFourToTwo').click(function () {
        $('#fourth_step').removeClass('block');
        $('#fourth_step').addClass('none');
        $('#second_step').removeClass('none');
        $('#second_step').addClass('block');
    });
    $('#fromFourToThree').click(function () {
        $('#fourth_step').removeClass('block');
        $('#fourth_step').addClass('none');
        $('#third_step').removeClass('none');
        $('#third_step').addClass('block');
    });

    $('#one1').click(function () {

        if ($('#name').val() == '') {
            $('#logo1').removeClass('none');
            $('#logo1').addClass('block');
        }
        if ( $('#name').val() != '' ){
            $('#logo1').removeClass('block');
            $('#logo1').addClass('none');
        }

        if ($('#email').val() == '') {
            $('#logo2').removeClass('none');
            $('#logo2').addClass('block');
        }
        var adr_patern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
        if (adr_patern.test($('#email').val()) == false && $('#email').val() != '') {
            $('#logo2_1').removeClass('none');
            $('#logo2_1').addClass('block');
            $('#logo2').removeClass('block');
            $('#logo2').addClass('none');
        }

        if ($('#name').val() != '' && adr_patern.test($('#email').val()) == true) {
            $('#index').removeClass('block');
            $('#index').addClass('none');
            $('#second_step').removeClass('none');
            $('#second_step').addClass('block');
        }

        // $('#index').removeClass('block');
        // $('#index').addClass('none');
        // $('#second_step').removeClass('none');
        // $('#second_step').addClass('block');
    });

    // 

    $('#two2').click(function () {

        if ($('#countries option:selected').text() == '') {
            $('#logo3').removeClass('none');
            $('#logo3').addClass('block');
        }
        if ($('#countries option:selected').text() != '') {
            $('#logo3').removeClass('block');
            $('#logo3').addClass('none');
        }

        if ($('#cities option:selected').text() == '') {
            $('#logo4').removeClass('none');
            $('#logo4').addClass('block');
        }
        if ($('#cities option:selected').text() != '') {
            $('#logo4').removeClass('block');
            $('#logo4').addClass('none');
        }

        if ($('#countries option:selected').text() != '') {
            $('#second_step').removeClass('block');
            $('#second_step').addClass('none');
            $('#third_step').removeClass('none');
            $('#third_step').addClass('block');
            console.log($('#countries option:selected').text() + ' ' + $('#cities option:selected').text());
            country = $('#countries option:selected').text();
            city = $('#cities option:selected').text();
            $('.city').html(city + ', ' + country)
        }

        // $('#second_step').removeClass('block');
        // $('#second_step').addClass('none');
        // $('#third_step').removeClass('none');
        // $('#third_step').addClass('block');
    });
    $('#two2Back').click(function () {
        $('#second_step').removeClass('block');
        $('#second_step').addClass('none');
        $('#index').removeClass('none');
        $('#index').addClass('block');
    });

    // 

    $('#three3').click(function () {
        $('#third_step').removeClass('block');
        $('#third_step').addClass('none');
        $('#fourth_step').removeClass('none');
        $('#fourth_step').addClass('block');

        if ($('.inputBlock .facebookin').val() == '') {
            // $('#facebookLast').addClass('none');
            $('#facebookLast').remove();
            $('#facebookBr').remove();
        }
        if ($('.inputBlock .facebookin').val() != '') {
            facebook = $('.inputBlock .facebookin').val();
            $('#facebookLast span').html(facebook);
        }

        if ($('.inputBlock .vkin').val() == '') {
            $('#vkLast').remove();
            $('#vkBr').remove();
        }
        if ($('.inputBlock .vkin').val() != '') {
            vk = $('.inputBlock .vkin').val();
            $('#vkLast span').html(vk);
        }

        if ($('.inputBlock .twitterin').val() == '') {
            // $('#twitterLast').addClass('none');
            $('#twitterLast').remove();
            $('#twitterBr').remove();
        }
        if ($('.inputBlock .twitterin').val() != '') {
            twitter = $('.inputBlock .twitterin').val();
            $('#twitterLast span').html(twitter);
        }

        if ($('.inputBlock .odin').val() == '') {
            // $('#odLast').addClass('none');
            $('#odLast').remove();
        }
        if ($('.inputBlock .odin').val() != '') {
            od = $('.inputBlock .odin').val();
            $('#odLast span').html(od);
        }

    });
    $('#three3Back').click(function () {
        $('#third_step').removeClass('block');
        $('#third_step').addClass('none');
        $('#second_step').removeClass('none');
        $('#second_step').addClass('block');
    });

    // 

    $('#four4').click(function () {

        if (cat != 'img/dog4.jpg' && cat != '') {
            $('#fourth_step').removeClass('block');
            $('#fourth_step').addClass('none');
            $('#final_step').removeClass('none');
            $('#final_step').addClass('block');
        }
        // $('#fourth_step').removeClass('block');
        // $('#fourth_step').addClass('none');
        // $('#final_step').removeClass('none');
        // $('#final_step').addClass('block');
    });
    $('#four4Back').click(function () {
        $('#fourth_step').removeClass('block');
        $('#fourth_step').addClass('none');
        $('#third_step').removeClass('none');
        $('#third_step').addClass('block');
    });

    $('#goToOne').click(function () {
        // $('#final_step').removeClass('block');
        // $('#final_step').addClass('none');
        // $('#index').removeClass('none');
        // $('#index').addClass('block');
        location.reload();
    });
});
