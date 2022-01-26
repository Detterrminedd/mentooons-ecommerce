"use strict";
const dataFriendship = [
  {
    name: "Friendship",
    price: "₹29",
    description: "Know the value of friendship",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jcp4b680/poster/d/g/g/medium-netflix-narcos-tv-series-posters-for-home-office-love0194-original-imaffpj2kh7nfrff.jpeg?q=70",
  },
  {
    name: "Love",
    price: "₹29",
    description: "Know the value of love",
    image:
      "https://vsmoviepodcast.com/wp-content/uploads/2021/09/Kate-poster-Courtesy-of-Netflix.jpg",
  },
  {
    name: "health",
    price: "₹29",
    description: "Know the value of health",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNqGlSMNRfoU1uJjLSdkv63o3zWdw5cfSAw&usqp=CAU",
  },
  {
    name: "happiness",
    price: "₹29",
    description: "Know the value of happiness",
    image:
      "https://cdn.shopify.com/s/files/1/0969/9128/products/LOEV-NetflixMoviePosters_d8cebd66-4b88-4732-8292-a1a39f9df460.jpg?v=1625220708",
  },
  {
    name: "knowledge",
    price: "₹29",
    description: "Know the value of knowledge",
    image:
      "https://i.pinimg.com/originals/07/aa/75/07aa7580d9ce8dca0db8d2f3d7c35eec.png",
  },
  {
    name: "hope",
    price: "₹29",
    description: "Know the value of hope",
    image:
      "https://i.pinimg.com/originals/ff/25/f5/ff25f5b314b5dd126fb17e49d6627eab.png",
  },
];

for (let i = 0; i < dataFriendship.length; i++) {
  let item = dataFriendship[i];
  let cardHealth = `
          <div class="item1">
            <div>
              <img
                src="${item.image}"
              />
            </div>
            <div>
              <p>${item.description}</p>
            </div>
            <div>
            <button type="button" class="btn btn-outline-success">Buy ${item.price}</button>
            </div>
          </div>
  `;
  //   console.log(cardHealth, "shabir");
  document.getElementById("datas-friendship").innerHTML += cardHealth;
}

const dataHealth = [
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image: "https://static2.showtimes.com/poster/540x800/xoxo-netflix-7405.jpg",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image:
      "https://i.pinimg.com/736x/87/d3/21/87d321f315d4b262aaf8a0a01b894920.jpg",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2021/02/To-All-The-Boys-Always-and-Forever-movie-poster.png",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51LOEWQ3jXL.jpg",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image:
      "https://cdn.cinematerial.com/p/297x/vnbrstx0/ginny-georgia-movie-poster-md.jpg?v=1612432627",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/05/army-of-the-dead-poster.jpeg",
  },
  {
    name: "Health",
    price: "₹29",
    description: "Know the value of Health",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jcp4b680/poster/d/g/g/medium-netflix-narcos-tv-series-posters-for-home-office-love0194-original-imaffpj2kh7nfrff.jpeg?q=70",
  },
];

for (let i = 0; i < dataHealth.length; i++) {
  let item = dataHealth[i];
  let cardHealth = `
            <div class="item1">
              <div>
                <img
                  src="${item.image}"
                />
              </div>
              <div>
                <p>${item.description}</p>
              </div>
              <div>
              <button type="button" class="btn btn-outline-success">Buy ${item.price}</button>
              </div>
            </div>
    `;
  //   console.log(cardHealth, "shabir");
  document.getElementById("datas-health").innerHTML += cardHealth;
}

const dataMoral = [
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://cdn.justjared.com/wp-content/uploads/2020/08/enola-poster/millie-bobby-brown-enola-holmes-poster-06.jpg",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://i.pinimg.com/736x/be/1e/d6/be1ed6c1b7c8015a379ab983277278fb.jpg",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmW3jc6ehMItfLW2-B-Om2g40tiDUblTrF_A&usqp=CAU",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://cdn.cinematerial.com/p/297x/btaulhaw/hogar-spanish-movie-poster-md.jpg?v=1586782312",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://cdn.cinematerial.com/p/297x/jwqwceyo/american-factory-movie-poster-md.jpg?v=1565930430",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/05/army-of-the-dead-poster.jpeg",
  },
  {
    name: "Moral values",
    price: "₹29",
    description: "Know the value of Moral values",
    image:
      "https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg",
  },
];

for (let i = 0; i < dataMoral.length; i++) {
  let item = dataMoral[i];
  let cardMoral = `
              <div class="item1">
                <div>
                  <img
                    src="${item.image}"
                  />
                </div>
                <div>
                  <p>${item.description}</p>
                </div>
                <div>
                <button type="button" class="btn btn-outline-success">Buy ${item.price}</button>
                </div>
              </div>
      `;
  //   console.log(cardMoral, "shabir");
  document.getElementById("datas-moral").innerHTML += cardMoral;
}

const dataTopSell = [
  {
    image:
      "https://sportshub.cbsistatic.com/i/2021/10/01/571809de-232f-438a-a94f-1ff984fb711c/army-of-thieves-poster.jpg?auto=webp&width=928&height=1374&crop=0.675:1,smart",
  },
  {
    image:
      "https://storage.googleapis.com/stateless-campfire-pictures/2019/02/Netfli-You-Key-Art-Movie-Poster.jpg",
  },
  {
    image:
      "https://image.tmdb.org/t/p/w220_and_h330_face/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
  },
  {
    image:
      "https://static2.showtimes.com/poster/660x980/shadow-and-bone-netflix-152483.jpg",
  },
  {
    image:
      "https://image.tmdb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
  },
  {
    image:
      "https://media.comicbook.com/2020/05/the-old-guard-1221464.jpeg?auto=webp&width=1080&height=1920&crop=1080:1920,smart",
  },
  {
    image:
      "//image.tmdb.org/t/p/w220_and_h330_face/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg",
  },
  {
    image:
      "//image.tmdb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
  },
  {
    image:
      "https://assets-prd.ignimgs.com/2021/07/25/army-of-thieves-poster-1627253133299.jpg?w=640",
  },
];

for (let i = 0; i < dataTopSell.length; i++) {
  let item = dataTopSell[i];
  let cardTopSell = `
  <div class="item">
  <img
  src="${item.image}"
  />
  <div>${[i + 1]}</div>
</div>
        `;
  //   console.log(cardTopSell, "shabir");
  document.getElementById("datas-top-selling").innerHTML += cardTopSell;
}
