import { defineStore } from 'pinia'
import UsersApi  from '../api/Maintenance/users'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        history: [],
        meta: {
            current_page: 1,
            from: 1,
            to: 1,
            total: 1,
            last_page: 1,
            per_page: 25
        },
        historyMeta: {
            current_page: 1,
            from: 1,
            to: 1,
            total: 1,
            last_page: 1,
            per_page: 25
        },
        roles:[],
        positions:[],
        departments:[],
        branches:[],
        user: []
    }),
    getters: {
        usersList: state => state.users,
        userHistory: state => state.history,
    },
    actions: {
        async get(params) {
            const response = await UsersApi.get(params)
            this.users = response.data.result.data
            this.user = response.data.result.data
            this.meta = response.data.result.meta
        },
        async view(id) {
            const response = await UsersApi.view(id)
            return response.data.result
        },
        async viewHistory(id, params) {
            const response = await UsersApi.viewHistory(id, params)
            this.history = response.data.result.data
            this.historyMeta = response.data.result.meta
        },
        async update(payload, id) {
            const response = await UsersApi.update(payload, id)
            return response.data.result
        },
        async updatePassword(payload, id) {
            const response = await UsersApi.updatePassword(payload, id)
            return response.data.result
        },
        async updateStatus(payload, id) {
            const response = await UsersApi.updateStatus(payload, id)
            return response.data.result
        },
        async add(payload) {
            const response = await UsersApi.add(payload)
            return response.data.result

        },
        async printUserXLSX(payload) {
            const response = await UsersApi.printUserXLSX(payload)
            return response.data

        },
        
        // Drop Downs Data
        async getStatusDropdown(){
            const response = await UsersApi.getStatus()
            this.statusDropdown =  response.data.result
        },
        async getRoledata(){
            const response = await UsersApi.getRole()
            const mapRoles = response.data.result
            this.roles = mapRoles.map(item => {
               return {
                    id: parseInt(item.value),
                    name: item.title
                }
            })
        },
        async getPositiondata(){
            const response = await UsersApi.getPosition()
            this.positions = response.data.result
        },
        async getDepartmentsdata(){
            const response = await UsersApi.getDepartment()
            this.departments = response.data.result
        },
        async getBranchesdata(){
            const response = await UsersApi.getBranch()
            this.branches = response.data.result
        },
    }
})
