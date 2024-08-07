
const inp = document.querySelector('input');
const container = document.getElementById('container');
let newImg = '';

function getImg(data) {
    container.innerHTML = '';
    data.hits.forEach(element => {
        const tags = element.tags.split(', ');

        newImg = `
            <div data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"class="image-box hover:shadow-2xl   rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src="${element.previewURL}" alt="${element.tags}" class="w-32 h-32 object-cover rounded-full mb-4">
                <p class="text-left text-indigo-900 text-xl mb-2">List of tags:</p>
                <p class="tag text-left text-indigo-900 mb-2">${tags[0] || ''}</p>
                <p class="tag text-left text-indigo-700 mb-2">${tags[1] || ''}</p>
                <p class="tag text-left text-indigo-500">${tags[2] || ''}</p>
            </div>
        `;

        container.innerHTML += newImg;
    });
    AOS.refresh();
}

const getData= ()=> {
  
   
    fetch(`https://pixabay.com/api/?key=45168623-8351e73a87aa630977d501608&q=nature&image_type=photo&pretty=true`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(err)
        })
        .then(data => getImg(data))
        .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded', getData);

inp.addEventListener('input', (event) => {
    const temp = event.target.value.toLowerCase();
    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach((box) => {
        const tags = box.querySelectorAll('.tag');
        let shouldDisplay = false;

        tags.forEach((tag) => {
            if (tag.innerText.indexOf(temp) >= 0) {
                shouldDisplay = true;
                let x = tag.innerText
                x = x.replace(temp, '<mark>' + temp + '</mark>')
                tag.innerHTML = x

            }
        });

        box.style.display = shouldDisplay ? 'flex' : 'none';
    });
});






/////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
    });
    const profile = document.getElementById('profile');
    const ring = profile.querySelector('.ring');
    const ringElements = ring.querySelectorAll('.ring-element');
    const pic = profile.querySelector('.pic');
    const logosContainer = pic.querySelector('.logos-container');
    const svgs = logosContainer.querySelectorAll('a'); // Changed from 'svg' to 'a'

    function handleRingMouseEnter() {
        ringElements.forEach((element, index) => {
            let color;
            switch (index) {
                case 0: color = '#00ff0a'; break;
                case 1: color = '#ff0057'; break;
                case 2: color = '#fffd44'; break;
                default: color = '#ffffff';
            }
            element.style.border = `2px solid ${color}`;
            element.style.filter = `drop-shadow(0 0 20px ${color})`;
        });
    }

    function handleRingMouseLeave() {
        ringElements.forEach(element => {
            element.style.border = '2px solid #5b5b5b75';
            element.style.filter = 'none';
        });
    }

    function handlePicMouseEnter() {
        logosContainer.style.opacity = '1';
        logosContainer.style.left = '-70%';
    }

    function handlePicMouseLeave() {
        logosContainer.style.opacity = '0';
        logosContainer.style.left = '-40%';
    }

    ring.addEventListener('mouseenter', handleRingMouseEnter);
    ring.addEventListener('mouseleave', handleRingMouseLeave);
    pic.addEventListener('mouseenter', handlePicMouseEnter);
    pic.addEventListener('mouseleave', handlePicMouseLeave);

    svgs.forEach((link, i) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('svg clicked', link, i);

            let url = '';
            switch (i) {
                case 0: url = 'https://t.me/MahLaNikookar'; break;
                case 1: url = 'https://github.com/nikmahla'; break;
                case 2: url = 'http://linkedin.com/in/fatemeh-nikookar-b00a28291'; break;
            }
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});


AOS.init({
    duration: 1200,
})