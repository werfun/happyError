let Sequelize = require('../mysql/mysql')
const Model = Sequelize.Model

class Page extends Model {}

Page.init({
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
      model: User,
      key: 'id'
    }
  },
  url: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    comment: '浏览地址'
  },
  project: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  ready_time: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    comment: '首次可交互时间'
  },
  onload_time: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    comment: '网页全部加载完成时间'
  },
  during_time: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    comment: '访问持续时间'
  },
  create_time: {
    type: Sequelize.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'page',
  comment: '网页浏览表'
})
