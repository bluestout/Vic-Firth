class FaqComponent extends HTMLElement {
  constructor() {
    super();
    this.filters = this.querySelectorAll('.filters .filter');
    this.accordians = this.querySelectorAll('.collapsible-content__grid .accordion');
    this.headinglabel = this.querySelector('.collapsible-content__grid .title .label');
    this.initPages();
  }

  initPages() {
    var activeFilterValue;
    var $this = this;
    var $filters = this.filters;
    this.filters.forEach(filter => {
      if (filter.classList.contains('active')) {
        activeFilterValue = filter.dataset.tag;
      }
      filter.addEventListener('click', function (e) {
        e.preventDefault();
        $filters.forEach(filter => {
          filter.classList.remove('active');
        });
        filter.classList.add('active');
        activeFilterValue = filter.dataset.tag;
        $this.changeaccordians(activeFilterValue);
      })
    });
    this.changeaccordians(activeFilterValue);
  }

  changeaccordians(activeFilterValue) {
    this.headinglabel.innerHTML = activeFilterValue;
    this.accordians.forEach(accordian => {
      accordian.classList.remove('active');
      var tag = accordian.querySelector('h2').dataset.tag;
      console.log(activeFilterValue)
      if (tag.trim().indexOf(activeFilterValue.trim()) > -1) {
        console.log(accordian)
        accordian.classList.add('active');
      }
    });
  }
}

customElements.define('faq-component', FaqComponent);


class AnnouncementComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var slider = new Splide(this.slider, {
      type: 'loop',
      perPage: 1,
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 1000,
      drag: false
    });
    slider.mount();
  }
}

customElements.define('announcement-component', AnnouncementComponent);

class ArticleSliderComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var main_slider = new Splide(this.slider, {
      type: 'loop',
      perPage: 1,
      arrows: false,
      pagination: false,
      breakpoints: {
        990: {
          perPage: 1,
          gap    : '10px',
          padding: {right:'5rem'},
        }
      }
    });
    var thumb_slider = new Splide('.article-list', {
      arrows: false,
      pagination: false,
      direction: 'ttb',
      height   : '500px',
      wheel    : false,
      perPage: 3,
      rewind          : true,
      isNavigation    : true,
    })

    main_slider.sync( thumb_slider );
    main_slider.mount();
    thumb_slider.mount();
  }
}

customElements.define('article-slider', ArticleSliderComponent);

class EpisodeSliderComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var main_slider = new Splide(this.slider, {
      type: 'loop',
      perPage: 1,
      arrows: true,
      pagination: false
    });

    main_slider.mount();
  }
}

customElements.define('episode-slider', EpisodeSliderComponent);

class SplideComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var desktop_break = false;
    var mobile_break = false;
    if (!this.slider.classList.contains('splide-desktop')) {
      desktop_break = true
    }
    if (!this.slider.classList.contains('splide-mobile')) {
      mobile_break = true
    }
    var main_slider = new Splide(this.slider, {
      type   : 'loop',
      perPage: 2,
      perMove: 1,
      gap: 20,
      padding: { right: 200},
      pagination: false,
      destroy: desktop_break,
      breakpoints: {
        990: {
          perPage: 1,
          destroy: mobile_break,
          gap    : '10px',
          padding: {right:'5rem'},
        }
      }
    });

    main_slider.mount();
  }
}

customElements.define('splide-component', SplideComponent);

class FeaturedCollectionComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var desktop_break = false;
    var mobile_break = false;
    if (!this.slider.classList.contains('splide-desktop')) {
      desktop_break = true
    }
    if (!this.slider.classList.contains('splide-mobile')) {
      mobile_break = true
    }
    var main_slider = new Splide(this.slider, {
      perPage: 4,
      perMove: 1,
      gap: 10,
      pagination: false,
      destroy: desktop_break,
      breakpoints: {
        990: {
          perPage: 2,
          destroy: mobile_break,
          gap    : '10px',
          padding: {right:'160px'},
        },
        749: {
          perPage: 1,
          destroy: mobile_break,
          gap    : '10px',
          padding: {right:'160px'},
        }
      }
    });

    main_slider.mount();
  }
}

