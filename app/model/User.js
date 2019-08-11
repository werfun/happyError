module.exports = app => {
  const Sequelize = app.Sequelize;
  const User = app.model.define('user', {
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
    create_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false
  })

  User.findByIp = async function(ip) {
    return await this.findOne({
      where: { ip }
    });
  }

  return User;
}
