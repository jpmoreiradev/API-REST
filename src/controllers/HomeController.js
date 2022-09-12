class HomeController {
  index(req, res) {
    res.json({
      HelloWorld: true,
    });
  }
}

export default new HomeController();
