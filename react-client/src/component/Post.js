import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const Post = () => {
  const boardCss = 'border border-danger border-2 opacity-50'

  ///////////////////////////sample data///////////////////////////////////////
  const sampleSync = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const array = temp();
        resolve(array);
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
    console.log(postList); 
  }
  ///////////////////////////sample data///////////////////////////////////////

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getResult();
  }, [])
  
  return (
    <div className={boardCss + ' d-flex flex-column'}
      style={{ height: '20893px' }}>
      <div className={boardCss + ' d-flex justify-content-md-between'} style={{maxHeight:'6.58rem'}}>
        <div style={{minWidth:'75%'}} className='d-inline-flex p-3 align-items-md-center flex-md-wrap'>
          title 크기 키우고
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