const router = require('express').Router();

router.get("/", function (req, res) {
    res.render("index", {
      title: "Trinity Pharmacare-Home",
      style: "index",
      currentRoute: "/",
      mainClass: "main_Content",
      script: false
    });
  });

  router.get("/contact", function (req, res) {
    res.render("contact", {
      title: "Contact",
      style: "contact",
      mainClass: "contact_mainContent",
      currentRoute: "/contact",
      script: false
    });
  });

  router.get("/about", function (req, res) {
    res.render("about", {
      title: "About Us",
      style: "about",
      mainClass: "aboutmainsection",
      currentRoute: "/about",
      script: false
    });
  });

  router.get("/gallery", function (req, res) {
    res.render("gallery", {
      title: "Gallery",
      style: "gallery",
      mainClass: "galleryMainContent",
      currentRoute: "/gallery",
      script: "gallery"
    });
  });

  router.get("/services", function (req, res) {
    res.render("services", {
      title: "Services",
      style: "services",
      mainClass: "servicesmainsection",
      currentRoute: "/services",
      script: false
    });
  });

  router.get("/products", function (req, res) {
    res.render("productList", {
      title: "Products",
      style: "productList",
      mainClass: "productmainsetion",
      currentRoute: "/products",
      script: false
    });
  });
module.exports = router;