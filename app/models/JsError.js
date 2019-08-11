// let Sequelize = require('../mysql/mysql')
// const Model = Sequelize.Model

// class JsError extends Model {}
// JsError.init({
//   id: {
//     type: Sequelize.BIGINT(10),
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   user_id: {
//     type: Sequelize.BIGINT(10),
//     allowNull: false,
//     references: {
//       model: User,
//       key: 'id'
//     }
//   },
//   msg: {
//     type: Sequelize.STRING(1024),
//     allowNull: false,
//     comment: '错误信息'
//   },
//   create_time: {
//     type: Sequelize.DATE,
//     allowNull: false,
//   }
// }, {
//   sequelize,
//   modelName: 'jsError',
//   comment: 'js错误表'
// })
