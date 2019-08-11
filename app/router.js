module.exports = app => {
  const { router, controller } = app;
  router.post('/up', controller.up.getOrCreateUser);
  router.post('/up/page/create', controller.up.createPage);
  router.post('/up/page/update', controller.up.updatePage);
  router.post('/up/resource/create', controller.up.createResource);
  router.post('/up/error/api', controller.up.createApi);
  router.post('/up/error/js', controller.up.createJsError);
};
