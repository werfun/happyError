module.exports = app => {
  const Sequelize = app.Sequelize;
  const Page = app.model.define('page_info', {
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
    url: {
      type: Sequelize.STRING(1024),
      allowNull: false,
      comment: '浏览地址'
    },
    project: {
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
    timestamps: false
  })

  Page.updateById = async function(msg) {
    return await this.update({
      where: { ip }
    });
  }

  return Page;
}
