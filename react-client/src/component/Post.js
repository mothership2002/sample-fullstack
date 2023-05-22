import React, { useEffect, useState } from 'react'
import { Button, Placeholder } from 'react-bootstrap';

const Post = () => {
  const boardCss = 'border border-danger border-2'

  ///////////////////////////sample data///////////////////////////////////////
  const sampleSync = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(temp());
      }, ms)
    })
  }

  const temp = () => {
    const array = [];
    for (let a = 1; a < 11; a++) {
      if (a % 2 == 1) {
        array.push(
          {
            postId: a,
            postTitle: '테스트 ' + a + '번째 글',
            postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
            createdAt: '2023-01-0' + a,
            creater: '누군가' + a,
            modifiedAt: null
          }
        )
      }
      else {
        array.push(
          {
            postId: a,
            postTitle: '테스트 ' + a + '번째 글',
            postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
            createdAt: '2023-01-0' + a,
            creater: '누군가' + a,
            modifiedAt: '2023-01-2' + a
          }
        )
      }
    }
    return array;
  }
  
  // 이걸 무한스크롤 형식으로 사용할려면 함수로 빼야함
  const selectPostList = async (startPage = 1, count = 10) => {
    const data = await sampleSync(99999);  
    setPostList(preList => [...preList, ...data]);
  }
  ///////////////////////////sample data///////////////////////////////////////

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    selectPostList();
  }, [])

  const randomPlaceholder = (random) => {
    return Array.from({ length: random }).map((_, index) => {
      return createPlaceholder();
    })
  }

  const createPlaceholder = () => {
    return (
      <>
        <Placeholder xs={Math.ceil(Math.random() * 10)} /> 
        &nbsp;
      </>
    )
  }

  const randeringContent = (element, index = null) => {
    return (
      <div className={boardCss + 'opacity-50 d-flex flex-column m-2 rounded'} style={{ minHeight: '500px' }} key={index}>
        <div className={boardCss + ' d-flex justify-content-md-between'} style={{ maxHeight: '6.58rem' }}>
          <div style={{minWidth:'75%'}} className='d-inline-flex p-3 align-items-md-center flex-md-wrap'>
            {element ? element.postTitle : <Placeholder xs={12} bg="secondary" size='lg'/>}
          </div>
          <div className={boardCss + ' d-inline-flex flex-md-column flex-md-wrap'}
            style={{minWidth: '25%'}}>
            <div className='d-inline-flex p-1 align-items-md-center' style={{minWidth:'40%'}}>
              {element ? element.creater :  <Placeholder xs={7} bg="secondary" size='lg'/> }
            </div>
            <div className='d-inline-flex p-1 align-items-md-center'>
              {element ? element.createdAt :  <Placeholder xs={10} bg="secondary" size='lg'/> }
            </div>
            <div className='d-inline-flex p-1 align-items-md-center'>
              {element ? element.createdAt :  <Placeholder xs={9} bg="secondary" size='lg'/> }
            </div>
            <div className='d-inline-flex flex-column justify-content-md-evenly' style={{ minHeight: '100%' }}>
              {element ? 
                <>
                  <Button variant="outline-primary" size='sm'>
                    Modify
                  </Button>
                  <Button variant='outline-danger' size='sm'>
                    Delete
                  </Button>
                </>
                :
                <>
                  <Placeholder.Button xs={10} aria-hidden="true"/>
                  <Placeholder.Button xs={10} aria-hidden="true"/>
                </>
              }
            </div>
          </div>
        </div>
        <div style={{minHeight:'350px'}} className='p-3'>
          {element ? element.postContent : randomPlaceholder( (4 + Math.random()) * 3)}
        </div>
        <div className={'p-3 ' + boardCss} style={{minHeight:'150px'}}>
          coment 이건 생각해봐야겟다
        </div>
      </div>
    )
  }
  
  return (
    <>
      {/* {
        postList.map((element, index) => {
          return (randeringContent(element, index))
        })
      } */}
      {randeringContent(null, null)}
    </>
  )
}

export default Post;