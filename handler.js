const sendEmail = require("./providers/sendContact");
const tryCatch = require("./providers/tryCatch");
const router = require("express").Router();

router.get(
  "/",
  tryCatch(function (req, res) {
    res.render("index", {
      title: "Trinity Pharmacare-Home",
      style: "index",
      currentRoute: "/",
      mainClass: "main_Content",
      script: false
    });
  })
);

router.get(
  "/contact",
  tryCatch(function (req, res) {
    res.render("contact", {
      title: "Contact",
      style: "contact",
      mainClass: "contact_mainContent",
      currentRoute: "/contact",
      script: false
    });
  })
);

router.get(
  "/about",
  tryCatch(function (req, res) {
    res.render("about", {
      title: "About Us",
      style: "about",
      mainClass: "aboutmainsection",
      currentRoute: "/about",
      script: false
    });
  })
);

router.get(
  "/gallery",
  tryCatch(function (req, res) {
    res.render("gallery", {
      title: "Gallery",
      style: "gallery",
      mainClass: "galleryMainContent",
      currentRoute: "/gallery",
      script: "gallery"
    });
  })
);

router.get(
  "/services",
  tryCatch(function (req, res) {
    res.render("services", {
      title: "Services",
      style: "services",
      mainClass: "servicesmainsection",
      currentRoute: "/services",
      script: false
    });
  })
);

router.get(
  "/products",
  tryCatch(function (req, res) {
    res.render("productList", {
      title: "Products",
      style: "productList",
      mainClass: "productmainsetion",
      currentRoute: "/products",
      script: false
    });
  })
);

router.post(
  "/contact",
  tryCatch(async function (req, res) {
    console.log(req.body);
    const { name, email, subject, message } = req.body;
    await sendEmail({ name, email, subject, message });
    res.redirect("/contact");
  })
);

module.exports = router;
