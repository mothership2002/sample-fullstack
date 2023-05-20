import React from 'react'

const Post = () => {
  const boardCss = 'border border-danger border-2 opacity-50'
  return (
    <div className={boardCss + ' d-flex flex-column'}
      style={{ height: '20893px' }}>
      <div className={boardCss + ' d-flex justify-content-md-between'}>
        <div style={{minWidth:'75%'}}>
          title
        </div>

        <div className={boardCss + ' d-flex flex-md-column '}
        style={{minWidth: '25%'}}>
          <div>
            creater
          </div>
          <div>
            created date
          </div>
          <div>
            modified date
          </div>
        </div>

      </div>
      <div>
        content
      </div>
      <div>
        coment
      </div>
    </div>
  )
}

export default Post;