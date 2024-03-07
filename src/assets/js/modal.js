import Siema from 'siema';
import products from '../products.json';

const cards = document.querySelectorAll('.card');


cards.forEach((card) => {
    card.addEventListener('click', onCardClick);
})


function onCardClick(e) {
    e.preventDefault();

    const body = document.body;
    const card = e.currentTarget;
    const clickedProduct = card.dataset.name;

    const objOfProducts = products.reduce((acc, product) => {
        acc[product.name] = product;
        return acc;
    }, {});
    const productInfo = objOfProducts[clickedProduct];

    if (!(e.target.classList.contains('js-img')
        || e.target.classList.contains('card__img')
        || e.target.classList.contains('card__title')
        || e.target.classList.contains('card__details')
    )) {
        return
    }

    body.classList.add('no-scroll');


    const imagesTemplate = productInfo.modalImages.reduce((acc, img) => {
        acc += ` 
             <div class="modal__img">
                <img class="js-img" src=${img.src} alt=${img.alt}>
            </div>
        `;
        return acc;
    }, '');

    const descriptionTemplate = productInfo.desc.reduce((acc, paragraph) => {
        acc += `<p>${paragraph}</p>`
        return acc;
    }, '');

    const maxAlcohol = 16;
    const maxBitterness = 40;
    const maxDensity = 40;

    const alcoholPercentage = Math.round((productInfo.alcohol / maxAlcohol)*100) || 0;
    const alcoholStyle = `width: ${alcoholPercentage}%`;

    const bitternessPercentage = Math.round((productInfo.bitterness / maxBitterness)*100) || 0;
    const bitternessStyle = `width: ${bitternessPercentage}%`;

    const densityPercentage = Math.round((productInfo.density / maxDensity)*100) || 0;
    const densityStyle = `width: ${densityPercentage}%`;

    const testimonialClass = productInfo.type !== 'alcohol' ? 'd-none' : 'modal__testimonial';

    const cardMeteringClass = productInfo.metering ? '' : 'd-none';

    const instance = basicLightbox.create(`        
        <div class="modal">
            <svg class="modal__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
            <div class="modal__left">
                <div class="siema">                   
                    ${imagesTemplate}; 
                </div>   
                <div class="modal__angle modal__angle--left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </div>
                <div class="modal__angle modal__angle--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                    </svg>
                </div>
            </div>
            
            <div class="modal__right">
                <h2 class="modal__title">${productInfo.title}</h2>
                <h3 class="modal__beertype">${productInfo.subtitle}</h3>
                
                 <div class="modal__price-wrapper">
                     <div class="modal__price">
                       <span>${productInfo.price}</span>
                        <span class=${cardMeteringClass}>за ${productInfo.metering || 0}</span>
                     </div>                   
                      <button class="btn btn--default">Придбати</button>
                 </div>
                    
                <div class=${testimonialClass}>
                  <div class="card__test-item">
                        <h6 class="card__test-title">Міцність</h6>
                        <p class="card__test-value">${productInfo.alcohol || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${alcoholStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Гіркота</h6>
                        <p class="card__test-value">${productInfo.bitterness || '0'} IBU</p>
                        <div class="card__test-progress">
                          <div style='${bitternessStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Щільність</h6>
                        <p class="card__test-value">${productInfo.density || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${densityStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                </div>
                <!--/card__testimonial-->
                <div class="modal__description">
                   ${descriptionTemplate}
                </div>
            </div>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('.modal__close').onclick = instance.close
            document.onkeydown = function (evt) {
                evt = evt || window.event;
                let isEscape = false;
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc");
                } else {
                    isEscape = (evt.keyCode === 27);
                }
                if (isEscape) {
                    instance.close();
                }
            };
        },
        onClose: (instance) => {
            body.classList.remove('no-scroll')
        }
    })

    instance.show();


    //siema - it is slider in modal

    const siema = new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: () => {
            handleArrows();
        },
        onChange: () => {
            handleArrows();
        },
    });

    function handleArrows() {
        const angleLeft = instance.element().querySelector('.modal__angle--left');
        const angleRight = instance.element().querySelector('.modal__angle--right');
        const siemaChildrenCount = instance.element().querySelector('.siema > div').children.length - 1;
        setTimeout(() => {
            if (siemaChildrenCount === siema.currentSlide) {
                angleRight.style.display = 'none';
            } else {
                angleRight.style.display = 'block';
            }

            if (siema.currentSlide === 0) {
                angleLeft.style.display = 'none';
            } else {
                angleLeft.style.display = 'block';
            }
        }, 10)
    }

    const angleLeft = instance.element().querySelector('.modal__angle--left');
    const angleRight = instance.element().querySelector('.modal__angle--right');

    angleLeft.addEventListener('click', () => {
        siema.prev(1);
    });
    angleRight.addEventListener('click', () => {
        siema.next(1);
    });
}






