import React from 'react'
import styled from 'styled-components';

function Comments({key, id, comment, comment_user_id, comment_post_id}) {
  return (
    <div>{comment}</div>
  )
}

export default Comments