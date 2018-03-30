import { UPDATE_DOOGS_COUNT } from '../../store/reducers'
export default function mapDispatchToProps(dispatch) {
    return {
        updataCount(count,id) {
            dispatch({
                type: UPDATE_DOOGS_COUNT,
                data: count,
                id
            })
        }
    }
}