customElements.define('featured-collection-component', FeaturedCollectionComponent);

class articleComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var main_slider = new Splide(this.slider, {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
      gap: 20,
      pagination: false,
      breakpoints: {
        990: {
          perPage: 2,
          padding: {'right': '160px'},
          gap    : '10px'
        },
        749: {
          perPage: 1,
          padding: {'right': '160px'},
          gap    : '10px'
        }
      }
    });

    main_slider.mount();
  }
}

customElements.define('featured-article-component', articleComponent);


class SplideSlideshowComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.splide');
    this.initPages();
  }

  initPages() {
    var $this = this;
    var main_slider = new Splide(this.slider, {
      type   : 'loop',
      autoplay: true,
      perPage: 1,
      lazyLoad: 'sequential'
    });
    main_slider.mount();
  }
}

customElements.define('splide-slideshow-component', SplideSlideshowComponent);


class TabComponent extends HTMLElement {
  constructor() {
    super();
    this.initPages();
  }

  initPages() {
    const tabs = this.querySelectorAll('[data-tab-target]')
    const tabContents = this.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    })
  }
}

customElements.define('tab-component', TabComponent);


document.querySelector('.join-club-btn').addEventListener('click', function (e) {
  e.preventDefault();
  
  window._klOnsite = window._klOnsite || [];
  window._klOnsite.push(['openForm', 'Yh2uVk']);
})

class AudioPlayer extends HTMLElement{
  constructor() {
    super();
    this.global_audios = document.querySelectorAll('audio-player')
    this.audio = this.querySelector('audio');
    this.container = this.querySelector('.container');
    this.audioDuration = this.querySelector('.duration');
    this.playButton = this.querySelector('.play-button');
    this.isPlaying = false;
    this.initPages();
  }
  toggleAudio(event) {
    if (this.isPlaying) {
      this.audio.pause()
      this.isPlaying = false
      this.playButton.classList.remove('playing')
    } else {
      this.global_audios.forEach(audio_section => {
        audio_section.querySelector('audio').pause();
        audio_section.querySelector('.play-button').classList.remove('playing');
      });
      this.audio.play()
      this.isPlaying = true
      this.playButton.classList.add('playing');
      var $this = this;
      this.audio.onended = function() {
        $this.audio.querySelector('.play-button').classList.remove('playing');
      };
    }
    
  }

  initPages() {
    var $this = this;
    this.container.addEventListener('click', function (e) {
      e.preventDefault();
      $this.toggleAudio(e);
    })
  }
}

customElements.define('audio-player', AudioPlayer);

if (document.querySelector('.select-box-menu') != undefined) {
  document.querySelector('.select-box-menu').addEventListener('click', function(e) {
    e.preventDefault();
    this.querySelectorAll('li').forEach(element => {
      element.classList.toggle('show');
    });
  });
  document.querySelectorAll('.select-box-menu li').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      var $this = e.target;
      if (!this.classList.contains('active') | this.classList.contains('tab')) {
        const href = this.querySelector('a').getAttribute('href');
        location = href;
      }
    });
  });
}


document.querySelectorAll('.mega-menu').forEach(mega_menu => {
  mega_menu.querySelector('.mega-menu__content .close').addEventListener('click', function (e) {
    e.preventDefault();
    mega_menu.querySelector('.header__menu-item').click();
  })
});

var country1 = 'US';

fetch('/browsing_context_suggestions.json')
.then(function(response) {
  return response.json();
})
.then(function(e) {
  console.log(e)
  if (e.detected_values.country.handle == country1) {
    document.querySelector('body').classList.remove('hide-price')
  } else {
    document.querySelector('body').classList.add('hide-price')
  }
    
});
