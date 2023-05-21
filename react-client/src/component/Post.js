import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const Post = () => {
  const boardCss = 'border border-danger border-2 opacity-50'

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
      array.push(
        {
          postId: a,
          postTitle: '테스트 ' + a + '번째 글',
          postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
          createdAt: '2023-01-01',
          creater: '누군가' + a,
          modifiedAt: null
        }
      )
    }
    return array;
  }
  
  // 이걸 무한스크롤 형식으로 사용할려면 함수로 빼야함
  const getResult = async () => {
    const data = await sampleSync(2000);  
    setPostList(preList => [...preList, ...data]);
  }
  ///////////////////////////sample data///////////////////////////////////////

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getResult();
  }, [])
  
  return (
    <>
      {postList.map((element, index) => {
        return (
          <div className={boardCss + ' d-flex flex-column'}
            style={{ minHeight: '500px' }}
            key={index}>
            <div className={boardCss + ' d-flex justify-content-md-between'} style={{maxHeight:'6.58rem'}}>
              <div style={{minWidth:'75%'}} className='d-inline-flex p-3 align-items-md-center flex-md-wrap'>
                {element.postContent}
              </div>
              <div className={boardCss + ' d-inline-flex flex-md-column flex-md-wrap'}
              style={{minWidth: '25%'}}>
                <div className='d-inline-flex p-1 align-items-md-center'>
                  {element.creater}
                </div>
                <div className='d-inline-flex p-1 align-items-md-center'>
                  {element.createdAt}
                </div>
                <div className='d-inline-flex p-1 align-items-md-center'>
                  {element.modifiedAt}
                </div>
                <div className='d-inline-flex flex-column justify-content-md-evenly' style={{minHeight:'100%'}}>
                  <Button >
                    hello
                  </Button>
                  <Button>
                    world
                  </Button>
                </div>
              </div>

            </div>
            <div style={{minHeight:'300px'}}>
              {element.postContent}
            </div>
            <div>
              coment 이건 생각해봐야겟다
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Post;