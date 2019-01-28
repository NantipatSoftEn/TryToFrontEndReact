import React, {PureComponent} from 'react'
import Loading from './Loading'

class CommentList extends PureComponent {
    render() {
        const {isLoading, comments} = this.props

        if (isLoading) 
            return <Loading/>
        return (
            <ul>
                {comments.map(({id, body}) => <li key={id}>{body}</li>)
}
            </ul>
        )
    }
}

export default CommentList