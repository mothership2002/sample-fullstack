import React from 'react'
import { Button } from 'react-bootstrap';

const Post = () => {
  const boardCss = 'border border-danger border-2 opacity-50'
  return (
    <div className={boardCss + ' d-flex flex-column'}
      style={{ height: '20893px' }}>
      <div className={boardCss + ' d-flex justify-content-md-between'} style={{maxHeight:'6.58rem'}}>
        <div style={{minWidth:'75%'}} className='d-inline-flex p-3 align-items-md-center flex-md-wrap'>
          title
        </div>

        <div className={boardCss + ' d-inline-flex flex-md-column flex-md-wrap'}
        style={{minWidth: '25%'}}>
          <div className='d-inline-flex p-1 align-items-md-center'>
            creater
          </div>
          <div className='d-inline-flex p-1 align-items-md-center'>
            created date
          </div>
          <div className='d-inline-flex p-1 align-items-md-center'>
            modified date
          </div>
          <div className='d-inline-flex flex-column justify-content-md-between' style={{minHeight:'100%'}}>
            <Button>
              hello
            </Button>
            <Button>
              world
            </Button>
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