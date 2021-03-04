
const zoximaReducer = (state = {}, action) => {
    console.log(';In reducer', action)
    switch (action.type) {
        case 'ON_REGISTARTION':
            return { ...state, loading: true };
        case 'SUCESS_REG':
            return { ...state, news: action.json[0], loading: false }
        default:
            return state;
    }
};
export default zoximaReducer;