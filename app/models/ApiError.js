
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApiError', {
    id: {
      type: DataTypes.BIGINT(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT(10),
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }, 
    request_url: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '请求地址'
    },
    error_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    msg: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      comment: '错误信息'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    modelName: 'apiError',
    comment: 'api错误表'
  })
}
