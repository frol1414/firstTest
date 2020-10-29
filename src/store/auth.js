import axios from 'axios';

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null,
        token: null,
    },

    getters: {
        authenticated(state) {
            return state.authenticated;
        },

        user(state) {
            return state.user;
        },

        getToken(state) {
            return state.token;
        },
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },

        SET_USER(state, value) {
            state.user = value;
        },
        SET_TOKEN(state, value) {
            state.token = value;
        },
    },

    // actions: {
    //     async signIn({ commit, dispatch }, credentials) {
    //         console.log(credentials);
    //         // await axios.get('/sanctum/csrf-cookie', {withCredentials: true})
    //         await fetch(`https://api2.evolpay.ru/api/sanctum/token`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //                 'Accept': 'application/json',
    //             },
    //             mode: 'no-cors',
    //             body: JSON.stringify({
    //                 ...credentials,
    //             }),
    //         })
    //             .then((res) => console.log(res.json()))
    //             .then((res) => commit('SET_TOKEN', res));
    //
    //         return dispatch('me');
    //     },
    //
    //     me({ commit, state }) {
    //         console.log('token', state.token)
    //         return fetch('https://api2.evolpay.ru/api/user', {
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8',
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${state.token}`,
    //             },
    //             mode: 'no-cors',
    //         })
    //             .then((response) => {
    //                 commit('SET_AUTHENTICATED', true);
    //                 commit('SET_USER', response.data);
    //             })
    //             .catch(() => {
    //                 commit('SET_AUTHENTICATED', false);
    //                 commit('SET_USER', null);
    //             });
    //     },
    // },
    actions: {
        async signIn({ dispatch, commit }, credentials) {
            console.log(credentials);
            // await axios.get('/sanctum/csrf-cookie', {withCredentials: true})
            await axios.post('https://api2.evolpay.ru/api/sanctum/token', credentials)
                .then((res) => commit('SET_TOKEN', res.data));

            return dispatch('me');
        },

        async signOut({ dispatch }) {
            await axios.post('/logout');

            return dispatch('me');
        },

        me({ commit, state }) {
            console.log('token', state.token)
            return axios.get('https://api2.evolpay.ru/api/user', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`,
                },
                mode: 'no-cors',
            })
                .then((response) => {
                    commit('SET_AUTHENTICATED', true);
                    commit('SET_USER', response.data);
                })
                .catch(() => {
                    commit('SET_AUTHENTICATED', false);
                    commit('SET_USER', null);
                });
        },
    },
};
