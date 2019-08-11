module.exports = app => {
  const { router, controller } = app;
  router.post('/up', controller.up.getOrCreateUser);
  router.post('/up/page/create', controller.up.createPage);
  router.post('/up/page/update', controller.up.updatePage);
};
