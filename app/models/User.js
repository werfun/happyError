let Sequelize = require('../mysql/mysql')
const Model = Sequelize.Model

class User extends Model {}

User.init({
  id: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  ip: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '访问ip'
  },
  country: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  browser: {
    type: Sequelize.STRING(16),
    allowNull: false,
    comment: '浏览器'
  },
  platform: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  ratio: {
    type: Sequelize.STRING(32),
    allowNull: false,
    comment: '分辨率'
  },
  create_time: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'user',
  comment: '用户信息表'
})
