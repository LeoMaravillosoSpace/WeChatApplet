const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { action, data } = event

  try {
    switch (action) {
      case 'getContacts': {
        return getContacts()
      }
      case 'addContact': {
        return addContact(data)
      }
      case 'updateContact': {
        return updateContact(data)
      }
      case 'deleteContact': {
        return deleteContact(data)
      }
      default: {
        return {
          code: -1,
          message: 'Invalid action'
        }
      }
    }
  } catch (error) {
    console.error('操作失败：', error)
    return {
      code: -1,
      message: '操作失败'
    }
  }
}

// 获取常用联系人列表
async function getContacts() {
  const res = await db.collection('contacts').get()
  return {
    code: 0,
    data: res.data
  }
}

// 添加联系人
async function addContact(contact) {
  const res = await db.collection('contacts').add({
    data: contact
  })
  return {
    code: 0,
    message: '添加联系人成功',
    data: res._id
  }
}
// 更新联系人
async function updateContact(contact) {
  const { _id, ...updateData } = contact
  await db.collection('contacts').doc(_id).update({
    data: updateData
  })
  return {
    code: 0,
    message: '更新联系人成功'
  }
}

// 删除联系人
async function deleteContact(contact) {
  const { _id } = contact
  await db.collection('contacts').doc(_id).remove()
  return {
    code: 0,
    message: '删除联系人成功'
  }
}
