import { connect } from 'react-redux'
import { loadPage } from '../actions'
import { fetchProjects } from '../actions'
import DealsGrid from '../components/DealsGrid/DealsGrid'

const mapStateToProps = state => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = dispatch => ({
    //loadPage: (page, offset) => dispatch(loadPage(page, offset))
    loadPage: (page, offset) => dispatch(fetchProjects(page, offset))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealsGrid)