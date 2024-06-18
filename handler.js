const router = require('express').Router();

router.get("/", function (req, res) {
    res.render("index", {
      title: "Trinity Pharmacare-Home",
      style: "index",
      script: "index",
      currentRoute: "/",
      mainClass: "main_Content",
    });
  });

  router.get("/contact", function (req, res) {
    res.render("contact", {
      title: "Contact",
      style: "contact",
      mainClass: "contact_mainContent",
      currentRoute: "/contact",
      script: "index"
    });
  });

  router.get("/about", function (req, res) {
    res.render("about", {
      title: "About Us",
      style: "about",
      mainClass: "aboutmainsection",
      currentRoute: "/about",
      script: "index"
    });
  });

  router.get("/", function (req, res) {
    res.render("home", {
      title: "Trinity Pharmacare-Home",
      name: "home",
      currentRoute: "/",
      script: true
    });
  });

  router.get("/", function (req, res) {
    res.render("home", {
      title: "Trinity Pharmacare-Home",
      name: "home",
      currentRoute: "/",
      script: true
    });
  });
module.exports = router;