let girl = [
    {
        surname: 'Nguyễn Ngọc',
        name: 'Hiếu',
        img: './info/Hieu.jpg',
        desc: 'Info page'
    },
    {
        surname: 'Mai Thanh',
        name: 'Hải',
        img: './info/MTHai.jpg',
        desc:'Trang thông tin phim'
    },
    {
        surname: 'Vũ Quang',
        name: 'Vinh',
        img: './info/Vinh.png',
        desc:'Trang đăng kí'
    },
    {
        surname: 'Đăng',
        name: 'Khoa',
        img: './info/Dangkhoa.jpg',
        desc:'Trang đăng nhập'
    },
    {
        surname: 'Huỳnh Phước',
        name: 'Thịnh',
        img: './info/HPThinh.jpg',
        desc:'Trang chủ, Danh sách phim '
    },
];
let picture = document.querySelectorAll('.effect-sarah');
picture.forEach((element, index) => {
    element.lastElementChild.firstElementChild.prepend(girl[index].surname + ' ');
    element.lastElementChild.firstElementChild.firstElementChild.innerText = girl[index].name;
    element.firstElementChild.src = girl[index].img;
    element.addEventListener('click', () => {
        Swal.fire({
            title: `<h2 class="name">${girl[index].surname} ${girl[index].name}<h2>`,
            html: 
            `<p class="desc">${girl[index].desc}</p>`
            ,
            
            padding: '1em',
            background: '#fff url(/images/trees.png)',
            
            
        
        })
    })
})



