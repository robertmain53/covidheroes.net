let killOffer;
let emailTo;
let ID;
const matchHtmlRegExp = /["'&<>]/;

window.onload = () => {
  const base = `${window.location.origin}/v1/`;
  if (localStorage.getItem('name')) {
    let offerList;
    killOffer = (id) => {
      postData(`${base}offer/remove`, {
        id,
      }).then((data) => {});
    };

    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return await response.text(); // parses JSON response into native JavaScript objects
    }

    fetch(`${window.location.origin}/v1/offer`)
      .then((res) => res.json())
      .then((body) => {
        const urlParams = new URLSearchParams(window.location.search);
        const reqId = urlParams.get('id');
        const offer = body.offerList.find(offer => offer.id === reqId);
        document.querySelector('#reqid').innerText = `Request: #${esc(DOMPurify.sanitize(reqId))}`;
        const { title, author, date, tags, email, id } = offer;
        document.querySelector('#item').value = title;
        document.querySelector('#author').value = author;
        document.querySelector('#date').value = date;
        document.querySelector('#quantity').value = tags;
        emailTo = email;
        ID = id;
        offerList = body.offerList.reverse();
      });

    document.querySelector('#req').onsubmit = () => {
      if (localStorage.getItem(ID)) {
        alert(`You've already fulfilled this request!`)
        return false;
      };
      localStorage.setItem(ID, 'fullfilled');
      postData(`${base}fire`, {
        emailTo,
        nameFrom: esc(DOMPurify.sanitize(localStorage.getItem('name'))),
        emailFrom: esc(DOMPurify.sanitize(localStorage.getItem('email'))),
        phoneFrom: esc(DOMPurify.sanitize(localStorage.getItem('phone'))),
      }).then((data) => {
        location.reload();
      });
      document.querySelector('#fulfill').disabled = true;
      return false;
    };
    if (localStorage.getItem(ID)) document.querySelector('#fulfill').disabled = true;
  } else {
    window.location = `${window.location.origin}/login`;
  }
};

function esc(string) {
  const str = `${string}`;
  const match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str
  }

  let escape;
  let html = '';
  let index = 0;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}

function enable() {
  document.querySelector('#submit').disabled = false;
}