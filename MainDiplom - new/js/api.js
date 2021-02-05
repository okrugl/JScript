const config = {
  startRequest : 'location',
  API: 'https://rickandmortyapi.com/api/',
  pages: {
    location: 'location'
  }
}

let state = {
  location: {
    info: null,
    results: null
  },
  location: {
    info: null,
    results: null
  }
}

let loading = true;

const request = (method, url) => {
  fetch(url ? url : (config.API + method))
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    state[method].info = data.info;
    state[method].results = state[method].results ? state[method].results.concat(data.results) : data.results;
  })
  .then(() => {
    render(method);
  })
  .then(() => {
    loading = true;
  })
}

const render = (page) => {
  const list = document.querySelector(`.${config.pages[page]}`);
  list.innerHTML = '';

  state[page].results.forEach(item => {
    let element = document.createElement('div');
    let wrapperImg = document.createElement('div');
    let avatar = document.createElement('p');
    let name = document.createElement('p');

    element.className = `${config.pages[page]}__item`;

    wrapperImg.className = `${config.pages[page]}__wrapper`;

    avatar.className = `${config.pages[page]}__avatar`;
    avatar.textContent = item.type;

    name.className = `${config.pages[page]}__name`;
    name.textContent = item.name;

    wrapperImg.append(avatar);
    element.append(wrapperImg);
    element.append(name);

    list.append(element);
  });
}

window.onscroll = function() {
  if(loading){
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      request('location', state.location.info.next);
      loading = false;
    }
  }
};

request(config.startRequest);