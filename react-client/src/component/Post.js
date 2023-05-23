import React, { useEffect, useState } from 'react'
import { Button, Placeholder } from 'react-bootstrap';

const ContentComponent = (element) => {
  console.log(element.obj.postId.toString());
  return (
    <div className={'d-flex flex-column m-2'} style={{ minHeight: '500px' }}>
      <div className={'border border-danger border-2 d-flex justify-content-md-between rounded'}
        style={{ maxHeight: '6.58rem' }} key={element.obj.postId}>
        <div className='d-inline-flex p-3 align-items-md-center flex-md-wrap title' key={element.obj.postId}>
          {element.obj.postTitle}
        </div>
        <div className={'d-inline-flex flex-md-column flex-md-wrap'} style={{ minWidth: '25%' }}>
          <div style={{minWidth:'40%', maxWidth:'50%', height:'100%'}} className='text-wrap d-flex flex-column justify-content-center'>
            <div className='d-inline-flex p-1 align-items-md-center text-wrap fw-lighter created-info'>
              {element.obj.creater}
            </div>
            <div className='d-inline-flex p-1 align-items-md-center text-wrap created-info fw-lighter'>
              {element.obj.createdAt}
            </div>
            <div className='d-inline-flex p-1 align-items-md-center created-info fw-lighter'>
              {element.obj.modifiedAt}
            </div>
          </div>
          <div className='d-inline-flex flex-column justify-content-md-evenly ' style={{ minHeight: '100%', minWidth:'50%' }}>
            {element.obj.buttonArea ?
              element.obj.buttonArea :
              <>
                <Button bsPrefix='btn btn-outline-primary btn-sm m-2'>
                  Modify
                </Button>
                <Button bsPrefix='btn btn-outline-danger btn-sm m-2'>
                  Delete
                </Button>
              </>
            }
          </div>
        </div>
      </div>
      <div style={{minHeight:'350px'}} className='p-3'>
        {element.obj.postContent}
      </div>
      <div className={'p-3 border border-danger border-2'} style={{minHeight:'150px'}}>
        coment 이건 생각해봐야겟다
      </div>
      
    </div>
  )
}

const Post = () => {
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
    for (let a = 1; a < 6; a++) {
      if (a % 2 == 1) {
        array.push(
          {
            postId: a,
            postTitle: '테스트 ' + a + '번째 글',
            postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
            createdAt: '2023-01-0' + a,
            creater: '누군가' + a,
            modifiedAt: null,
            titleKey: 'titleKey',
            contentKey: 'contentKey',
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
            modifiedAt: '2023-01-2' + a,
          }
        )
      }
    }
    return array;
  }
  
  // 이걸 무한스크롤 형식으로 사용할려면 함수로 빼야함
  const selectPostList = async (startPage = 1, count = 10) => {
    const data = await sampleSync(1121231233);  
    setPostList(preList => [...preList, ...data]);
  }
  ///////////////////////////sample data///////////////////////////////////////
  const [mockList, setMockList] = useState([]);
  const [postList, setPostList] = useState([]);
  
  useEffect(() => {
    setMockList(preList => [...preList, PlaceholderObject(-1), PlaceholderObject(-2)]);
    selectPostList();
  }, [])


  /** 플레이스 홀더 생성 
   * 
   * @param {길이} random 
   * @returns placeholder component
   */
  const randomPlaceholder = (random, flag) => {
    return Array.from({ length: random }).map((_, index) => {
      return createPlaceholder(index, flag);
    })
  }

  const createPlaceholder = (index, flag) => {
    const style = flag
    const keyInt = Math.ceil(Math.random() * 10);
    return (
      <span className={style} key={keyInt + '_' + index}>
        <Placeholder xs={keyInt}/> 
        &nbsp;
      </span>
    )
  }

  const PlaceholderObject = (id) => {
    return {
      postId: 'pk'+ id,
      postTitle: randomPlaceholder(2, 'd-inline-flex align-items-md-center flex-md-wrap title'),
      creater: <Placeholder xs={7} bg='secondary' size='lg' />,
      createdAt: <Placeholder xs={10} bg='secondary' size='lg'/>,
      modifiedAt: <Placeholder xs={9} bg='secondary' size='lg' />,
      buttonArea: (
        <>
          <Placeholder.Button xs={10} aria-hidden='true' variant='outline-primary' />
          <Placeholder.Button xs={10} aria-hidden='true' variant='outline-danger'/>
        </>
      ),
      postContent: randomPlaceholder((4 + Math.random()) * 3, null),
    }
  }

  const renderingComponet = postList.map((element) => {
    return (
      <ContentComponent obj={element} key={element.postId.toString()} />
    )
  })
  
  return (
    <>
      {renderingComponet}
      {mockList.map((element) => {
        return (
          <ContentComponent obj={element} key={element.postId}/>
        )
      })}
    </>
  )
}

export default Post;