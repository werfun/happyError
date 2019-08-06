let Sequelize = require('../mysql/mysql')
const Model = Sequelize.Model

class Resource extends Model {}

Resource.init({
  id: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  page_id: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    references: {
      model: Page,
      key: 'id'
    }
  },
  url: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    comment: '浏览地址'
  },
  entry_type: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  duration: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    comment: '加载时间'
  },
  create_time: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'resource',
  comment: '资源加载表'
})
