module.exports = app => {
  const { router, controller } = app;
  router.get('/up', controller.up.index);
};
