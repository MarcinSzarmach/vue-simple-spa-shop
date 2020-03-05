const axios = require("axios");
const delay = require("mocker-api/utils/delay");

let cart = []
let products = [{
    name: "Title 1 asd as das das das",
    slug: "title_1",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 2 asd asdas das asdas ",
    slug: "title_2",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 3",
    slug: "title_3",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 4",
    slug: "title_4",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 5",
    slug: "title_5",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 5",
    slug: "title_5",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 5",
    slug: "title_5",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 6",
    slug: "title_6",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 7",
    slug: "title_7",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 8",
    slug: "title_8",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 9",
    slug: "title_9",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  },
  {
    name: "Title 10",
    slug: "title_10",
    description: "Description",
    imageSmall: "http://localhost:8080/assets/images/product.png",
    imageBig: "http://localhost:8080/assets/images/productBig.png",
    long_descriptoin: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus."
  }
]

function getContent(req, res) {
  axios.get('http://localhost:8080/').then(response => {
    res.send(response.data)
  });
}

const APIs = {
  "GET /api/getItemsBySlug/about(.*)": (req, res) => {
    res.json({
      component: "contentBox",
      data: {
        html: `<div class="text-center">
        <div class="iconWrapper">
          <span class="glyphicon glyphicon-user"></span>
        </div>
        <h1 class="h1">ABOUT</h1>
        <br />
        <br />
        <p style="text-align:justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a justo in nisi vulputate eleifend ac eget justo. Duis gravida ligula blandit, congue nibh ut, lacinia odio. Maecenas ac egestas neque. Nulla elementum sollicitudin mi in tempus. Nulla commodo viverra auctor. Mauris varius maximus leo nec placerat. Nunc ornare, ligula nec hendrerit blandit, orci metus porttitor est, eu vulputate ante ligula in risus.</p>
      </div>`
      }
    });
  },
  "GET /api/getItemsBySlug/contact(.*)": (req, res) => {
    res.json({
      component: "contentBox",
      data: {
        html: `<div class="text-center">
        <div class="iconWrapper">
          <span class="glyphicon glyphicon-user"></span>
        </div>
        <h1 class="h1">CONTACT</h1>
        <br />
        <br />
        <a href="mailto:divante@divante.pl">divante@divante.pl</a>
        <br />
        <a href="tel:123 - 456 - 789">tel. 123 - 456 - 789</a>
        <br />
        <a href="tel:123 - 456 - 789">tel. 123 - 456 - 789</a>
        <br />
        <br />
        <span>ul.Dmowskiego 12</span>
        <br />
        <span>00-000 Wrocław</span>
      </div>`
      }
    });
  },
  "GET /api/getItemsBySlug/products": (req, res) => {
    res.json({
      component: "productsBox",
      data: {
        items: products
      }
    });
  },
  "GET /api/getItemsBySlug/:slugProd(.*)": (req, res) => {
    const {
      slugProd
    } = req.params;
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (slugProd == element.slug) {
        return res.json({
          component: "productBox",
          data: {
            product: element
          }
        });
      }
    }
    return res.json({
      component: "error",
    });
  },
  "GET /api/cart/check(.*)": (req, res) => {
    res.json({
      status: true,
      cart
    });
  },
  "POST /api/cart/add(.*)": (req, res) => {
    cart.push(req.body);
    setTimeout(() => {
      res.json({
        status: true,
        cart
      });
    }, 500);
  },
  "GET /product(.*)": getContent,
  "GET /contact(.*)": getContent,
  "GET /tit(.*)": getContent,
  "GET /about(.*)": getContent
}

module.exports = delay(APIs, 1000);