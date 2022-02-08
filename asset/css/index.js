const totalFilms = [
    {
        title: 'hjfgah',
        img: './asset/img/4.jpg',
        the_loai: "hai_huoc"
    },
    {
        title: 'hjfgah',
        img: '/asset/img/1.jpg',
        the_loai: "hanh_dong"
    },
    {
        title: 'hjfgah',
        img: '/asset/img/1/nguoi_nhen.png',
        the_loai: "hanh_dong"
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
// const div_element = document.createElement('div');
// const a_element = document.createElement('a');
// const img_element = document.createElement('img');
// img_element.src='/asset/img/1/nguoi_nhen.png';
// div_element.appendChild(a_element);
// a_element.appendChild(img_element);
// const content_item = document.getElementsByClassName('content-item')[0];
// console.log(content_item);
// content_item.appendChild(div_element)

the_loaihd.forEach(filmhd => {
    const div_element = document.createElement('div');
    const a_element = document.createElement('a');
    const img_element = document.createElement('img');
    img_element.src=filmhd.img;
    div_element.appendChild(a_element);
    a_element.appendChild(img_element);
    const content_item = document.getElementsByClassName('content-item')[0];
    console.log(content_item);
    content_item.appendChild(div_element)
});