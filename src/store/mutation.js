import * as  types from './mutation-types'
import router from '../router'

const getMenuFromRouter = routes => {
    const menuList = routes.filter(item => !item.hidden)
    menuList.map(item => {
        if (item.children && item.children.length) {
            getMenuFromRouter(item)
        }
    })
    return menuList
}
getMenuFromRouter(router)
const state = {
    menus: []
}

export default {
    [types.MENUS] (state, menus) {
        state.menus = menus
    }
}



