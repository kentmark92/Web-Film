const totalFilms = [
    {
        title: 'A Nightmare on Elm Street',
        img: '../asset/img/kinh_di/a_nightmare_on_elm_street.jpeg',
        the_loai: "kinh_di"
        
    },
    {
        title: 'A Quiet Place',
        img: '../asset/img/kinh_di/a_quiet_place.jpg',
        the_loai: "kinh_di"
    },
    {
        title: 'Annabelle',
        img: '../asset/img/kinh_di/annabelle.jpg',
        the_loai: "kinh_di"
    },
    {
        title: 'Stranger',
        img: '../asset/img/kinh_di/B3556.jpg',
        the_loai: "kinh_di"
    },
    {
        title: 'Insidious',
        img: '../asset/img/kinh_di/insidious-3-poster-1.jpg',
        the_loai: "kinh_di"
    },
    {
        title: 'REC',
        img: '../asset/img/kinh_di/REC.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'Scream',
        img: '../asset/img/kinh_di/scream.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'Sinisters',
        img: '../asset/img/kinh_di/Sinister.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'The Conjuring',
        img: '../asset/img/kinh_di/the_conjuring.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'The Exorcist',
        img: '../asset/img/kinh_di/the_exorcist.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'The Ring',
        img: '../asset/img/kinh_di/the_ring.jpeg',
        the_loai: "kinh_di"
    },
    {
        title: 'The Silence of The Lambs',
        img: '../asset/img/kinh_di/the_silence_of_the_lambs.jpeg',
        the_loai: "kinh_di"
    },
    
    {
        title: '6 Underground',
        img: '../asset/img/hanh_dong/6underground.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Along With the Gods',
        img: '../asset/img/hanh_dong/Along_With_the_Gods_The_Two_Worlds.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'American Sniper',
        img: '../asset/img/hanh_dong/american_sniper.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Bad Boys for Life',
        img: '../asset/img/hanh_dong/bad_boys_for_life.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Chinese Zodiac',
        img: '../asset/img/hanh_dong/chinese_zodiac.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Election',
        img: '../asset/img/hanh_dong/election.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Extraction',
        img: '../asset/img/hanh_dong/extraction.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Fast & Furious 7',
        img: '../asset/img/hanh_dong/fast_&_furious_7.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Mission Impossible',
        img: '../asset/img/hanh_dong/mission_impossible.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'Momo Upload',
        img: '../asset/img/hanh_dong/momo_upload.jpeg',
        the_loai: "hanh_dong"
    },
    {
        title: 'The Constable',
        img: '../asset/img/hanh_dong/the_constable.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'The Man From Nowhere',
        img: '../asset/img/hanh_dong/the_man_from_nowhere.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'hjfgah',
        img: '../asset/img/hanh_dong/1.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'hjfgah',
        img: '../asset/img/hanh_dong/1.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'hjfgah',
        img: '../asset/img/1/nguoi_nhen.png',
        the_loai: "hanh_dong",
        the_loai: "kiem_hiep"
    },
]
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const the_loai = urlParams.get('the_loai')
console.log(the_loai);
const the_loaihd = totalFilms.filter(hd => hd.the_loai==the_loai)
console.log(the_loaihd);
{/* <div><a href="#"><img src="../asset/img/1.jpg" alt=""></a></div> */}
// tạo element để hiển thị ra web

the_loaihd.forEach(filmhd => {
    const div_element = document.createElement('div');
    const a_element = document.createElement('a');
    const img_element = document.createElement('img');
    const p_element = document.createElement('p');
    img_element.src=filmhd.img;
    p_element.innerHTML=filmhd.title;
    div_element.appendChild(a_element);
    a_element.appendChild(img_element);
    a_element.appendChild(p_element);
    const content_item = document.getElementsByClassName('content-item')[0];
    console.log(content_item);
    content_item.appendChild(div_element)
});