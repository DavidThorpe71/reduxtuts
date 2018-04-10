import { CHANGE_TEST_OUTCOME } from '../actions/test';

const initialState = {
    testSuccess: false,
};

export default function (state = initialState, action) {
    const { type } = action;
    switch (type) {
        case CHANGE_TEST_OUTCOME:
            return {
                ...state,
                testSuccess: !state.testSuccess
            };
        default:
            return state;
    }

}