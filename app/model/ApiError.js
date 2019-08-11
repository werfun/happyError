module.exports = app => {
  const Sequelize = app.Sequelize;
  const ApiError = app.model.define('ApiError', {
    id: {
      type: Sequelize.BIGINT(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.BIGINT(10),
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }, 
    request_url: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: '请求地址'
    },
    error_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    msg: {
      type: Sequelize.STRING(1024),
      allowNull: false,
      comment: '错误信息'
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'apiError',
    comment: 'api错误表'
  })

  return ApiError;
}
